from django.urls import path, include
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.http import HttpResponse

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('myapp.urls')),
    path('favicon.ico', lambda request: HttpResponse(status=204)),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)