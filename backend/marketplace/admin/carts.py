from django.contrib import admin
from marketplace.models.cart.cart import Cart
from marketplace.models.cart.item import CartItem

admin.site.register(Cart)
admin.site.register(CartItem)
