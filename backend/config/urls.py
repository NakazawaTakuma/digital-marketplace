from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('api/users/', include('marketplace.users.urls')),
    path('api/products/', include('marketplace.products.urls')),
    path('api/cart/', include('marketplace.cart.urls')),
    path('api/orders/', include('marketplace.orders.urls')),
    path('api/core/', include('marketplace.core.urls')),
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)