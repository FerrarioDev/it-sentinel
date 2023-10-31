from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

urlpatterns = [
    path('', views.ListAsset.as_view(), name='asset-list'),
    path('<str:pk>/', views.DetailAsset.as_view(), name='asset-detail'),
]