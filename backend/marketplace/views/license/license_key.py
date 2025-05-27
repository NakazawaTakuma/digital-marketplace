### marketplace/views/license/license_key.py
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from marketplace.models.license.license_key import LicenseKey
from marketplace.serializers.license.license_key import LicenseKeySerializer

class LicenseKeyViewSet(viewsets.ReadOnlyModelViewSet):
    """ライセンスキー閲覧ViewSet"""
    serializer_class = LicenseKeySerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # 認証ユーザー本人の注文アイテムに紐づくライセンスキーのみ返す
        return LicenseKey.objects.select_related('order_item').filter(
            order_item__order__buyer=self.request.user
        )