# marketplace/models/product/category.py
from django.db import models

class Category(models.Model):
    """商品カテゴリ"""
    name = models.CharField(max_length=100, help_text="カテゴリ名")
    slug = models.SlugField(unique=True, help_text="URL用一意スラッグ")
    parent = models.ForeignKey(
        'self', null=True, blank=True, related_name='children', on_delete=models.CASCADE,
        help_text="親カテゴリ"
    )
    created_at = models.DateTimeField(auto_now_add=True, help_text="作成日時")

    def __str__(self):
        return self.name