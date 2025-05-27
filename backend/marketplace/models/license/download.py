
# marketplace/models/license/download.py
from django.db import models
from marketplace.models.user.core import User
from marketplace.models.product.asset import ProductAsset

class DownloadHistory(models.Model):
    """ダウンロード履歴"""
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='downloads', help_text="ダウンロードユーザー")
    asset = models.ForeignKey(ProductAsset, on_delete=models.CASCADE, related_name='downloads', help_text="ダウンロードアセット")
    downloaded_at = models.DateTimeField(auto_now_add=True, help_text="ダウンロード日時")
    ip_address = models.GenericIPAddressField(help_text="ダウンロード時IPアドレス")
