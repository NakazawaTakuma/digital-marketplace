
# marketplace/models/product/tag.py
from django.db import models

class Tag(models.Model):
    """商品タグ"""
    name = models.CharField(max_length=100, help_text="タグ名")
    slug = models.SlugField(unique=True,null=True,blank=True, help_text="URL用一意スラッグ")

    def __str__(self):
        return self.name
