from django.urls import path, include
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.http import HttpResponse
from django.urls import path, include, re_path
from myapp.views import frontend

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('myapp.urls')),
]



urlpatterns += [
    re_path(r'^(?!api|admin|static|media).*$', frontend),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)