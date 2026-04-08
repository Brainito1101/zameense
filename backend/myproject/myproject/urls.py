from django.urls import path, include, re_path
from myapp.views import frontend
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('myapp.urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# ✅ Only catch frontend routes (NOT static/assets)
urlpatterns += [
    re_path(r'^(?!api|admin|static|media|assets).*$', frontend),
]