
# marketplace/views/user/address.py
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from marketplace.models.user.address import Address
from marketplace.serializers.user.address import AddressSerializer

class AddressViewSet(viewsets.ModelViewSet):
    """住所管理のViewSet"""
    serializer_class = AddressSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Address.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
