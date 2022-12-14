# Generated by Django 3.0.5 on 2020-04-27 12:50

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0005_auto_20200424_1528'),
    ]

    operations = [
        migrations.AddField(
            model_name='personaddress',
            name='construction_number',
            field=models.CharField(default=django.utils.timezone.now, max_length=30, verbose_name='Строение'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='personaddress',
            name='building',
            field=models.CharField(max_length=30, verbose_name='Дом'),
        ),
        migrations.AlterField(
            model_name='personaddress',
            name='city',
            field=models.CharField(max_length=30, verbose_name='Город'),
        ),
        migrations.AlterField(
            model_name='personaddress',
            name='country',
            field=models.CharField(max_length=30, verbose_name='Страна'),
        ),
        migrations.AlterField(
            model_name='personaddress',
            name='district',
            field=models.CharField(max_length=30, verbose_name='Округ'),
        ),
        migrations.AlterField(
            model_name='personaddress',
            name='flat',
            field=models.CharField(max_length=30, verbose_name='Квартира'),
        ),
        migrations.AlterField(
            model_name='personaddress',
            name='region',
            field=models.CharField(max_length=30, verbose_name='Регион'),
        ),
        migrations.AlterField(
            model_name='personaddress',
            name='street',
            field=models.CharField(max_length=50, verbose_name='Улица'),
        ),
        migrations.CreateModel(
            name='PersonSocialNet',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('createdAt', models.DateTimeField(default=django.utils.timezone.now, verbose_name='Created At')),
                ('name_social_net', models.CharField(max_length=30, verbose_name='Название учереждения')),
                ('link_social_net', models.CharField(max_length=30, verbose_name='Ссылка на соцсеть')),
                ('person', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='web.Person')),
            ],
        ),
        migrations.CreateModel(
            name='PersonFamilyTies',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('createdAt', models.DateTimeField(default=django.utils.timezone.now, verbose_name='Created At')),
                ('relation', models.CharField(max_length=30, verbose_name='Степерь родства')),
                ('first_name', models.CharField(max_length=30, verbose_name='Имя')),
                ('last_name', models.CharField(max_length=30, verbose_name='Фамилия')),
                ('middle_name', models.CharField(max_length=30, verbose_name='Отчество')),
                ('date_birthday', models.DateField(verbose_name='Дата рождения')),
                ('link_social_net', models.CharField(max_length=30, verbose_name='Ссылка на соцсеть')),
                ('job', models.CharField(max_length=30, verbose_name='Место работы')),
                ('working_position', models.CharField(max_length=30, verbose_name='Город')),
                ('person', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='web.Person')),
            ],
        ),
        migrations.CreateModel(
            name='PersonEducation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('createdAt', models.DateTimeField(default=django.utils.timezone.now, verbose_name='Created At')),
                ('building_type', models.CharField(max_length=30, verbose_name='Тип здания')),
                ('the_name', models.CharField(max_length=30, verbose_name='Название учереждения')),
                ('the_city', models.CharField(max_length=30, verbose_name='Город')),
                ('the_number', models.CharField(max_length=30, verbose_name='Номер')),
                ('person', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='web.Person')),
            ],
        ),
    ]
