
# marketplace/views/user/roles.py
from rest_framework import viewsets
from rest_framework.permissions import IsAdminUser
from marketplace.models.user.roles import Role, UserRole
from marketplace.serializers.user.roles import RoleSerializer, UserRoleSerializer

class RoleViewSet(viewsets.ModelViewSet):
    """ロール管理のViewSet"""
    queryset = Role.objects.all()
    serializer_class = RoleSerializer
    permission_classes = [IsAdminUser]

class UserRoleViewSet(viewsets.ModelViewSet):
    """ユーザーとロール紐付けViewSet"""
    queryset = UserRole.objects.select_related('user','role').all()
    serializer_class = UserRoleSerializer
    permission_classes = [IsAdminUser]