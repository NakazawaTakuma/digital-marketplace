from django.contrib import admin
from marketplace.models.user.core import User
from marketplace.models.user.profile import Profile
from marketplace.models.user.preferences import Preferences
from marketplace.models.user.roles import Role, UserRole
from marketplace.models.user.address import Address
from marketplace.models.user.activity import ActivityLog

admin.site.register(User)
admin.site.register(Profile)
admin.site.register(Preferences)
admin.site.register(Role)
admin.site.register(UserRole)
admin.site.register(Address)
admin.site.register(ActivityLog)
