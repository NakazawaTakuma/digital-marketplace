# marketplace/models/user/billing.py
from django.db import models
from .core import User

class PaymentMethod(models.Model):
    """ユーザー請求・支払い方法"""
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='payment_methods',
        help_text="支払い方法を持つユーザー"
    )
    type = models.CharField(
        max_length=50,
        help_text="支払い方法種別（カード、PayPalなど）"
    )
    details = models.JSONField(
        help_text="支払い情報詳細（暗号化保存）"
    )
    is_default = models.BooleanField(
        default=False,
        help_text="デフォルト支払い方法かどうか"
    )

class BillingRecord(models.Model):
    """請求履歴"""
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='billing_records',
        help_text="請求対象のユーザー"
    )
    amount = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        help_text="請求金額"
    )
    currency = models.CharField(
        max_length=10,
        default='USD',
        help_text="通貨コード"
    )
    description = models.CharField(
        max_length=255,
        blank=True,
        help_text="請求内容の説明"
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
        help_text="請求日時"
    )
