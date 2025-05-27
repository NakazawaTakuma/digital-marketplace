## 7. レビュー関連

### marketplace/views/review/review.py
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from marketplace.models.review.review import Review
from marketplace.serializers.review.review import ReviewSerializer

class ReviewViewSet(viewsets.ModelViewSet):
    """レビューViewSet"""
    serializer_class = ReviewSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        # 全ユーザーが閲覧可能だが、編集・削除はレビュアー本人のみ
        return Review.objects.select_related('product','reviewer').all()

    def perform_create(self, serializer):
        # create 時に reviewer を認証ユーザーに固定
        serializer.save(reviewer=self.request.user)