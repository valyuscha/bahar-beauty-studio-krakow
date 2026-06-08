#!/bin/bash
set -e

# Build the frontend
echo "Installing frontend dependencies..."
cd frontend
npm install
echo "Building frontend..."
npm run build
cd ..

# Start the FastAPI backend
echo "Starting server..."
exec uvicorn backend.server:app --host 0.0.0.0 --port "${PORT:-8000}"
