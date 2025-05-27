from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    # ユーザー関連
    path('api/', include('marketplace.urls.user')),
    # 商品関連
    path('api/', include('marketplace.urls.product')),
    # カート関連
    path('api/', include('marketplace.urls.cart')),
    # 認証 (JWT)
    path('api/', include('marketplace.urls.auth')),
    # ライセンス関連
    path('api/', include('marketplace.urls.license')),
    # 通知関連
    path('api/', include('marketplace.urls.notification')),
    # 決済関連
    path('api/', include('marketplace.urls.payment')),
    # レビュー関連
    path('api/', include('marketplace.urls.review')),
    # 注文関連
    path('api/', include('marketplace.urls.order')),
    # ウィッシュリスト関連
    path('api/', include('marketplace.urls.wishlist')),
]