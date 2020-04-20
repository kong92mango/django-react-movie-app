from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import filters

from listings.models import Listing

from .serializers import ListingSerializer

class ListingListView(ListAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['$title', '=schedule__day', '=genre__name']

class ListingDetailView(RetrieveAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer