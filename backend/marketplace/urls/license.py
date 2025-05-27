# marketplace/urls/license.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from marketplace.views.license.license_key import LicenseKeyViewSet
from marketplace.views.license.download import DownloadHistoryViewSet

router = DefaultRouter()
router.register(r'license-keys', LicenseKeyViewSet, basename='licensekey')
router.register(r'download-history', DownloadHistoryViewSet, basename='downloadhistory')

urlpatterns = [
    path('', include(router.urls)),
]
