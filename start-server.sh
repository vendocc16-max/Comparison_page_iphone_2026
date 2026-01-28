#!/bin/bash

# Quick Start Script for iPhone Comparison Page
# This script helps you get started quickly

echo "🍎 iPhone Comparison Page - Quick Start"
echo "========================================"
echo ""

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: index.html not found. Please run this script from the project directory."
    exit 1
fi

echo "✅ Project files found!"
echo ""

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Offer different server options
echo "Choose a server option:"
echo ""
echo "1. Python 3 (recommended)"
echo "2. Python 2"
echo "3. Node.js (http-server)"
echo "4. PHP"
echo "5. Exit"
echo ""

read -p "Enter your choice (1-5): " choice

case $choice in
    1)
        if command_exists python3; then
            echo ""
            echo "🚀 Starting Python 3 server on http://localhost:8000"
            echo "Press Ctrl+C to stop"
            echo ""
            python3 -m http.server 8000
        else
            echo "❌ Python 3 not found. Please install Python 3 or choose another option."
            exit 1
        fi
        ;;
    2)
        if command_exists python; then
            echo ""
            echo "🚀 Starting Python 2 server on http://localhost:8000"
            echo "Press Ctrl+C to stop"
            echo ""
            python -m SimpleHTTPServer 8000
        else
            echo "❌ Python not found. Please install Python or choose another option."
            exit 1
        fi
        ;;
    3)
        if command_exists http-server; then
            echo ""
            echo "🚀 Starting Node.js server on http://localhost:8000"
            echo "Press Ctrl+C to stop"
            echo ""
            http-server -p 8000 -o
        else
            echo ""
            echo "http-server not found. Installing..."
            if command_exists npm; then
                npm install
                echo ""
                echo "🚀 Starting Node.js server on http://localhost:8000"
                echo "Press Ctrl+C to stop"
                echo ""
                npx http-server -p 8000 -o
            else
                echo "❌ npm not found. Please install Node.js or choose another option."
                exit 1
            fi
        fi
        ;;
    4)
        if command_exists php; then
            echo ""
            echo "🚀 Starting PHP server on http://localhost:8000"
            echo "Press Ctrl+C to stop"
            echo ""
            php -S localhost:8000
        else
            echo "❌ PHP not found. Please install PHP or choose another option."
            exit 1
        fi
        ;;
    5)
        echo "Exiting..."
        exit 0
        ;;
    *)
        echo "❌ Invalid choice. Please run the script again."
        exit 1
        ;;
esac
