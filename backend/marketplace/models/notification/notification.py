
# marketplace/models/notification/notification.py
from django.db import models
from marketplace.models.user.core import User

class Notification(models.Model):
    """システム通知"""
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='notifications', help_text="通知受信者")
    type = models.CharField(max_length=50, help_text="通知種別")
    message = models.TextField(help_text="通知メッセージ")
    is_read = models.BooleanField(default=False, help_text="既読フラグ")
    created_at = models.DateTimeField(auto_now_add=True, help_text="作成日時")
