# marketplace/models/cart/cart.py
from django.db import models
from marketplace.models.user.core import User

class Cart(models.Model):
    """カート（ユーザーごと）"""
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='cart', help_text="カート所有者")
    created_at = models.DateTimeField(auto_now_add=True, help_text="作成日時")
    updated_at = models.DateTimeField(auto_now=True, help_text="更新日時")
