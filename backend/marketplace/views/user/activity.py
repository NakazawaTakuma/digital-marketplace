# marketplace/views/user/activity.py
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from marketplace.models.user.activity import ActivityLog
from marketplace.serializers.user.activity import ActivityLogSerializer

class ActivityLogViewSet(viewsets.ReadOnlyModelViewSet):
    """活動履歴の閲覧ViewSet"""
    serializer_class = ActivityLogSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # 認証ユーザー本人の活動履歴のみ返す
        return ActivityLog.objects.filter(user=self.request.user)

