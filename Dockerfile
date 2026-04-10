# Stage 1: If you want to build Vite (optional)
FROM node:18 AS frontend-builder

WORKDIR /app/vite-project
COPY vite-project/package*.json ./
RUN npm install
COPY vite-project/ .
RUN npm run build

# Stage 2: Setup Django + serve frontend
FROM python:3.9

WORKDIR /app

# Copy backend
COPY backend/ ./backend/

# Install Python dependencies
RUN pip install --no-cache-dir -r backend/requirements.txt

# Create staticfiles directory
RUN mkdir -p backend/templates/frontend backend/staticfiles

# Copy built frontend (dist folder) to Django
COPY --from=frontend-builder /app/vite-project/dist/ ./backend/templates/frontend/

# Also copy to static files
COPY --from=frontend-builder /app/vite-project/dist/ ./backend/staticfiles/frontend/

# Expose port
EXPOSE 8000

# Run Django server
CMD cd backend && gunicorn config.wsgi:application --bind 0.0.0.0:8000
