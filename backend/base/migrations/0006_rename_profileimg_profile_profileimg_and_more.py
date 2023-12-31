# Generated by Django 4.2.2 on 2023-06-15 02:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0005_alter_tweet_user'),
    ]

    operations = [
        migrations.RenameField(
            model_name='profile',
            old_name='ProfileImg',
            new_name='profileImg',
        ),
        migrations.AlterField(
            model_name='tweet',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='meeps', related_query_name='profile', to='base.profile'),
        ),
    ]
