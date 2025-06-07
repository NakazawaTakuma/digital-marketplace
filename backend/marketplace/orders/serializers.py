from rest_framework import serializers
from .models import Order, OrderItem

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ['id', 'order', 'product', 'unit_price', 'quantity']
        read_only_fields = ['id', 'order']

class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = ['id', 'buyer', 'order_number', 'total_amount', 'currency', 'status', 'created_at', 'updated_at', 'items']
        read_only_fields = ['id', 'buyer', 'order_number', 'created_at', 'updated_at']