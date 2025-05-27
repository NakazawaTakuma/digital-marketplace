# marketplace/urls/order.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from marketplace.views.order.order import OrderViewSet
from marketplace.views.order.item import OrderItemViewSet

router = DefaultRouter()
router.register(r'orders', OrderViewSet, basename='order')
router.register(r'order-items', OrderItemViewSet, basename='order-item')

urlpatterns = [
    path('', include(router.urls)),
]

