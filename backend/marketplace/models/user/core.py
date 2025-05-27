# marketplace/models/user/core.py
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class User(AbstractUser):
    """
    コア認証情報モデル
    
    Fields (AbstractUser継承):
      - username (str): ユーザー名
      - email (EmailField): メールアドレス（ユニーク、必須）
      - password (str): パスワードハッシュ
      - is_active (bool): アクティブフラグ
      - is_staff (bool): スタッフ権限フラグ
      - is_superuser (bool): スーパーユーザー権限フラグ
      - last_login (datetime): 最終ログイン日時
      - date_joined (datetime): アカウント作成日時
    """
    email = models.EmailField(
        unique=True,
        help_text="一意のメールアドレスを使用します"
    )

    
    # デフォルトの auth.User と related_name が衝突しないよう上書き
    groups = models.ManyToManyField(
        Group,
        related_name='marketplace_user_set',
        blank=True,
        help_text='このユーザーが所属するグループ'
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='marketplace_user_set',
        blank=True,
        help_text='このユーザーに割り当てられた権限'
    )



    REQUIRED_FIELDS = ['email']

    class Meta:
        verbose_name = 'ユーザー'
        verbose_name_plural = 'ユーザー'
        ordering = ['-date_joined']

    def __str__(self):
        return self.username
