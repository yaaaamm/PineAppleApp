# Generated by Django 3.0.5 on 2020-04-27 15:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0009_auto_20200427_1534'),
    ]

    operations = [
        migrations.AlterField(
            model_name='personfamilyties',
            name='family_tie_date_birthday',
            field=models.DateTimeField(blank=True, null=True, verbose_name='Дата рождения'),
        ),
    ]
