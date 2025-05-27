# marketplace/models/user/activity.py
from django.db import models
from .core import User

class ActivityLog(models.Model):
    """ユーザー活動履歴"""
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='activity_logs',
        help_text="アクションを実行したユーザー"
    )
    action = models.CharField(
        max_length=100,
        help_text="実行されたアクション内容"
    )
    ip_address = models.GenericIPAddressField(
        help_text="実行時のIPアドレス"
    )
    user_agent = models.CharField(
        max_length=255,
        help_text="実行時のユーザーエージェント情報"
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
        help_text="アクション実行日時"
    )