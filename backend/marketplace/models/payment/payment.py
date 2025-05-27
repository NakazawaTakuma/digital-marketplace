
# marketplace/models/payment/payment.py
from django.db import models
from marketplace.models.order.order import Order
from marketplace.models.user.billing import PaymentMethod, BillingRecord

class Payment(models.Model):
    """決済情報"""
    order = models.OneToOneField(Order, on_delete=models.CASCADE, related_name='payment', help_text="関連注文")
    payment_method = models.ForeignKey(PaymentMethod, on_delete=models.SET_NULL, null=True, help_text="使用した支払い方法")
    payment_id = models.CharField(max_length=200, help_text="外部決済ID")
    amount = models.DecimalField(max_digits=10, decimal_places=2, help_text="決済金額")
    currency = models.CharField(max_length=10, default='USD', help_text="通貨コード")
    status = models.CharField(max_length=20, choices=[('succeeded','Succeeded'), ('failed','Failed')], default='pending', help_text="決済状態")
    paid_at = models.DateTimeField(null=True, blank=True, help_text="支払完了日時")
