const fs = require('fs');
const path = require('path');

console.log('🔧 Supabase Environment Setup');
console.log('=============================\n');

console.log('Please provide your Supabase project information:');
console.log('1. Go to https://supabase.com/dashboard');
console.log('2. Select your project');
console.log('3. Go to Settings > API');
console.log('4. Copy the Project URL and anon public key\n');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter your Supabase Project URL (e.g., https://your-project.supabase.co): ', (url) => {
  readline.question('Enter your Supabase anon public key (starts with eyJ...): ', (key) => {
    const envContent = `# Supabase Configuration
VITE_SUPABASE_URL=${url}
VITE_SUPABASE_ANON_KEY=${key}

# Stripe Configuration (optional - for webhooks)
# STRIPE_SECRET_KEY=your-stripe-secret-key
# STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
`;

    const envPath = path.join(__dirname, '.env');
    
    try {
      fs.writeFileSync(envPath, envContent);
      console.log('\n✅ Environment file created successfully!');
      console.log(`📁 File location: ${envPath}`);
      console.log('\n🚀 You can now run: npm run dev');
      console.log('\n📝 Next steps:');
      console.log('1. Restart your development server');
      console.log('2. Test the authentication on the home page');
      console.log('3. Try signing up/signing in');
      console.log('4. Test the checkout flow');
    } catch (error) {
      console.error('❌ Error creating .env file:', error.message);
    }
    
    readline.close();
  });
}); 