# Generated by Django 3.0.5 on 2020-05-24 19:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0012_auto_20200524_1254'),
    ]

    operations = [
        migrations.AlterField(
            model_name='personaddress',
            name='createdAt',
            field=models.DateTimeField(auto_now_add=True, verbose_name='Created At'),
        ),
    ]
