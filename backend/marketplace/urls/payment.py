# marketplace/urls/order.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from marketplace.views.payment.payment import PaymentViewSet

router = DefaultRouter()
router.register(r'payments', PaymentViewSet, basename='payment')

urlpatterns = [
    path('', include(router.urls)),
]

