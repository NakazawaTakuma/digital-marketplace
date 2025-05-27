
# marketplace/views/wishlist/item.py
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from marketplace.models.wishlist.item import WishlistItem
from marketplace.serializers.wishlist.item import WishlistItemSerializer

class WishlistItemViewSet(viewsets.ModelViewSet):
    """ウィッシュリストアイテムViewSet"""
    serializer_class = WishlistItemSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return WishlistItem.objects.filter(wishlist__user=self.request.user)
