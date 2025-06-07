from django.db import models
from marketplace.users.models import User

class Category(models.Model):
    name = models.CharField(max_length=100, help_text="カテゴリ名")
    slug = models.SlugField(unique=True, help_text="URL用一意スラッグ")
    parent = models.ForeignKey(
        'self', null=True, blank=True, related_name='children', on_delete=models.CASCADE
    )
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Tag(models.Model):
    name = models.CharField(max_length=100, help_text="タグ名")
    slug = models.SlugField(unique=True, null=True, blank=True)

    def __str__(self):
        return self.name

class Product(models.Model):
    seller = models.ForeignKey(User, on_delete=models.CASCADE, related_name='products')
    title = models.CharField(max_length=200, help_text="商品タイトル")
    description = models.TextField(help_text="商品説明")
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    discount_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    status = models.CharField(
        max_length=20,
        choices=[('draft','Draft'), ('pending','Pending'), ('published','Published')],
        default='draft'
    )
    categories = models.ManyToManyField(Category, related_name='products', blank=True)
    tags = models.ManyToManyField(Tag, related_name='products', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class ProductAsset(models.Model):
    ASSET_TYPES = [('full_zip','Full ZIP'), ('thumbnail','Thumbnail'), ('preview_video','Preview Video')]
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='assets')
    file = models.FileField(upload_to='product_assets/')
    preview_image = models.ImageField(upload_to='product_previews/', null=True, blank=True)
    asset_type = models.CharField(max_length=20, choices=ASSET_TYPES)
    created_at = models.DateTimeField(auto_now_add=True)