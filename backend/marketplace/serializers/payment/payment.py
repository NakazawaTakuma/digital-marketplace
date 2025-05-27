# serializers/payment/payment.py
from rest_framework import serializers
from marketplace.models.payment.payment import Payment

class PaymentSerializer(serializers.ModelSerializer):
    """決済情報シリアライザ"""
    class Meta:
        model = Payment
        fields = ['id', 'order', 'payment_method', 'payment_id', 'amount', 'currency', 'status', 'paid_at']
        read_only_fields = ['id', 'paid_at']
