#!/bin/bash
# Quick Start Script for Mountain Meditation & Yoga

echo "🚀 Starting Mountain Meditation & Yoga System..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project directory"
    exit 1
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Start development server
echo "🌐 Starting development server..."
echo "✅ Server will be available at: http://localhost:5179/"
echo "📋 Follow DEPLOYMENT_INSTRUCTIONS.md for backend setup"
echo ""
npm run dev
