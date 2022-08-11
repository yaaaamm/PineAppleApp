from datetime import datetime


from django.urls import reverse
from pineappleApp import settings
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect

from web.models import Person, РreviousLastName, PersonAddress, PersonEducation, PersonSocialNet, PersonFamilyTies


def index(request):
    return render(request, '../templates/index.html')


def add_person(request):
    if request.method == 'GET':
        return render(request, 'add_person.html')
    else:
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        middle_name = request.POST['middle_name']
        date_birthday = request.POST['date_birthday']
        person_characteristic = request.POST['person_characteristic']

        Person(first_name=first_name, last_name=last_name, middle_name=middle_name,
               date_birthday=date_birthday, person_characteristic=person_characteristic).save()

        return redirect('/person_list')


def person_list(request):
    return render(request, 'person_list.html', {
        'persons': Person.objects.all
    })


def person(request, number):
    error = ""
    person_data = Person.objects.filter(id=number)
    previous_last_names = РreviousLastName.objects.filter(person=person_data[0])
    person_addresses = PersonAddress.objects.filter(person=person_data[0])
    person_educations = PersonEducation.objects.filter(person=person_data[0])
    person_social_nets = PersonSocialNet.objects.filter(person=person_data[0])
    person_family_ties = PersonFamilyTies.objects.filter(person=person_data[0])
    return render(request, 'person_base.html', {
        'person': person_data[0],
        'number': number,
        'previous_last_names': previous_last_names,
        'person_addresses': person_addresses,
        'person_educations': person_educations,
        'person_social_nets': person_social_nets,
        'person_family_ties': person_family_ties,
    })

def add_previous_last_name(request, number):
    if request.method == 'POST':
        last_name = request.POST['previous_last_name']
        person_data = Person.objects.filter(id=number)
        РreviousLastName(person=person_data[0], last_name=last_name).save()
        url = "/person/" + str(number)
        return redirect(url)


def delete_previous_last_name(request, number):
        previous_last_name = РreviousLastName.objects.get(id=number)
        id = previous_last_name.person.id
        previous_last_name.delete()
        url = "/person/" + str(id)
        return redirect(url)

def add_address(request, number):
    if request.method == 'POST':
        country = request.POST['country']
        region = request.POST['region']
        district = request.POST['district']
        city = request.POST['city']
        street = request.POST['street']
        building = request.POST['building']
        flat =  request.POST['flat']
        person_data = Person.objects.filter(id=number)
        PersonAddress(person=person_data[0], country=country, region=region, district=district, city=city,
                      street=street, building=building, flat=flat).save()
        url = "/person/" + str(number)
        return redirect(url)

def delete_address(request, number):
        person_address = PersonAddress.objects.get(id=number)
        id = person_address.person.id
        person_address.delete()
        url = "/person/" + str(id)
        return redirect(url)

def add_person_education(request, number):
    if request.method == 'POST':
        building_type = request.POST['building_type']
        building_name = request.POST['building_name']
        building_city = request.POST['building_city']
        building_number = request.POST['building_number']
        person_data = Person.objects.filter(id=number)
        PersonEducation(person=person_data[0], building_type=building_type, building_name=building_name, building_city=building_city,
                      building_number=building_number).save()
        url = "/person/" + str(number)
        return redirect(url)

def delete_person_education(request, number):
        person_education = PersonEducation.objects.get(id=number)
        id = person_education.person.id
        person_education.delete()
        url = "/person/" + str(id)
        return redirect(url)

def add_person_social_net(request, number):
    if request.method == 'POST':
        name_social_net = request.POST['name_social_net']
        link_social_net = request.POST['link_social_net']
        person_data = Person.objects.filter(id=number)
        PersonSocialNet(person=person_data[0], name_social_net=name_social_net, link_social_net=link_social_net).save()
        url = "/person/" + str(number)
        return redirect(url)

def delete_person_social_net(request, number):
        person_social_net = PersonSocialNet.objects.get(id=number)
        id = person_social_net.person.id
        person_social_net.delete()
        url = "/person/" + str(id)
        return redirect(url)

def add_person_family_tie(request, number):
    if request.method == 'POST':
        family_tie_relation = request.POST['family_tie_relation']
        family_tie_first_name = request.POST['family_tie_first_name']
        family_tie_last_name = request.POST['family_tie_last_name']
        family_tie_middle_name = request.POST['family_tie_middle_name']
        family_tie_date_birthday = request.POST['family_tie_date_birthday']
        family_tie_link_social_net = request.POST['family_tie_link_social_net']
        family_tie_job = request.POST['family_tie_job']
        family_tie_working_position = request.POST['family_tie_working_position']
        person_data = Person.objects.filter(id=number)
        PersonFamilyTies(person=person_data[0], family_tie_relation=family_tie_relation, family_tie_first_name=family_tie_first_name,
                        family_tie_last_name=family_tie_last_name, family_tie_middle_name=family_tie_middle_name,
                        family_tie_date_birthday=family_tie_date_birthday, family_tie_link_social_net=family_tie_link_social_net,
                        family_tie_job=family_tie_job, family_tie_working_position=family_tie_working_position).save()
        url = "/person/" + str(number)
        return redirect(url)

def delete_person_family_tie(request, number):
        person_family_tie = PersonFamilyTies.objects.get(id=number)
        id = person_family_tie.person.id
        person_family_tie.delete()
        url = "/person/" + str(id)
        return redirect(url)