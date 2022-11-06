# to serialize python objects to JSON
from rest_framework import serializers

class TestSerializer(serializers.ModelSerializer):
    # describe model in this class
    class Meta:
        # model = enter data object
        fields = ['id', 'name', 'description']