from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from marketplace.models.license.download import DownloadHistory
from marketplace.serializers.license.download import DownloadHistorySerializer

class DownloadHistoryViewSet(viewsets.ReadOnlyModelViewSet):
    """ダウンロード履歴閲覧ViewSet"""
    serializer_class = DownloadHistorySerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # 認証ユーザー本人のダウンロード履歴のみ返す
        return DownloadHistory.objects.select_related('asset').filter(
            user=self.request.user
        )
