# marketplace/urls/user.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from marketplace.views.user.core import UserViewSet
from marketplace.views.user.profile import ProfileViewSet
from marketplace.views.user.preferences import PreferencesViewSet
from marketplace.views.user.roles import RoleViewSet, UserRoleViewSet
from marketplace.views.user.billing import PaymentMethodViewSet, BillingRecordViewSet
from marketplace.views.user.address import AddressViewSet
from marketplace.views.user.activity import ActivityLogViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'profiles', ProfileViewSet, basename='profiles')
router.register(r'preferences', PreferencesViewSet, basename='preferences')
router.register(r'roles', RoleViewSet)
router.register(r'user-roles', UserRoleViewSet)
router.register(r'payment-methods', PaymentMethodViewSet, basename='payment-methods')
router.register(r'billing-records', BillingRecordViewSet, basename='billing-records')
router.register(r'addresses', AddressViewSet, basename='addresses')
router.register(r'activities', ActivityLogViewSet, basename='activities')

urlpatterns = [
    path('', include(router.urls)),
]
