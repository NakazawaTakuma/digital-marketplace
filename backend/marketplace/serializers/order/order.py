
# serializers/order/order.py
from rest_framework import serializers
from marketplace.models.order.order import Order
from .item import OrderItemSerializer

class OrderSerializer(serializers.ModelSerializer):
    """注文シリアライザ"""
    items = OrderItemSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = ['id', 'buyer', 'order_number', 'total_amount', 'currency', 'status', 'created_at', 'updated_at', 'items']
        read_only_fields = ['id', 'buyer', 'order_number', 'created_at', 'updated_at']
