# serializers/product/tag.py
from rest_framework import serializers
from marketplace.models.product.tag import Tag

class TagSerializer(serializers.ModelSerializer):
    """商品タグシリアライザ"""
    class Meta:
        model = Tag
        fields = ['id', 'name', 'slug']
        read_only_fields = ['id']