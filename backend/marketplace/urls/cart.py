# marketplace/urls/cart.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from marketplace.views.cart.cart import CartViewSet
from marketplace.views.cart.item import CartItemViewSet

router = DefaultRouter()
router.register(r'carts', CartViewSet, basename='cart')
router.register(r'cart-items', CartItemViewSet, basename='cart-item')

urlpatterns = [
    path('', include(router.urls)),
]
