from rest_framework import serializers
from .models import Asset

class AssetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Asset
        fields = ['id','model','user','asset_number','serial_number', 'drive_serialnumber','status', 'location','device_type']
