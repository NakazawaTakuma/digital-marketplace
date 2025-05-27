### marketplace/views/notification/notification.py
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from marketplace.models.notification.notification import Notification
from marketplace.serializers.notification.notification import NotificationSerializer

class NotificationViewSet(viewsets.ModelViewSet):
    """通知ViewSet"""
    serializer_class = NotificationSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # 認証ユーザー本人への通知のみ返す
        return Notification.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        # create 時に user をリクエストユーザーに固定
        serializer.save(user=self.request.user)

