# Generated by Django 3.0.5 on 2020-04-27 15:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0010_auto_20200427_1536'),
    ]

    operations = [
        migrations.AlterField(
            model_name='personfamilyties',
            name='family_tie_date_birthday',
            field=models.DateField(blank=True, default='', null=True, verbose_name='Дата рождения'),
        ),
    ]
