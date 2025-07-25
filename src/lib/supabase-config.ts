import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate URL format
const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// Check if Supabase is properly configured
export const isSupabaseConfigured = !!(
  supabaseUrl && 
  supabaseAnonKey && 
  typeof supabaseUrl === 'string' &&
  typeof supabaseAnonKey === 'string' &&
  supabaseUrl.length > 10 &&
  supabaseAnonKey.length > 10 &&
  isValidUrl(supabaseUrl) &&
  supabaseUrl.includes('supabase')
);

if (!isSupabaseConfigured) {
  console.error('❌ Supabase environment variables are not configured!');
  console.error('Please create a .env file in the project root with:');
  console.error('VITE_SUPABASE_URL=https://your-project-id.supabase.co');
  console.error('VITE_SUPABASE_ANON_KEY=your-anon-key-here');
  console.error('');
  console.error('To get these values:');
  console.error('1. Go to https://supabase.com');
  console.error('2. Create a new project or select existing one');
  console.error('3. Go to Settings > API');
  console.error('4. Copy the Project URL and anon public key');
  console.error('');
  console.error('The app will not work without proper Supabase configuration.');
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
); 