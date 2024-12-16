from django.db import models

# Create your models here.
class Task(models.Model):
    STATUS_CHOICES = [
        ('backlog', 'Backlog'),
        ('pending', 'Pending'),
        ('review', 'Review'),
        ('done', 'Done'),
    ]

    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='backlog')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title