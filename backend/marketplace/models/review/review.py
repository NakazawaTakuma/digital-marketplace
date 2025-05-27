
# marketplace/models/review/review.py
from django.db import models
from marketplace.models.user.core import User
from marketplace.models.product.product import Product

class Review(models.Model):
    """商品レビュー"""
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='reviews', help_text="対象商品")
    reviewer = models.ForeignKey(User, on_delete=models.CASCADE, help_text="レビュー投稿者")
    rating = models.PositiveSmallIntegerField(help_text="評価点数(1-5)")
    comment = models.TextField(blank=True, help_text="コメント内容")
    created_at = models.DateTimeField(auto_now_add=True, help_text="投稿日時")
