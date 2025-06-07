from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import NotificationViewSet, LicenseKeyViewSet, DownloadHistoryViewSet

router = DefaultRouter()
router.register(r'notifications', NotificationViewSet, basename='notification')
router.register(r'license-keys', LicenseKeyViewSet, basename='licensekey')
router.register(r'download-history', DownloadHistoryViewSet, basename='downloadhistory')

urlpatterns = [
    path('', include(router.urls)),
]