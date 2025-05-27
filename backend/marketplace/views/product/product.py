### marketplace/views/product/product.py
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from marketplace.models.product.product import Product
from marketplace.serializers.product.product import ProductSerializer

class ProductViewSet(viewsets.ModelViewSet):
    """商品ViewSet"""
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        # 全ユーザーが閲覧可能なためフィルタ不要
        return Product.objects.prefetch_related('categories','tags','assets').all()

    def perform_create(self, serializer):
        # create 時に seller を認証ユーザーに固定
        serializer.save(seller=self.request.user)
