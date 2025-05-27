
# marketplace/views/cart/item.py
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from marketplace.models.cart.item import CartItem
from marketplace.serializers.cart.item import CartItemSerializer

class CartItemViewSet(viewsets.ModelViewSet):
    """カートアイテムViewSet"""
    serializer_class = CartItemSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return CartItem.objects.filter(cart__user=self.request.user)
