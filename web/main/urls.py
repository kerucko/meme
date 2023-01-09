from django.urls import path
from . import views

urlpatterns = [
    path('memematch', views.FirstPage, name="memematch"),
    path('quantity', views.Quantity, name="quantity"),
    path('point', views.Point, name='point')
]
