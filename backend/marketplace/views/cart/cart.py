
# marketplace/views/cart/cart.py
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from marketplace.models.cart.cart import Cart
from marketplace.serializers.cart.cart import CartSerializer

class CartViewSet(viewsets.ModelViewSet):
    """カートViewSet"""
    serializer_class = CartSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Cart.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)