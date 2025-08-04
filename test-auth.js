// Test script to verify Supabase authentication
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yloroyrwlfcvocwxtnta.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlsb3JveXJ3bGZjdm9jd3h0bnRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzMTI0MzcsImV4cCI6MjA2OTg4ODQzN30.nUpY7_On_Elxn9__JseUnlIRU7QvfU5ac33CGXZPWLw';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testConnection() {
  console.log('Testing Supabase connection...');
  
  try {
    // Test basic connection by checking auth
    const { data, error } = await supabase.auth.getSession();
    
    if (error) {
      console.error('❌ Supabase connection failed:', error.message);
      return false;
    }
    
    console.log('✅ Supabase connection successful!');
    return true;
  } catch (error) {
    console.error('❌ Connection test failed:', error.message);
    return false;
  }
}

async function testSignUp() {
  console.log('\nTesting user signup...');
  
  const testEmail = `testuser${Date.now()}@gmail.com`;
  const testPassword = 'TestPassword123!';
  
  try {
    const { data, error } = await supabase.auth.signUp({
      email: testEmail,
      password: testPassword,
      options: {
        data: {
          full_name: 'Test User',
        },
      },
    });
    
    if (error) {
      console.error('❌ Signup failed:', error.message);
      return false;
    }
    
    console.log('✅ Signup successful! User ID:', data.user?.id);
    console.log('✅ Email:', testEmail);
    return { user: data.user, email: testEmail, password: testPassword };
  } catch (error) {
    console.error('❌ Signup test failed:', error.message);
    return false;
  }
}

async function testSignIn(email, password) {
  console.log('\nTesting user signin...');
  
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) {
      console.error('❌ Signin failed:', error.message);
      return false;
    }
    
    console.log('✅ Signin successful! User:', data.user?.email);
    return data.user;
  } catch (error) {
    console.error('❌ Signin test failed:', error.message);
    return false;
  }
}

async function runTests() {
  console.log('🧪 Starting authentication tests...\n');
  
  // Test 1: Basic Supabase connection
  const connectionWorks = await testConnection();
  if (!connectionWorks) {
    console.log('\n❌ Supabase connection failed. Stopping tests.');
    return;
  }
  
  // Test 2: User signup
  const signupResult = await testSignUp();
  if (!signupResult) {
    console.log('\n❌ User signup failed. Stopping tests.');
    return;
  }
  
  // Test 3: User signin
  const signinWorks = await testSignIn(signupResult.email, signupResult.password);
  if (!signinWorks) {
    console.log('\n❌ User signin failed.');
    return;
  }
  
  console.log('\n🎉 All tests passed! Authentication is working correctly.');
  console.log('\n📧 Test Account Details:');
  console.log(`Email: ${signupResult.email}`);
  console.log(`Password: ${signupResult.password}`);
}

runTests().catch(console.error); 