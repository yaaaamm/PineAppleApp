# Generated by Django 3.0.5 on 2020-04-24 15:23

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0003_auto_20200424_1110'),
    ]

    operations = [
        migrations.AlterField(
            model_name='рreviouslastname',
            name='createdAt',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='Created At'),
        ),
        migrations.CreateModel(
            name='Address',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('createdAt', models.DateTimeField(default=django.utils.timezone.now, verbose_name='Created At')),
                ('country', models.CharField(max_length=120, verbose_name='Страна')),
                ('region', models.CharField(max_length=120, verbose_name='Регион')),
                ('district', models.CharField(max_length=120, verbose_name='Округ')),
                ('city', models.CharField(max_length=120, verbose_name='Страна')),
                ('street', models.CharField(max_length=120, verbose_name='Улица')),
                ('building', models.CharField(max_length=120, verbose_name='Дом')),
                ('flat', models.CharField(max_length=120, verbose_name='Квартира')),
                ('person', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='web.Person')),
            ],
        ),
    ]
