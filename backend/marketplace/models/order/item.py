
# marketplace/models/order/item.py
from django.db import models
from .order import Order
from marketplace.models.product.product import Product

class OrderItem(models.Model):
    """注文アイテム"""
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items', help_text="親注文")
    product = models.ForeignKey(Product, on_delete=models.CASCADE, help_text="注文商品")
    unit_price = models.DecimalField(max_digits=10, decimal_places=2, help_text="単価")
    quantity = models.PositiveIntegerField(default=1, help_text="数量")
