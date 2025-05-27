
# marketplace/models/user/roles.py
from django.db import models
from .core import User

class Role(models.Model):
    """ユーザーロール"""
    name = models.CharField(
        max_length=50,
        unique=True,
        help_text="ロール名称"
    )
    permissions = models.JSONField(
        blank=True,
        default=list,
        help_text="権限リスト（JSON配列）"
    )

class UserRole(models.Model):
    """ユーザーとロール紐付け"""
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='user_roles',
        help_text="ロールを付与するユーザー"
    )
    role = models.ForeignKey(
        Role,
        on_delete=models.CASCADE,
        related_name='role_users',
        help_text="付与されるロール"
    )
