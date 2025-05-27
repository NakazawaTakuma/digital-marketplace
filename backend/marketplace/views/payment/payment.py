### marketplace/views/payment/payment.py
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from marketplace.models.payment.payment import Payment
from marketplace.serializers.payment.payment import PaymentSerializer

class PaymentViewSet(viewsets.ReadOnlyModelViewSet):
    """支払い閲覧ViewSet"""
    serializer_class = PaymentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # 認証ユーザー本人の注文に紐づく支払いのみ返す
        return Payment.objects.select_related('order','payment_method').filter(
            order__buyer=self.request.user
        )
