from rest_framework import generics
from rest_framework.parsers import MultiPartParser, FormParser
from .models import Submission, ContactMessage
from .serializers import SubmissionSerializer, ContactMessageSerializer

class SubmissionCreateView(generics.CreateAPIView):
    queryset = Submission.objects.all()
    serializer_class = SubmissionSerializer
    parser_classes = (MultiPartParser, FormParser)

class ContactMessageCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer