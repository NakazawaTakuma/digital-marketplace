
# serializers/review/review.py
from rest_framework import serializers
from marketplace.models.review.review import Review

class ReviewSerializer(serializers.ModelSerializer):
    """商品レビューシリアライザ"""
    class Meta:
        model = Review
        fields = ['id', 'product', 'reviewer', 'rating', 'comment', 'created_at']
        read_only_fields = ['id', 'reviewer', 'created_at']
