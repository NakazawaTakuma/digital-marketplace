
### marketplace/views/order/item.py
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from marketplace.models.order.item import OrderItem
from marketplace.serializers.order.item import OrderItemSerializer

class OrderItemViewSet(viewsets.ReadOnlyModelViewSet):
    """注文アイテム閲覧ViewSet"""
    serializer_class = OrderItemSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # 認証ユーザー本人の注文に紐づく OrderItem のみ返す
        return OrderItem.objects.select_related('order','product').filter(
            order__buyer=self.request.user
        )
