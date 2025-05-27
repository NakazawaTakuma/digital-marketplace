# marketplace/urls/auth.py

from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    # アクセストークン＋リフレッシュトークン発行
    path('auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # リフレッシュトークンによるアクセストークン更新
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
