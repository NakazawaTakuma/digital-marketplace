from rest_framework import viewsets
from marketplace.models.product import Product
from marketplace.serializers.product_serializer import ProductSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
