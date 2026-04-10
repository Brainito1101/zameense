from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('myapp.urls')),
]

# Add static files BEFORE catch-all routes
if not settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static('/assets/', document_root=settings.BASE_DIR / 'templates' / 'assets')

# Catch-all at the END
urlpatterns += [
    path('', TemplateView.as_view(template_name='index.html')),
    path('<path:url>', TemplateView.as_view(template_name='index.html')),
]