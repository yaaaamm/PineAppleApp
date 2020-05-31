# Generated by Django 3.0.5 on 2020-05-28 14:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0015_auto_20200526_1544'),
    ]

    operations = [
        migrations.AlterField(
            model_name='person',
            name='createdAt',
            field=models.DateTimeField(auto_now_add=True, verbose_name='Created At'),
        ),
        migrations.AlterField(
            model_name='personaddress',
            name='city',
            field=models.CharField(blank=True, max_length=50, verbose_name='Город'),
        ),
        migrations.AlterField(
            model_name='personaddress',
            name='country',
            field=models.CharField(blank=True, max_length=130, verbose_name='Страна'),
        ),
        migrations.AlterField(
            model_name='personaddress',
            name='district',
            field=models.CharField(blank=True, max_length=130, verbose_name='Округ'),
        ),
        migrations.AlterField(
            model_name='personaddress',
            name='region',
            field=models.CharField(blank=True, max_length=130, verbose_name='Регион'),
        ),
        migrations.AlterField(
            model_name='personaddress',
            name='street',
            field=models.CharField(blank=True, max_length=150, verbose_name='Улица'),
        ),
        migrations.AlterField(
            model_name='personeducation',
            name='createdAt',
            field=models.DateTimeField(auto_now_add=True, verbose_name='Created At'),
        ),
        migrations.AlterField(
            model_name='personfamilyties',
            name='createdAt',
            field=models.DateTimeField(auto_now_add=True, verbose_name='Created At'),
        ),
        migrations.AlterField(
            model_name='personfamilyties',
            name='family_tie_job',
            field=models.CharField(max_length=130, verbose_name='Место работы'),
        ),
        migrations.AlterField(
            model_name='personfamilyties',
            name='family_tie_link_social_net',
            field=models.CharField(max_length=150, verbose_name='Ссылка на соцсеть'),
        ),
        migrations.AlterField(
            model_name='personfamilyties',
            name='family_tie_working_position',
            field=models.CharField(max_length=130, verbose_name='Должность'),
        ),
        migrations.AlterField(
            model_name='personsocialnet',
            name='createdAt',
            field=models.DateTimeField(auto_now_add=True, verbose_name='Created At'),
        ),
        migrations.AlterField(
            model_name='personsocialnet',
            name='link_social_net',
            field=models.CharField(max_length=150, verbose_name='Ссылка на соцсеть'),
        ),
        migrations.AlterField(
            model_name='personsocialnet',
            name='name_social_net',
            field=models.CharField(max_length=150, verbose_name='Название соц. сети'),
        ),
    ]
