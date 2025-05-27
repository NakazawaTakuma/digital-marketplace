# marketplace/models/cart/item.py
from django.db import models
from .cart import Cart
from marketplace.models.product.product import Product

class CartItem(models.Model):
    """カートアイテム"""
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name='items', help_text="親カート")
    product = models.ForeignKey(Product, on_delete=models.CASCADE, help_text="カート商品")
    quantity = models.PositiveIntegerField(default=1, help_text="数量")
