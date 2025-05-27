
# marketplace/models/user/preferences.py
from django.db import models
from .core import User

class Preferences(models.Model):
    """ユーザー設定・プリファレンス"""
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name='preferences',
        help_text="参照先のユーザー"
    )
    language = models.CharField(
        max_length=10,
        default='en',
        help_text="表示言語コード"
    )
    timezone = models.CharField(
        max_length=50,
        default='UTC',
        help_text="タイムゾーン"
    )
    email_notifications = models.BooleanField(
        default=True,
        help_text="メール通知を受け取るかどうか"
    )
