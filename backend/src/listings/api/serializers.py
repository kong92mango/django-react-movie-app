from rest_framework import serializers

from listings.models import Listing
from listings.models import Schedule
from listings.models import Genre


class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = '__all__'  

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = '__all__'  

class ListingSerializer(serializers.ModelSerializer):
    schedule = ScheduleSerializer(read_only=True, many = True)
    genre = GenreSerializer(read_only=True, many = True)

    class Meta:
        model = Listing
        fields = '__all__'      