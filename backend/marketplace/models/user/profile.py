
# marketplace/models/user/profile.py
from django.db import models
from .core import User

class Profile(models.Model):
    """ユーザープロフィール情報"""
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name='profile',
        help_text="参照先のユーザー"
    )
    display_name = models.CharField(
        max_length=100,
        blank=True,
        help_text="表示名"
    )
    avatar = models.ImageField(
        upload_to='avatars/',
        blank=True,
        null=True,
        help_text="プロフィール画像"
    )
    bio = models.TextField(
        blank=True,
        help_text="自己紹介文"
    )
    website_url = models.URLField(
        blank=True,
        help_text="ウェブサイトURL"
    )