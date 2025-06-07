from rest_framework import viewsets, permissions
from .models import Category, Tag, Product, ProductAsset
from .serializers import CategorySerializer, TagSerializer, ProductSerializer, ProductAssetSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [permissions.IsAdminUser]

class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    permission_classes = [permissions.IsAdminUser]

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.filter(status='published').order_by('-created_at')
    serializer_class = ProductSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class ProductAssetViewSet(viewsets.ModelViewSet):
    queryset = ProductAsset.objects.all()
    serializer_class = ProductAssetSerializer
    permission_classes = [permissions.IsAuthenticated]