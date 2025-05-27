# serializers/product/product.py
from rest_framework import serializers
from marketplace.models.product.product import Product
from .category import CategorySerializer
from .tag import TagSerializer
from .asset import ProductAssetSerializer

class ProductSerializer(serializers.ModelSerializer):
    """商品シリアライザ"""
    categories = CategorySerializer(many=True, read_only=True)
    tags = TagSerializer(many=True, read_only=True)
    assets = ProductAssetSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ['id', 'seller', 'title', 'description', 'price', 'discount_price', 'status', 'categories', 'tags', 'assets', 'created_at', 'updated_at']
        read_only_fields = ['id', 'seller', 'created_at', 'updated_at']
