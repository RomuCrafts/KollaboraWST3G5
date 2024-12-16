from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError

@api_view(['POST'])
def register(request):
    try:
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')

        # Bypass additional validation
        if not username or not password:
            raise ValidationError("Username and Password are required.")

        # Check if the username already exists
        if User.objects.filter(username=username).exists():
            return Response({'error': 'Username already taken'}, status=status.HTTP_400_BAD_REQUEST)

        # Create the new user
        user = User.objects.create_user(username=username, email=email, password=password)
        return Response({"message": "User registered successfully!"}, status=status.HTTP_201_CREATED)

    except ValidationError as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({'error': "An unexpected error occurred. Please try again later."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
