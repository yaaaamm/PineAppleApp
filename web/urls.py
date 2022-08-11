"""pineappleApp URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.urls import path
from django.views.decorators.csrf import csrf_exempt

from web import views
from django.conf.urls import url


urlpatterns = [
    path('', views.index),
    url(r'^person_add/', csrf_exempt(views.person_add)),
    url(r'^person_list/$', views.person_list),
    url(r'^person/(?P<id>[0-9]+)$', views.person),
    url(r'^person_detail/(?P<id>[0-9]+)$', views.person_detail),
    url(r'^person_detail_delete/$', views.person_detail_delete),
    url(r'^person_detail_create/(?P<id>[0-9]+)$', csrf_exempt(views.person_detail_create)),
    url(r'^person_detail_update/', csrf_exempt(views.person_detail_update)),
    path('add_previous_last_name/<int:number>', views.add_previous_last_name),
    path('delete_previous_last_name/<int:number>', views.delete_previous_last_name),
    path('add_address/<int:number>', views.add_address),
    path('delete_address/<int:number>', views.delete_address),
    path('add_person_education/<int:number>', views.add_person_education),
    path('delete_person_education/<int:number>', views.delete_person_education),
    path('add_person_social_net/<int:number>', views.add_person_social_net),
    path('delete_person_social_net/<int:number>', views.delete_person_social_net),
    path('add_person_family_tie/<int:number>', views.add_person_family_tie),
    path('delete_person_family_tie/<int:number>', views.delete_person_family_tie),


]
