### marketplace/views/user/profile.py
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from marketplace.models.user.profile import Profile
from marketplace.serializers.user.profile import ProfileSerializer

class ProfileViewSet(viewsets.ModelViewSet):
    """ユーザープロフィールViewSet"""
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # 認証ユーザー本人のプロフィールのみ
        return Profile.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

