from rest_framework import viewsets, permissions
from .models import Notification, LicenseKey, DownloadHistory
from .serializers import NotificationSerializer, LicenseKeySerializer, DownloadHistorySerializer

class NotificationViewSet(viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Notification.objects.filter(user=self.request.user)

class LicenseKeyViewSet(viewsets.ModelViewSet):
    queryset = LicenseKey.objects.all()
    serializer_class = LicenseKeySerializer
    permission_classes = [permissions.IsAuthenticated]

class DownloadHistoryViewSet(viewsets.ModelViewSet):
    queryset = DownloadHistory.objects.all()
    serializer_class = DownloadHistorySerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)