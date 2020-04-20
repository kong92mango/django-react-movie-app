# Generated by Django 3.0.5 on 2020-04-19 20:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listings', '0002_auto_20200418_2207'),
    ]

    operations = [
        migrations.CreateModel(
            name='Genre',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.AddField(
            model_name='listing',
            name='genre',
            field=models.ManyToManyField(to='listings.Genre'),
        ),
    ]
