from django.db import models
from marketplace.users.models import User

class Notification(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='notifications')
    type = models.CharField(max_length=50)
    message = models.TextField()
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

class LicenseKey(models.Model):
    order_item = models.ForeignKey(
        'orders.OrderItem', on_delete=models.CASCADE, related_name='licenses'
    )
    key = models.CharField(max_length=255, unique=True)
    issued_at = models.DateTimeField(auto_now_add=True)
    expires_at = models.DateTimeField(null=True, blank=True)

class DownloadHistory(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='downloads')
    asset = models.ForeignKey('products.ProductAsset', on_delete=models.CASCADE, related_name='downloads')
    downloaded_at = models.DateTimeField(auto_now_add=True)
    ip_address = models.GenericIPAddressField()