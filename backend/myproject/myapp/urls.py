from rest_framework.routers import DefaultRouter
from django.urls import path
from .views import EmailLoginView, LandViewSet, LeadViewSet, SavedPropertyViewSet, InquiryViewSet, register, contact


router = DefaultRouter()
router.register(r'lands', LandViewSet, basename='land')
router.register(r'leads', LeadViewSet, basename='lead')
router.register(r'saved-properties', SavedPropertyViewSet, basename='saved-property')
router.register(r'inquiries', InquiryViewSet, basename='inquiry')

urlpatterns = [
    path('api/register/', register),
    path('api/login/', EmailLoginView.as_view()),
    path('contact/', contact),
]
urlpatterns += router.urls