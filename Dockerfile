# Stage 1: If you want to build Vite (optional)
FROM node:20 AS frontend-builder

WORKDIR /app/vite-project
COPY vite-project/package*.json ./
RUN npm install
COPY vite-project/ .
RUN npm run build

# Stage 2: Setup Django + serve frontend
FROM python:3.12

WORKDIR /app

# Copy backend
COPY backend/ ./backend/

# Install Python dependencies
RUN pip install --no-cache-dir -r backend/requirements.txt

RUN mkdir -p backend/templates backend/staticfiles

# Copy built frontend directly to templates
COPY --from=frontend-builder /app/vite-project/dist/index.html ./backend/templates/
COPY --from=frontend-builder /app/vite-project/dist/assets ./backend/templates/assets

# Also copy to static files
COPY --from=frontend-builder /app/vite-project/dist/ ./backend/staticfiles/

# Expose port
EXPOSE 8000

# Run Django server
CMD cd backend && gunicorn myproject.myproject.wsgi:application --bind 0.0.0.0:8000