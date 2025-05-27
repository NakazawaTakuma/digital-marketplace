
# marketplace/models/order/order.py
from django.db import models
from marketplace.models.user.core import User

class Order(models.Model):
    """注文情報"""
    buyer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders', help_text="購入者ユーザー")
    order_number = models.CharField(max_length=100, unique=True, help_text="ユニーク注文番号")
    total_amount = models.DecimalField(max_digits=10, decimal_places=2, help_text="合計金額")
    currency = models.CharField(max_length=10, default='USD', help_text="通貨コード")
    status = models.CharField(
        max_length=20,
        choices=[('pending','Pending'), ('completed','Completed'), ('refunded','Refunded')],
        default='pending',
        help_text="注文状態"
    )
    created_at = models.DateTimeField(auto_now_add=True, help_text="作成日時")
    updated_at = models.DateTimeField(auto_now=True, help_text="更新日時")

    def __str__(self):
        return self.order_number