from rest_framework import serializers
from .models import Category, Tag, Product, ProductAsset

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug', 'parent', 'created_at']
        read_only_fields = ['id', 'created_at']

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'name', 'slug']
        read_only_fields = ['id']

class ProductAssetSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductAsset
        fields = ['id', 'product', 'file', 'preview_image', 'asset_type', 'created_at']
        read_only_fields = ['id', 'created_at']

class ProductSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(many=True, read_only=True)
    tags = TagSerializer(many=True, read_only=True)
    assets = ProductAssetSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ['id', 'seller', 'title', 'description', 'price', 'discount_price', 'status', 'categories', 'tags', 'assets', 'created_at', 'updated_at']
        read_only_fields = ['id', 'seller', 'created_at', 'updated_at']