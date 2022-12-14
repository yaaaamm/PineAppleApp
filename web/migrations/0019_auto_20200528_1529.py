# Generated by Django 3.0.5 on 2020-05-28 15:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0018_auto_20200528_1504'),
    ]

    operations = [
        migrations.AlterField(
            model_name='personaddress',
            name='building',
            field=models.CharField(blank=True, max_length=30, null=True, verbose_name='Дом'),
        ),
        migrations.AlterField(
            model_name='personaddress',
            name='city',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name='Город'),
        ),
        migrations.AlterField(
            model_name='personaddress',
            name='construction_number',
            field=models.CharField(blank=True, max_length=30, null=True, verbose_name='Строение'),
        ),
        migrations.AlterField(
            model_name='personaddress',
            name='country',
            field=models.CharField(blank=True, max_length=130, null=True, verbose_name='Страна'),
        ),
        migrations.AlterField(
            model_name='personaddress',
            name='district',
            field=models.CharField(blank=True, max_length=130, null=True, verbose_name='Округ'),
        ),
        migrations.AlterField(
            model_name='personaddress',
            name='flat',
            field=models.CharField(blank=True, max_length=30, null=True, verbose_name='Квартира'),
        ),
        migrations.AlterField(
            model_name='personaddress',
            name='region',
            field=models.CharField(blank=True, max_length=130, null=True, verbose_name='Регион'),
        ),
        migrations.AlterField(
            model_name='personaddress',
            name='street',
            field=models.CharField(blank=True, max_length=150, null=True, verbose_name='Улица'),
        ),
        migrations.AlterField(
            model_name='personeducation',
            name='building_city',
            field=models.CharField(blank=True, max_length=30, null=True, verbose_name='Город'),
        ),
        migrations.AlterField(
            model_name='personeducation',
            name='building_name',
            field=models.CharField(blank=True, max_length=30, null=True, verbose_name='Название учереждения'),
        ),
        migrations.AlterField(
            model_name='personeducation',
            name='building_number',
            field=models.CharField(blank=True, max_length=30, null=True, verbose_name='Номер'),
        ),
        migrations.AlterField(
            model_name='personeducation',
            name='building_type',
            field=models.CharField(blank=True, max_length=30, null=True, verbose_name='Тип заведения'),
        ),
        migrations.AlterField(
            model_name='personfamilyties',
            name='family_tie_first_name',
            field=models.CharField(blank=True, max_length=30, null=True, verbose_name='Имя'),
        ),
        migrations.AlterField(
            model_name='personfamilyties',
            name='family_tie_job',
            field=models.CharField(blank=True, max_length=130, null=True, verbose_name='Место работы'),
        ),
        migrations.AlterField(
            model_name='personfamilyties',
            name='family_tie_last_name',
            field=models.CharField(blank=True, max_length=30, null=True, verbose_name='Фамилия'),
        ),
        migrations.AlterField(
            model_name='personfamilyties',
            name='family_tie_link_social_net',
            field=models.CharField(blank=True, max_length=150, null=True, verbose_name='Ссылка на соцсеть'),
        ),
        migrations.AlterField(
            model_name='personfamilyties',
            name='family_tie_middle_name',
            field=models.CharField(blank=True, max_length=30, null=True, verbose_name='Отчество'),
        ),
        migrations.AlterField(
            model_name='personfamilyties',
            name='family_tie_relation',
            field=models.CharField(blank=True, max_length=30, null=True, verbose_name='Степерь родства'),
        ),
        migrations.AlterField(
            model_name='personfamilyties',
            name='family_tie_working_position',
            field=models.CharField(blank=True, max_length=130, null=True, verbose_name='Должность'),
        ),
        migrations.AlterField(
            model_name='personsocialnet',
            name='link_social_net',
            field=models.CharField(blank=True, max_length=150, null=True, verbose_name='Ссылка на соцсеть'),
        ),
        migrations.AlterField(
            model_name='personsocialnet',
            name='name_social_net',
            field=models.CharField(blank=True, max_length=150, null=True, verbose_name='Название соц. сети'),
        ),
        migrations.AlterField(
            model_name='рreviouslastname',
            name='last_name',
            field=models.CharField(blank=True, max_length=30, null=True, verbose_name='Фамилия'),
        ),
    ]
