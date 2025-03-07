# Generated by Django 5.0.7 on 2024-10-14 20:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("tigressapp", "0002_dish_products_delete_product"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="products",
            name="img",
        ),
        migrations.AddField(
            model_name="products",
            name="image",
            field=models.ImageField(blank=True, null=True, upload_to="../static/img/"),
        ),
    ]
