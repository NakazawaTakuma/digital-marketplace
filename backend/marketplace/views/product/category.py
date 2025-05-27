
### marketplace/views/product/category.py
from rest_framework import viewsets
from rest_framework.permissions import IsAdminUser
from marketplace.models.product.category import Category
from marketplace.serializers.product.category import CategorySerializer

class CategoryViewSet(viewsets.ModelViewSet):
    """カテゴリ管理ViewSet（管理者専用）"""
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAdminUser]
