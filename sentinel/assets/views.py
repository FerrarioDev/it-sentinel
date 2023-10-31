from rest_framework import generics
from .models import Asset
from .serializers import AssetSerializer

class ListAsset(generics.ListCreateAPIView):
    queryset = Asset.objects.all()
    serializer_class = AssetSerializer

class DetailAsset(generics.RetrieveUpdateDestroyAPIView):
    queryset = Asset.objects.all()
    serializer_class = AssetSerializer

class AssetPreview(generics.ListCreateAPIView):
    queryset = Asset.objects.order_by('-updated_at')[:5]
    serializer_class = AssetSerializer
