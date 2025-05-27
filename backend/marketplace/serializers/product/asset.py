
# serializers/product/asset.py
from rest_framework import serializers
from marketplace.models.product.asset import ProductAsset

class ProductAssetSerializer(serializers.ModelSerializer):
    """商品アセットシリアライザ"""
    class Meta:
        model = ProductAsset
        fields = ['id', 'product', 'file', 'preview_image', 'asset_type', 'created_at']
        read_only_fields = ['id', 'created_at']