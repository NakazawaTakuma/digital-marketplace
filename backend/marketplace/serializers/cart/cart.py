# serializers/cart/cart.py
from rest_framework import serializers
from marketplace.models.cart.cart import Cart

class CartSerializer(serializers.ModelSerializer):
    """カートシリアライザ"""
    class Meta:
        model = Cart
        fields = ['id', 'user', 'created_at', 'updated_at']
        read_only_fields = ['id', 'user', 'created_at', 'updated_at']