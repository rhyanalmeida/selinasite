const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧪 Testing Calendly Integration Flow...\n');

// Check if development server is running
try {
  const response = execSync('curl -s -o /dev/null -w "%{http_code}" http://localhost:5179/', { encoding: 'utf8' });
  if (response.trim() === '200') {
    console.log('✅ Development server is running at http://localhost:5179/');
  } else {
    console.log('❌ Development server not responding properly');
    process.exit(1);
  }
} catch (error) {
  console.log('❌ Development server not running. Please run: npm run dev');
  process.exit(1);
}

// Check Calendly page exists
const calendlyPagePath = path.join(__dirname, 'src', 'pages', 'CalendlyPage.tsx');
if (fs.existsSync(calendlyPagePath)) {
  console.log('✅ CalendlyPage.tsx exists');
} else {
  console.log('❌ CalendlyPage.tsx not found');
  process.exit(1);
}

// Check App.tsx has Calendly route
const appPath = path.join(__dirname, 'src', 'App.tsx');
const appContent = fs.readFileSync(appPath, 'utf8');
if (appContent.includes('CalendlyPage') && appContent.includes('/calendly')) {
  console.log('✅ Calendly route added to App.tsx');
} else {
  console.log('❌ Calendly route not found in App.tsx');
  process.exit(1);
}

// Check checkout service redirects to Calendly
const checkoutPath = path.join(__dirname, 'src', 'services', 'checkout.ts');
const checkoutContent = fs.readFileSync(checkoutPath, 'utf8');
if (checkoutContent.includes('/calendly')) {
  console.log('✅ Checkout service redirects to Calendly after payment');
} else {
  console.log('❌ Checkout service not redirecting to Calendly');
  process.exit(1);
}

console.log('\n🎉 Calendly Integration Test Complete!');
console.log('\n📋 Manual Testing Steps:');
console.log('1. Go to http://localhost:5179/');
console.log('2. Sign up for an account');
console.log('3. Choose a plan and complete payment');
console.log('4. You should be redirected to the Calendly page');
console.log('5. Update the Calendly URL in CalendlyPage.tsx with your actual Calendly username');
console.log('\n📖 See CALENDLY_SETUP.md for detailed setup instructions'); 