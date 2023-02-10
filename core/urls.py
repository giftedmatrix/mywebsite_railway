from django.urls import path
from .views import indexview

app_name = 'core'

urlpatterns = [
    path('',indexview,name='home'),
]