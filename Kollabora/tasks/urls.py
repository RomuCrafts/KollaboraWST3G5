from django.urls import path
# from .views import TaskListCreateView, TaskUpdateView
from .views import TaskListView
from . import views
    
urlpatterns = [
    path('api/tasks/', views.TaskListView.as_view(), name='task-list-create'),
    path('api/tasks/<int:id>/', views.TaskDetailView.as_view(), name='task-update'),
    path('tasks/', TaskListView.as_view(), name='task-list'),
]