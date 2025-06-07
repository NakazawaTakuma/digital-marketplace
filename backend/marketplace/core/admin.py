# marketplace/core/admin.py
from django.contrib import admin
from .models import Notification, LicenseKey, DownloadHistory

@admin.register(Notification)
class NotificationAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'type', 'is_read', 'created_at')
    list_filter = ('type', 'is_read', 'created_at')
    search_fields = ('user__username', 'message')

@admin.register(LicenseKey)
class LicenseKeyAdmin(admin.ModelAdmin):
    list_display = ('id', 'order_item', 'key', 'issued_at', 'expires_at')
    list_filter = ('issued_at', 'expires_at')
    search_fields = ('key',)

@admin.register(DownloadHistory)
class DownloadHistoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'asset', 'downloaded_at', 'ip_address')
    list_filter = ('downloaded_at',)
    search_fields = ('user__username', 'asset__product__title', 'ip_address')
