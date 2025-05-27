# marketplace/urls/wishlist.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from marketplace.views.wishlist.wishlist import WishlistViewSet
from marketplace.views.wishlist.item import WishlistItemViewSet

router = DefaultRouter()
router.register(r'wishlists', WishlistViewSet, basename='wishlist')
router.register(r'wishlist-items', WishlistItemViewSet, basename='wishlist-item')

urlpatterns = [
    path('', include(router.urls)),
]
