from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class DeviceType(models.TextChoices):
    DESKTOP = 'desktop', 'Desktop'
    LAPTOP = 'laptop', 'Laptop'

class Offices(models.TextChoices):
    CONTROLDEGESTION = 'control de gestion','Control de Gestion'
    PRESIDENCIA = 'presidencia', 'Presidencia'
    OFFICE = 'office','Office'
    PLANTABAJA = 'planta baja', 'Planta Baja'
    PANOL = 'panol', 'Panol'
    PLANTA = 'planta', 'Planta'
    ACEPTACION = 'aceptacion', 'Aceptacion'

class Status(models.TextChoices):
    AVAIABLE = 'avaiable', 'Avaiable'
    HOMEOFFICE = 'home office', 'Home office'
    ASIGNED = 'asigned', 'Asigned'
    TRAVEL = 'travel', 'Travel'
    DISPOSED = 'disposed', 'Disposed'

class DeviceModel(models.Model):
    model = models.CharField(max_length=100)
    description = models.TextField(max_length=255)
    image = models.ImageField(upload_to='src/img/models')

    def __str__(self):
        return self.model
    
class Asset(models.Model):
    id = models.CharField(primary_key=True, max_length=15)
    model = models.ForeignKey(DeviceModel, on_delete=models.SET_NULL, null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    asset_number = models.IntegerField()
    serial_number = models.CharField(max_length=255)
    drive_serialnumber = models.CharField(max_length=255)
    status = models.CharField(
        max_length=50,
        choices=Status.choices,
        default=Status.AVAIABLE
    )
    location = models.CharField(
        max_length=50,
        choices=Offices.choices,
        default=Offices.OFFICE
    )
    device_type = models.CharField(
        max_length=10,
        choices=DeviceType.choices,
        default=DeviceType.DESKTOP,
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.id
    