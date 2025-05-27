# marketplace/urls/order.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from marketplace.views.review.review import ReviewViewSet

router = DefaultRouter()
router.register(r'reviews', ReviewViewSet, basename='review')

urlpatterns = [
    path('', include(router.urls)),
]

