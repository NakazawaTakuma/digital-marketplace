
# marketplace/models/product/product.py
from django.db import models
from marketplace.models.user.core import User
from .category import Category
from .tag import Tag

class Product(models.Model):
    """デジタルコンテンツ商品"""
    seller = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True, related_name='products', help_text="出品者ユーザー")
    title = models.CharField(max_length=200, help_text="商品タイトル")
    description = models.TextField(help_text="商品説明")
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0, help_text="販売価格")
    discount_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True, help_text="割引価格")
    status = models.CharField(
        max_length=20,
        choices=[('draft','Draft'), ('pending','Pending'), ('published','Published')],
        default='draft',
        help_text="公開状態"
    )
    categories = models.ManyToManyField(Category, related_name='products', blank=True, help_text="紐づくカテゴリ")
    tags = models.ManyToManyField(Tag, related_name='products', blank=True, help_text="紐づくタグ")
    created_at = models.DateTimeField(auto_now_add=True, help_text="作成日時")
    updated_at = models.DateTimeField(auto_now=True, help_text="更新日時")

    def __str__(self):
        return self.title
