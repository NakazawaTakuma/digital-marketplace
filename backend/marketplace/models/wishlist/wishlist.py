
# marketplace/models/wishlist/wishlist.py
from django.db import models
from marketplace.models.user.core import User

class Wishlist(models.Model):
    """ウィッシュリスト（ユーザーごと）"""
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='wishlist', help_text="リスト所有者")
    created_at = models.DateTimeField(auto_now_add=True, help_text="作成日時")
