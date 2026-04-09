from django.urls import path, include, re_path
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from myapp.views import frontend

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('myapp.urls')),
]

# MEDIA (important)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# FRONTEND (must be LAST)
urlpatterns += [
    re_path(r'^.*$', frontend),
]