# marketplace/views/user/core.py
from rest_framework import viewsets
from rest_framework.permissions import IsAdminUser
from marketplace.models.user.core import User
from marketplace.serializers.user.core import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    """ユーザーコア情報のViewSet"""
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAdminUser]