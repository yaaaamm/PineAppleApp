# Generated by Django 3.0.5 on 2020-05-26 15:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0014_auto_20200524_1931'),
    ]

    operations = [
        migrations.AlterField(
            model_name='рreviouslastname',
            name='person',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='web.Person'),
        ),
    ]
