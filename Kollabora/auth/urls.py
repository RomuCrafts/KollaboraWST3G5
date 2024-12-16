from django.urls import path, include
from django.contrib import admin
from .views import RegisterView, LoginView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
]

# urlpatterns += [
#     path('api/', include('auth.urls')),
# ]