# marketplace/models/product/asset.py
from django.db import models
from .product import Product

class ProductAsset(models.Model):
    """商品アセット（ファイル／プレビュー）"""
    ASSET_TYPES = [('full_zip','Full ZIP'), ('thumbnail','Thumbnail'), ('preview_video','Preview Video')]
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='assets', help_text="関連商品")
    file = models.FileField(upload_to='product_assets/', help_text="アップロードファイル")
    preview_image = models.ImageField(upload_to='product_previews/', null=True, blank=True, help_text="プレビュー画像")
    asset_type = models.CharField(max_length=20, choices=ASSET_TYPES, help_text="アセット種別")
    created_at = models.DateTimeField(auto_now_add=True, help_text="作成日時")
