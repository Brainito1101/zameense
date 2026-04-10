from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.http import FileResponse
import os

def serve_index(request, path=''):
    return FileResponse(open(os.path.join(settings.BASE_DIR, 'templates', 'index.html'), 'rb'), content_type='text/html')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('myapp.urls')),
    path('', serve_index),
    path('<path:path>', serve_index),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)