#!/bin/bash

echo "=== Building React ==="
cd vite-project
npm install
npm run build
cd ..

echo "=== Setting up Django ==="
pip install -r backend/requirements.txt
cd backend
python manage.py collectstatic --noinput
python manage.py migrate