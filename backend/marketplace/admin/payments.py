from django.contrib import admin
from marketplace.models.payment.payment import Payment
from marketplace.models.user.billing import PaymentMethod, BillingRecord

admin.site.register(PaymentMethod)
admin.site.register(BillingRecord)
admin.site.register(Payment)
