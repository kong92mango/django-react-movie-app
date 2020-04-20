from django.db import models
from django import forms

DAY_CHOICES = (
    ('monday','Monday'),
    ('tuesday', 'Tuesday'),
    ('wednesday','Wednesday'),
    ('thursday','Thursday'),
    ('friday','Friday'),
    ('saturday','Saturday'),
    ('sunday','Sunday'),
)

class Listing(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()
    genre = models.ManyToManyField('Genre')
    schedule = models.ManyToManyField('Schedule')

    def __str__(self):
        return self.title

class Schedule(models.Model):
    day = models.CharField(max_length=20, choices=DAY_CHOICES, default='')
    time = models.TimeField(blank=True)

    def __str__(self):
        return self.day + "@" + str(self.time)

class Genre(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name