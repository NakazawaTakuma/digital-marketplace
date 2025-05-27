
# marketplace/views/wishlist/wishlist.py
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from marketplace.models.wishlist.wishlist import Wishlist
from marketplace.serializers.wishlist.wishlist import WishlistSerializer

class WishlistViewSet(viewsets.ModelViewSet):
    """ウィッシュリストViewSet"""
    serializer_class = WishlistSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Wishlist.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
