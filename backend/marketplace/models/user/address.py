# marketplace/models/user/address.py
from django.db import models
from .core import User

class Address(models.Model):
    """ユーザー住所・連絡先"""
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='addresses',
        help_text="住所情報を持つユーザー"
    )
    type = models.CharField(
        max_length=20,
        help_text="住所種別（billing/shippingなど）"
    )
    line1 = models.CharField(
        max_length=255,
        help_text="住所行1"
    )
    line2 = models.CharField(
        max_length=255,
        blank=True,
        help_text="住所行2"
    )
    city = models.CharField(
        max_length=100,
        help_text="市区町村"
    )
    state = models.CharField(
        max_length=100,
        help_text="都道府県/州"
    )
    postal_code = models.CharField(
        max_length=20,
        help_text="郵便番号"
    )
    country = models.CharField(
        max_length=2,
        help_text="国コード (ISO2)"
    )
    phone_number = models.CharField(
        max_length=20,
        blank=True,
        help_text="電話番号"
    )
