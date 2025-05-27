from django.contrib import admin
from marketplace.models.license.download import DownloadHistory
from marketplace.models.license.license_key import LicenseKey

admin.site.register(DownloadHistory)
admin.site.register(LicenseKey)
