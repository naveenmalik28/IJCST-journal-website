from django.urls import path
from .views import SubmissionCreateView, ContactMessageCreateView

urlpatterns = [
    path('submit/', SubmissionCreateView.as_view(), name='submit'),
    path('contact/', ContactMessageCreateView.as_view(), name='contact'),
]