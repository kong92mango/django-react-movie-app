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

GENRE_CHOICES = (
    ('action','ACTION'),
    ('adventure', 'ADVENTURE'),
    ('comedy','COMEDY'),
    ('crime','CRIME'),
    ('drama','DRAMA'),
    ('fantasy','FANTASY'),
    ('horror','HORROR'),
    ('mystery','MYSTERY'),
    ('science','SCIENCE'),
)

class Listing(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()
    genre = forms.MultipleChoiceField(choices=GENRE_CHOICES, widget=forms.CheckboxSelectMultiple())
    schedule = models.ManyToManyField('Schedule')

    def __str__(self):
        return self.title

class Schedule(models.Model):
    day = models.CharField(max_length=20, choices=DAY_CHOICES, default='')
    time = models.TimeField(blank=True)

    def __str__(self):
        return self.day + str(self.time)