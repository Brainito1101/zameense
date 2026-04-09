#!/bin/bash

echo "=== Building React Frontend ==="
cd vite-project
npm install
npm run build
cd ..

echo "=== Setting up Django Backend ==="
cd backend
pip install -r requirements.txt
python manage.py collectstatic --noinput
python manage.py migrate
cd ..

echo "=== Build Complete ==="