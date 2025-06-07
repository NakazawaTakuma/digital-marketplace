
# marketplace/products/admin.py
from django.contrib import admin
from .models import Category, Tag, Product, ProductAsset

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'slug', 'parent', 'created_at')
    list_filter = ('parent', 'created_at')
    search_fields = ('name', 'slug')

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'slug')
    search_fields = ('name', 'slug')

class ProductAssetInline(admin.TabularInline):
    model = ProductAsset
    extra = 0

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'seller', 'price', 'discount_price', 'status', 'created_at')
    list_filter = ('status', 'categories', 'tags', 'created_at')
    search_fields = ('title', 'description', 'seller__username')
    inlines = [ProductAssetInline]

@admin.register(ProductAsset)
class ProductAssetAdmin(admin.ModelAdmin):
    list_display = ('id', 'product', 'asset_type', 'created_at')
    list_filter = ('asset_type', 'created_at')
    search_fields = ('product__title',)