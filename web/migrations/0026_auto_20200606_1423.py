# Generated by Django 3.0.5 on 2020-06-06 14:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0025_auto_20200606_1422'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ipdetail',
            name='ip',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ip_detail', to='web.PersonIP'),
        ),
    ]
