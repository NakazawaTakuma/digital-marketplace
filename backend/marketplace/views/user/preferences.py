### marketplace/views/user/preferences.py
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from marketplace.models.user.preferences import Preferences
from marketplace.serializers.user.preferences import PreferencesSerializer

class PreferencesViewSet(viewsets.ModelViewSet):
    """ユーザー設定ViewSet"""
    serializer_class = PreferencesSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # 認証ユーザー本人の設定のみ
        return Preferences.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
