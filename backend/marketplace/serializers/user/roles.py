
# serializers/user/roles.py
from rest_framework import serializers
from marketplace.models.user.roles import Role, UserRole

class RoleSerializer(serializers.ModelSerializer):
    """ロールシリアライザ"""
    class Meta:
        model = Role
        fields = ['id', 'name', 'permissions']
        read_only_fields = ['id']

class UserRoleSerializer(serializers.ModelSerializer):
    """ユーザーロール紐付けシリアライザ"""
    role = RoleSerializer(read_only=True)

    class Meta:
        model = UserRole
        fields = ['id', 'user', 'role']
        read_only_fields = ['id', 'user']
