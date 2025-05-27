### marketplace/views/product/tag.py
from rest_framework import viewsets
from rest_framework.permissions import IsAdminUser
from marketplace.models.product.tag import Tag
from marketplace.serializers.product.tag import TagSerializer

class TagViewSet(viewsets.ModelViewSet):
    """タグ管理ViewSet（管理者専用）"""
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
