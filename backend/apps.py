from django.apps import AppConfig

from backend import views

class BopToTheTopConfig(AppConfig): # Our app config class
    name = 'backend'
    def ready(self):
        views.get_category_ids()