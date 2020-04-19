from django.contrib import admin

from .models import Listing
from .models import Schedule

admin.site.register(Listing)
admin.site.register(Schedule)