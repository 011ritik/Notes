from django.urls import path
from . import views

urlpatterns = [
    path('endpoints/', views.endpoints, name='endpoints'),
    path('', views.get_notes, name='get_notes'),
    path('<int:pk>', views.get_note, name='get_note'),
    path('add/', views.add_note, name='add_note'),
    path('update/<int:pk>', views.update_note, name='update_note'),
    path('delete/<int:pk>', views.delete_note, name='delete_note'),

]