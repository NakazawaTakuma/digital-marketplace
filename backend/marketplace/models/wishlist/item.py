
# marketplace/models/wishlist/item.py
from django.db import models
from .wishlist import Wishlist
from marketplace.models.product.product import Product

class WishlistItem(models.Model):
    """ウィッシュリストアイテム"""
    wishlist = models.ForeignKey(Wishlist, on_delete=models.CASCADE, related_name='items', help_text="親ウィッシュリスト")
    product = models.ForeignKey(Product, on_delete=models.CASCADE, help_text="ウィッシュリスト商品")
    added_at = models.DateTimeField(auto_now_add=True, help_text="追加日時")
