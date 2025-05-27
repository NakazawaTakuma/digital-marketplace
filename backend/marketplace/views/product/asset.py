
### marketplace/views/product/asset.py
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from marketplace.models.product.asset import ProductAsset
from marketplace.serializers.product.asset import ProductAssetSerializer

class ProductAssetViewSet(viewsets.ModelViewSet):
    """商品アセットViewSet"""
    serializer_class = ProductAssetSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # 認証ユーザー本人が出品した商品に紐づくアセットのみ
        return ProductAsset.objects.filter(
            product__seller=self.request.user
        )