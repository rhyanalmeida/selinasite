-- Booking System and User Profiles Migration
-- This migration adds booking functionality and user profiles

-- User Profiles Table
CREATE TABLE IF NOT EXISTS user_profiles (
  id bigint primary key generated always as identity,
  user_id uuid references auth.users(id) not null unique,
  full_name text,
  phone text,
  timezone text default 'America/New_York',
  preferences jsonb default '{}',
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own profile"
    ON user_profiles
    FOR SELECT
    TO authenticated
    USING (user_id = auth.uid());

CREATE POLICY "Users can update their own profile"
    ON user_profiles
    FOR UPDATE
    TO authenticated
    USING (user_id = auth.uid());

CREATE POLICY "Users can insert their own profile"
    ON user_profiles
    FOR INSERT
    TO authenticated
    WITH CHECK (user_id = auth.uid());

-- Bookings Table
CREATE TYPE booking_status AS ENUM (
    'pending',
    'confirmed',
    'cancelled',
    'completed'
);

CREATE TYPE session_type AS ENUM (
    'meditation',
    'yoga',
    'counseling',
    'group_session'
);

CREATE TABLE IF NOT EXISTS bookings (
  id bigint primary key generated always as identity,
  user_id uuid references auth.users(id) not null,
  session_type session_type not null,
  session_date date not null,
  session_time time not null,
  duration_minutes integer default 60,
  status booking_status default 'pending',
  notes text,
  instructor_id uuid references auth.users(id),
  stripe_payment_intent_id text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own bookings"
    ON bookings
    FOR SELECT
    TO authenticated
    USING (user_id = auth.uid());

CREATE POLICY "Users can create their own bookings"
    ON bookings
    FOR INSERT
    TO authenticated
    WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their own bookings"
    ON bookings
    FOR UPDATE
    TO authenticated
    USING (user_id = auth.uid());

-- Available Time Slots Table
CREATE TABLE IF NOT EXISTS available_slots (
  id bigint primary key generated always as identity,
  day_of_week integer not null check (day_of_week >= 0 and day_of_week <= 6),
  start_time time not null,
  end_time time not null,
  session_type session_type not null,
  max_bookings integer default 1,
  is_active boolean default true,
  created_at timestamp with time zone default now()
);

-- Insert default available slots (Monday-Friday, 9 AM - 6 PM)
INSERT INTO available_slots (day_of_week, start_time, end_time, session_type) VALUES
(1, '09:00:00', '10:00:00', 'meditation'),
(1, '10:00:00', '11:00:00', 'yoga'),
(1, '11:00:00', '12:00:00', 'counseling'),
(1, '14:00:00', '15:00:00', 'meditation'),
(1, '15:00:00', '16:00:00', 'yoga'),
(1, '16:00:00', '17:00:00', 'counseling'),
(2, '09:00:00', '10:00:00', 'meditation'),
(2, '10:00:00', '11:00:00', 'yoga'),
(2, '11:00:00', '12:00:00', 'counseling'),
(2, '14:00:00', '15:00:00', 'meditation'),
(2, '15:00:00', '16:00:00', 'yoga'),
(2, '16:00:00', '17:00:00', 'counseling'),
(3, '09:00:00', '10:00:00', 'meditation'),
(3, '10:00:00', '11:00:00', 'yoga'),
(3, '11:00:00', '12:00:00', 'counseling'),
(3, '14:00:00', '15:00:00', 'meditation'),
(3, '15:00:00', '16:00:00', 'yoga'),
(3, '16:00:00', '17:00:00', 'counseling'),
(4, '09:00:00', '10:00:00', 'meditation'),
(4, '10:00:00', '11:00:00', 'yoga'),
(4, '11:00:00', '12:00:00', 'counseling'),
(4, '14:00:00', '15:00:00', 'meditation'),
(4, '15:00:00', '16:00:00', 'yoga'),
(4, '16:00:00', '17:00:00', 'counseling'),
(5, '09:00:00', '10:00:00', 'meditation'),
(5, '10:00:00', '11:00:00', 'yoga'),
(5, '11:00:00', '12:00:00', 'counseling'),
(5, '14:00:00', '15:00:00', 'meditation'),
(5, '15:00:00', '16:00:00', 'yoga'),
(5, '16:00:00', '17:00:00', 'counseling');

-- Function to automatically create user profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.user_profiles (user_id, full_name)
  VALUES (new.id, new.raw_user_meta_data->>'full_name');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create user profile on signup
CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Function to get available slots for a date
CREATE OR REPLACE FUNCTION get_available_slots(booking_date date)
RETURNS TABLE (
  slot_id bigint,
  start_time time,
  end_time time,
  session_type session_type,
  is_available boolean
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    as.id as slot_id,
    as.start_time,
    as.end_time,
    as.session_type,
    CASE 
      WHEN b.id IS NULL THEN true
      ELSE false
    END as is_available
  FROM available_slots as
  LEFT JOIN bookings b ON 
    b.session_date = booking_date AND
    b.session_time = as.start_time AND
    b.status IN ('pending', 'confirmed')
  WHERE 
    as.day_of_week = EXTRACT(DOW FROM booking_date) AND
    as.is_active = true
  ORDER BY as.start_time;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant permissions
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT ALL ON user_profiles TO authenticated;
GRANT ALL ON bookings TO authenticated;
GRANT SELECT ON available_slots TO authenticated;
GRANT EXECUTE ON FUNCTION get_available_slots(date) TO authenticated; 