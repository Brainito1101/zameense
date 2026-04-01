from django.contrib import admin
from django.urls import path, include
from myapp.views import EmailTokenObtainPairView
from rest_framework_simplejwt.views import TokenRefreshView
from myapp.views import register  
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [

    path('admin/', admin.site.urls),

    # ✅ Register
    path('api/register/', register),

    # ✅ Email Login (MAIN)
    path('api/login/', EmailTokenObtainPairView.as_view()),

    # ✅ Refresh Token
    path('api/token/refresh/', TokenRefreshView.as_view()),

    # other app routes
    path('api/', include('myapp.urls')),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)