# Calendly Integration Setup

## Quick Setup Steps:

### 1. Create Calendly Account
- Go to [calendly.com](https://calendly.com)
- Sign up for a free account
- Choose your username (e.g., `mountainmeditation`)

### 2. Create Event Types
Create these event types in Calendly:

#### Meditation Session (30 min)
- **Duration**: 30 minutes
- **Description**: Guided meditation session for stress relief and inner peace
- **Location**: Video call (Zoom/Google Meet)

#### Yoga Session (45 min)
- **Duration**: 45 minutes  
- **Description**: Gentle yoga practice for physical and mental wellness
- **Location**: Video call (Zoom/Google Meet)

#### Counseling Session (60 min)
- **Duration**: 60 minutes
- **Description**: Relationship counseling and emotional support
- **Location**: Video call (Zoom/Google Meet)

### 3. Update the Calendly URL
In `src/pages/CalendlyPage.tsx`, replace:
```tsx
data-url="https://calendly.com/YOUR_CALENDLY_USERNAME"
```
with your actual Calendly URL, for example:
```tsx
data-url="https://calendly.com/mountainmeditation"
```

### 4. Optional: Customize Calendly
- Add your logo and branding
- Set up payment integration (if you want to charge per session)
- Configure email notifications
- Set up calendar integration

## How It Works:

1. **User pays** → Redirected to `/calendly`
2. **User sees Calendly widget** → Can book available time slots
3. **Calendly handles** → Scheduling, reminders, video calls
4. **You get notified** → Via email when someone books

## Benefits of Using Calendly:

✅ **No database needed** for booking system  
✅ **Automatic reminders** and notifications  
✅ **Video call integration** (Zoom, Google Meet, etc.)  
✅ **Mobile-friendly** booking experience  
✅ **Calendar sync** with your existing calendar  
✅ **Professional appearance** and reliability  

## Testing the Flow:

1. Start your dev server: `npm run dev`
2. Go to `http://localhost:5179/`
3. Sign up for an account
4. Choose a plan and complete payment
5. You'll be redirected to the Calendly page
6. Book a session through the Calendly widget

The integration is now complete! Users will be redirected to Calendly after payment, where they can easily book their sessions. 