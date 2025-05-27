
# marketplace/views/user/billing.py
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from marketplace.models.user.billing import PaymentMethod, BillingRecord
from marketplace.serializers.user.billing import PaymentMethodSerializer, BillingRecordSerializer

class PaymentMethodViewSet(viewsets.ModelViewSet):
    """支払い方法のViewSet"""
    queryset = PaymentMethod.objects.all()
    serializer_class = PaymentMethodSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

class BillingRecordViewSet(viewsets.ReadOnlyModelViewSet):
    """請求履歴のViewSet（閲覧のみ）"""
    queryset = BillingRecord.objects.all()
    serializer_class = BillingRecordSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)