from django.urls import path, include
from .views import AssetListView

urlpatterns = [
    path('', AssetListView.as_view(), name='asset-list'),
]
