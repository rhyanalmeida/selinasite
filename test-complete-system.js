// Automated System Test
// Run this after deployment to verify everything works

const testSystem = async () => {
  console.log('🧪 Testing Complete System...');
  
  // Test 1: Development server
  console.log('1️⃣ Testing Development Server...');
  try {
    const response = await fetch('http://localhost:5179/');
    console.log(`  Server Status: ${response.status === 200 ? '✅ Running' : '❌ Not responding'}`);
  } catch (error) {
    console.log('  ❌ Server not accessible');
  }
  
  // Test 2: Environment variables
  console.log('\n2️⃣ Testing Environment Variables...');
  const envContent = fs.readFileSync('.env', 'utf8');
  const hasAllVars = envContent.includes('VITE_SUPABASE_URL') && 
                     envContent.includes('VITE_SUPABASE_ANON_KEY') && 
                     envContent.includes('STRIPE_SECRET_KEY');
  console.log(`  Environment: ${hasAllVars ? '✅ Configured' : '❌ Missing variables'}`);
  
  // Test 3: File structure
  console.log('\n3️⃣ Testing File Structure...');
  const criticalFiles = [
    'src/components/BookingCalendar.tsx',
    'src/pages/BookingPage.tsx',
    'supabase/functions/stripe-checkout/index.ts',
    'supabase/functions/stripe-webhook/index.ts',
    'supabase/migrations/20250726000000_booking_system.sql'
  ];
  
  let allFilesExist = true;
  criticalFiles.forEach(file => {
    const exists = fs.existsSync(file);
    console.log(`  ${file}: ${exists ? '✅ Exists' : '❌ Missing'}`);
    if (!exists) allFilesExist = false;
  });
  
  console.log('\n🎉 System Test Complete!');
  console.log('📋 Next Steps:');
  console.log('1. Follow DEPLOYMENT_INSTRUCTIONS.md');
  console.log('2. Deploy database and functions');
  console.log('3. Configure Stripe webhooks');
  console.log('4. Test complete user flow');
};

testSystem();
