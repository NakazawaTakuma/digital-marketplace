from django.contrib import admin
from marketplace.models.order.order import Order
from marketplace.models.order.item import OrderItem

admin.site.register(Order)
admin.site.register(OrderItem)
