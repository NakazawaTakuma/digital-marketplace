# marketplace/urls/product.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from marketplace.views.product.category import CategoryViewSet
from marketplace.views.product.tag import TagViewSet
from marketplace.views.product.product import ProductViewSet
from marketplace.views.product.asset import ProductAssetViewSet

router = DefaultRouter()
router.register(r'products', ProductViewSet, basename='product')
router.register(r'categories', CategoryViewSet)
router.register(r'tags', TagViewSet)
router.register(r'product-assets', ProductAssetViewSet, basename='productasset')

urlpatterns = [
    path('', include(router.urls)),
]

