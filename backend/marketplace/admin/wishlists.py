from django.contrib import admin
from marketplace.models.wishlist.wishlist import Wishlist
from marketplace.models.wishlist.item import WishlistItem

admin.site.register(Wishlist)
admin.site.register(WishlistItem)
