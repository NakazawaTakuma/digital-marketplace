
# serializers/order/item.py
from rest_framework import serializers
from marketplace.models.order.item import OrderItem

class OrderItemSerializer(serializers.ModelSerializer):
    """注文アイテムシリアライザ"""
    class Meta:
        model = OrderItem
        fields = ['id', 'order', 'product', 'unit_price', 'quantity']
        read_only_fields = ['id', 'order']
