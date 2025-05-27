# marketplace/models/license/license_key.py
from django.db import models
from marketplace.models.order.item import OrderItem

class LicenseKey(models.Model):
    """ライセンスキー管理"""
    order_item = models.ForeignKey(OrderItem, on_delete=models.CASCADE, related_name='licenses', help_text="関連購入アイテム")
    key = models.CharField(max_length=255, unique=True, help_text="ライセンスキー")
    issued_at = models.DateTimeField(auto_now_add=True, help_text="発行日時")
    expires_at = models.DateTimeField(null=True, blank=True, help_text="有効期限")
