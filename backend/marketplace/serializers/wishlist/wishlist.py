# serializers/wishlist/wishlist.py
from rest_framework import serializers
from marketplace.models.wishlist.wishlist import Wishlist
from .item import WishlistItemSerializer

class WishlistSerializer(serializers.ModelSerializer):
    """ウィッシュリストシリアライザ"""
    items = WishlistItemSerializer(many=True, read_only=True)

    class Meta:
        model = Wishlist
        fields = ['id', 'user', 'created_at', 'items']
        read_only_fields = ['id', 'user', 'created_at']