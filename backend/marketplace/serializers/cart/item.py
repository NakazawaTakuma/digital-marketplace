
# serializers/cart/item.py
from rest_framework import serializers
from marketplace.models.cart.item import CartItem
from .cart import CartSerializer

class CartItemSerializer(serializers.ModelSerializer):
    """カートアイテムシリアライザ"""
    cart = CartSerializer(read_only=True)

    class Meta:
        model = CartItem
        fields = ['id', 'cart', 'product', 'quantity']
        read_only_fields = ['id', 'cart']