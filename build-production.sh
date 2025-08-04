#!/bin/bash
# Production Build Script

echo "🏗️ Building for production..."

# Install dependencies
npm install

# Build the application
npm run build

# Test the build
echo "🧪 Testing production build..."
npm run preview

echo "✅ Production build complete!"
echo "📁 Build files in: dist/"
echo "🚀 Ready for deployment!"
