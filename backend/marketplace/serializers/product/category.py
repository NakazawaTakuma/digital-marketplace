from rest_framework import serializers
from marketplace.models.product.category import Category

class CategorySerializer(serializers.ModelSerializer):
    """商品カテゴリシリアライザ"""
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug', 'parent', 'created_at']
        read_only_fields = ['id', 'created_at']