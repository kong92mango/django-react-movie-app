from django.contrib import admin

from .models import Listing
from .models import Schedule
from .models import Genre

admin.site.register(Listing)
admin.site.register(Schedule)
admin.site.register(Genre)