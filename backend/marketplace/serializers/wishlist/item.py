
# serializers/wishlist/item.py
from rest_framework import serializers
from marketplace.models.wishlist.item import WishlistItem

class WishlistItemSerializer(serializers.ModelSerializer):
    """ウィッシュリストアイテムシリアライザ"""
    class Meta:
        model = WishlistItem
        fields = ['id', 'wishlist', 'product', 'added_at']
        read_only_fields = ['id', 'wishlist', 'added_at']
