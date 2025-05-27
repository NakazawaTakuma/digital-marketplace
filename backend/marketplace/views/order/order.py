
### marketplace/views/order/order.py
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from marketplace.models.order.order import Order
from marketplace.serializers.order.order import OrderSerializer

class OrderViewSet(viewsets.ModelViewSet):
    """注文ViewSet"""
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # 認証ユーザー本人の注文のみ返す
        return Order.objects.prefetch_related('items').filter(
            buyer=self.request.user
        )

    def perform_create(self, serializer):
        # create 時に buyer を固定
        serializer.save(buyer=self.request.user)

