# Generated by Django 4.2.5 on 2024-08-05 01:40

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("khata", "0004_alter_applyloan_loantype"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="is_customer_verified",
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name="user",
            name="is_phone_verified",
            field=models.BooleanField(default=False),
        ),
    ]
