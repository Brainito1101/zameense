#!/bin/bash

echo "=== Building React Frontend ==="
cd vite-project
npm install
npm run build
cd ..

echo "=== Setting up Django Backend ==="
pip install -r backend/requirements.txt
cd backend
python manage.py collectstatic --noinput
python manage.py migrate
cd ..

echo "=== Build Complete ==="