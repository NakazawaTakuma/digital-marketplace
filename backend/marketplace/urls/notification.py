# marketplace/urls/license.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from marketplace.views.notification.notification import NotificationViewSet

router = DefaultRouter()
router.register(r'notifications', NotificationViewSet, basename='notification')

urlpatterns = [
    path('', include(router.urls)),
]
