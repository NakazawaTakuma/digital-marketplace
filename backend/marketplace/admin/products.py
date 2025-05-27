from django.contrib import admin
from marketplace.models.product.product import Product as DigitalProduct
from marketplace.models.product.category import Category
from marketplace.models.product.tag import Tag as ProductTag
from marketplace.models.product.asset import ProductAsset

admin.site.register(DigitalProduct)
admin.site.register(Category)
admin.site.register(ProductTag)
admin.site.register(ProductAsset)
