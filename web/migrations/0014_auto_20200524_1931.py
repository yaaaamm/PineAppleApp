# Generated by Django 3.0.5 on 2020-05-24 19:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0013_auto_20200524_1911'),
    ]

    operations = [
        migrations.AlterField(
            model_name='personaddress',
            name='building',
            field=models.CharField(blank=True, max_length=30, verbose_name='Дом'),
        ),
        migrations.AlterField(
            model_name='personaddress',
            name='city',
            field=models.CharField(blank=True, max_length=30, verbose_name='Город'),
        ),
        migrations.AlterField(
            model_name='personaddress',
            name='construction_number',
            field=models.CharField(blank=True, max_length=30, verbose_name='Строение'),
        ),
        migrations.AlterField(
            model_name='personaddress',
            name='country',
            field=models.CharField(blank=True, max_length=30, verbose_name='Страна'),
        ),
        migrations.AlterField(
            model_name='personaddress',
            name='district',
            field=models.CharField(blank=True, max_length=30, verbose_name='Округ'),
        ),
        migrations.AlterField(
            model_name='personaddress',
            name='flat',
            field=models.CharField(blank=True, max_length=30, verbose_name='Квартира'),
        ),
        migrations.AlterField(
            model_name='personaddress',
            name='region',
            field=models.CharField(blank=True, max_length=30, verbose_name='Регион'),
        ),
        migrations.AlterField(
            model_name='personaddress',
            name='street',
            field=models.CharField(blank=True, max_length=50, verbose_name='Улица'),
        ),
        migrations.AlterField(
            model_name='рreviouslastname',
            name='last_name',
            field=models.CharField(blank=True, max_length=30, verbose_name='Фамилия'),
        ),
    ]
