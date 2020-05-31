from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.shortcuts import render, redirect
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.utils import json

from .serializers import *

from web.models import *


def index(request):
    return render(request, '../templates/index.html')


@api_view(['GET'])
def person_list(request):
    if request.method == 'GET':
        data = []
        nextPage = 1
        previousPage = 1
        persons = Person.objects.all()
        page = request.GET.get('page', 1)
        paginator = Paginator(persons, 100)
        try:
            data = paginator.page(page)
        except PageNotAnInteger:
            data = paginator.page(1)
        except EmptyPage:
            data = paginator.page(paginator.num_pages)

        serializer = PersonSerializer(data, context={'request': request}, many=True)
        if data.has_next():
            nextPage = data.next_page_number()
        if data.has_previous():
            previousPage = data.previous_page_number()

        return Response({'data': serializer.data, 'count': paginator.count, 'numpages': paginator.num_pages,
                         'nextlink': '/api/customers/?page=' + str(nextPage),
                         'prevlink': '/api/customers/?page=' + str(previousPage)})


@api_view(['POST'])
def person_detail_create(request, id):
    if request.method == 'POST':
        body = json.loads(request.body)
        source = body['data']['source']
        data = body['data']['person_detail']
        data['person'] = id
        if source == "person_previous_last_names":
            serializer = PersonРreviousLastNameSerializer(data=data)
        elif source == "person_addresses":
            serializer = PersonAddressSerializer(data=data)
        elif source == "person_education":
            serializer = PersonEducationSerializer(data=data)
        elif source == "person_social_net":
            serializer = PersonSocialNetSerializer(data=data)
        elif source == "person_family_ties":
            serializer = PersonFamilyTiesSerializer(data=data)
        elif source == "person_fellow_traveler":
            serializer = PersonFellowTravelerSerializer(data=data)
        elif source == "person_social_relations_vk":
            serializer = PersonSocialRelationsVKSerializer(data=data)
        elif source == "person_social_relations_fb":
            serializer = PersonSocialRelationsFBSerializer(data=data)
        elif source == "person_social_relations_inst":
            serializer = PersonSocialRelationsInstSerializer(data=data)
        elif source == "person_social_relations_cm":
            serializer = PersonSocialRelationsCMSerializer(data=data)
        elif source == "person_social_relations_group_vk":
            serializer = PersonSocialRelationsGroupVKSerializer(data=data)
        elif source == "person_social_relations_group_fb":
            serializer = PersonSocialRelationsGroupFBSerializer(data=data)
        elif source == "person_social_relations_group_inst":
            serializer = PersonSocialRelationsGroupInstSerializer(data=data)
        elif source == "person_social_relations_group_cm":
            serializer = PersonSocialRelationsGroupCMSerializer(data=data)
        elif source == "person_ip":
            serializer = PersonIPSerializer(data=data)
        if serializer and serializer.is_valid():
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def person_add(request):
    if request.method == 'POST':
        body = json.loads(request.body)
        data = body['data']
        serializer = PersonSerializer(data=data)
        serializer.is_valid()
        print(serializer)
        print(serializer.errors)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def person_detail(request, id):
    try:
        person_data = Person.objects.get(id=id)
    except Person.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    person_previous_last_names = РreviousLastName.objects.filter(person=person_data.id)
    person_addresses = PersonAddress.objects.filter(person=person_data.id)
    person_education = PersonEducation.objects.filter(person=person_data.id)
    person_social_net = PersonSocialNet.objects.filter(person=person_data.id)
    person_family_ties = PersonFamilyTies.objects.filter(person=person_data.id)
    person_fellow_traveler = PersonFellowTraveler.objects.filter(person=person_data.id)
    person_social_relations_vk = PersonSocialRelationsVK.objects.filter(person=person_data.id)
    person_social_relations_fb = PersonSocialRelationsFB.objects.filter(person=person_data.id)
    person_social_relations_inst = PersonSocialRelationsInst.objects.filter(person=person_data.id)
    person_social_relations_cm = PersonSocialRelationsCM.objects.filter(person=person_data.id)
    person_social_relations_group_vk = PersonSocialRelationsGroupVK.objects.filter(person=person_data.id)
    person_social_relations_group_fb = PersonSocialRelationsGroupFB.objects.filter(person=person_data.id)
    person_social_relations_group_inst = PersonSocialRelationsGroupInst.objects.filter(person=person_data.id)
    person_social_relations_group_cm = PersonSocialRelationsGroupCM.objects.filter(person=person_data.id)
    person_ip = PersonIP.objects.filter(person=person_data.id)

    if request.method == 'GET':
        person_serializer = PersonSerializer(person_data, context={'request': request})
        person_previous_last_name_serializer = PersonРreviousLastNameSerializer(person_previous_last_names,
                                                                                context={'request': request}, many=True)
        person_addresses_serializer = PersonAddressSerializer(person_addresses,
                                                              context={'request': request}, many=True)
        person_education_serializer = PersonEducationSerializer(person_education,
                                                                context={'request': request}, many=True)
        person_social_net_serializer = PersonSocialNetSerializer(person_social_net,
                                                                 context={'request': request}, many=True)
        person_family_ties_serializer = PersonFamilyTiesSerializer(person_family_ties,
                                                                   context={'request': request}, many=True)
        person_fellow_traveler_serializer = PersonFellowTravelerSerializer(person_fellow_traveler,
                                                                           context={'request': request}, many=True)
        person_social_relations_vk_serializer = PersonSocialRelationsVKSerializer(person_social_relations_vk,
                                                                                  context={'request': request},
                                                                                  many=True)
        person_social_relations_fb_serializer = PersonSocialRelationsFBSerializer(person_social_relations_fb,
                                                                                  context={'request': request},
                                                                                  many=True)
        person_social_relations_inst_serializer = PersonSocialRelationsInstSerializer(person_social_relations_inst,
                                                                                      context={'request': request},
                                                                                      many=True)
        person_social_relations_cm_serializer = PersonSocialRelationsCMSerializer(person_social_relations_cm,
                                                                                  context={'request': request},
                                                                                  many=True)
        person_social_relations_group_vk_serializer = PersonSocialRelationsGroupVKSerializer(
            person_social_relations_group_vk,
            context={'request': request},
            many=True)
        person_social_relations_group_fb_serializer = PersonSocialRelationsGroupFBSerializer(
            person_social_relations_group_fb,
            context={'request': request},
            many=True)
        person_social_relations_group_inst_serializer = PersonSocialRelationsGroupInstSerializer(
            person_social_relations_group_inst,
            context={'request': request},
            many=True)
        person_social_relations_group_cm_serializer = PersonSocialRelationsGroupCMSerializer(
            person_social_relations_group_cm,
            context={'request': request},
            many=True)
        person_ip_serializer = PersonIPSerializer(
            person_ip,
            context={'request': request},
            many=True)

        return Response(
            {
                'person': person_serializer.data,
                'person_previous_last_names': person_previous_last_name_serializer.data,
                'person_addresses': person_addresses_serializer.data,
                'person_education': person_education_serializer.data,
                'person_social_net': person_social_net_serializer.data,
                'person_family_ties': person_family_ties_serializer.data,
                'person_fellow_traveler': person_fellow_traveler_serializer.data,
                'person_social_relations_vk': person_social_relations_vk_serializer.data,
                'person_social_relations_fb': person_social_relations_fb_serializer.data,
                'person_social_relations_inst': person_social_relations_inst_serializer.data,
                'person_social_relations_cm': person_social_relations_cm_serializer.data,
                'person_social_relations_group_vk': person_social_relations_group_vk_serializer.data,
                'person_social_relations_group_fb': person_social_relations_group_fb_serializer.data,
                'person_social_relations_group_inst': person_social_relations_group_inst_serializer.data,
                'person_social_relations_group_cm': person_social_relations_group_cm_serializer.data,
                'person_ip': person_ip_serializer.data,
            })


@api_view(['PUT'])
def person_detail_update(request):
    if request.method == 'PUT':
        body = json.loads(request.body)
        source = body['data']['source']
        data = body['data']['person_detail']
        if source == "person_previous_last_names":
            person_previous_last_names = РreviousLastName.objects.get(id=data['id'])
            serializer = PersonРreviousLastNameSerializer(person_previous_last_names, data=data,
                                                          context={'request': request})
        elif source == "person_addresses":
            person_addresses = PersonAddress.objects.get(id=data['id'])
            serializer = PersonAddressSerializer(person_addresses, data=data, context={'request': request})
        elif source == "person_education":
            person_education = PersonEducation.objects.get(id=data['id'])
            serializer = PersonEducationSerializer(person_education, data=data, context={'request': request})
        elif source == "person_social_net":
            person_social_net = PersonSocialNet.objects.get(id=data['id'])
            serializer = PersonSocialNetSerializer(person_social_net, data=data, context={'request': request})
        elif source == "person_family_ties":
            person_family_ties = PersonFamilyTies.objects.get(id=data['id'])
            serializer = PersonFamilyTiesSerializer(person_family_ties, data=data, context={'request': request})
        elif source == "person_fellow_traveler":
            person_fellow_traveler = PersonFellowTraveler.objects.get(id=data['id'])
            serializer = PersonFellowTravelerSerializer(person_fellow_traveler, data=data, context={'request': request})
        elif source == "person_social_relations_vk":
            person_social_relations_vk = PersonSocialRelationsVK.objects.get(id=data['id'])
            serializer = PersonSocialRelationsVKSerializer(person_social_relations_vk, data=data,
                                                           context={'request': request})
        elif source == "person_social_relations_fb":
            person_social_relations_fb = PersonSocialRelationsFB.objects.get(id=data['id'])
            serializer = PersonSocialRelationsFBSerializer(person_social_relations_fb, data=data,
                                                           context={'request': request})
        elif source == "person_social_relations_inst":
            person_social_relations_inst = PersonSocialRelationsInst.objects.get(id=data['id'])
            serializer = PersonSocialRelationsInstSerializer(person_social_relations_inst, data=data,
                                                             context={'request': request})
        elif source == "person_social_relations_cm":
            person_social_relations_cm = PersonSocialRelationsCM.objects.get(id=data['id'])
            serializer = PersonSocialRelationsCMSerializer(person_social_relations_cm, data=data,
                                                           context={'request': request})
        elif source == "person_social_relations_group_vk":
            person_social_relations_group_vk = PersonSocialRelationsGroupVK.objects.get(id=data['id'])
            serializer = PersonSocialRelationsGroupVKSerializer(person_social_relations_group_vk, data=data,
                                                                context={'request': request})
        elif source == "person_social_relations_group_fb":
            person_social_relations_group_fb = PersonSocialRelationsGroupFB.objects.get(id=data['id'])
            serializer = PersonSocialRelationsGroupFBSerializer(person_social_relations_group_fb, data=data,
                                                                context={'request': request})
        elif source == "person_social_relations_group_inst":
            person_social_relations_group_inst = PersonSocialRelationsGroupInst.objects.get(id=data['id'])
            serializer = PersonSocialRelationsGroupInstSerializer(person_social_relations_group_inst, data=data,
                                                                  context={'request': request})
        elif source == "person_social_relations_group_cm":
            person_social_relations_group_cm = PersonSocialRelationsGroupCM.objects.get(id=data['id'])
            serializer = PersonSocialRelationsGroupCMSerializer(person_social_relations_group_cm, data=data,
                                                                context={'request': request})
        elif source == "person_ip":
            person_ip = PersonIP.objects.get(id=data['id'])
            serializer = PersonIPSerializer(person_ip, data=data,
                                            context={'request': request})
        if serializer and serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def person_detail_delete(request):
    if request.method == 'DELETE':
        body = json.loads(request.body)
        source = body['source']
        id = body['id']
        if source == "person_previous_last_names":
            person_details = РreviousLastName.objects.get(id=id)
        elif source == "person_addresses":
            person_details = PersonAddress.objects.get(id=id)
        elif source == "person_education":
            person_details = PersonEducation.objects.get(id=id)
        elif source == "person_social_net":
            person_details = PersonSocialNet.objects.get(id=id)
        elif source == "person_family_ties":
            person_details = PersonFamilyTies.objects.get(id=id)
        elif source == "person_fellow_traveler":
            person_details = PersonFellowTraveler.objects.get(id=id)
        elif source == "person_social_relations_vk":
            person_details = PersonSocialRelationsVK.objects.get(id=id)
        elif source == "person_social_relations_fb":
            person_details = PersonSocialRelationsFB.objects.get(id=id)
        elif source == "person_social_relations_inst":
            person_details = PersonSocialRelationsInst.objects.get(id=id)
        elif source == "person_social_relations_cm":
            person_details = PersonSocialRelationsCM.objects.get(id=id)
        elif source == "person_social_relations_group_vk":
            person_details = PersonSocialRelationsGroupVK.objects.get(id=id)
        elif source == "person_social_relations_group_fb":
            person_details = PersonSocialRelationsGroupFB.objects.get(id=id)
        elif source == "person_social_relations_group_inst":
            person_details = PersonSocialRelationsGroupInst.objects.get(id=id)
        elif source == "person_social_relations_group_cm":
            person_details = PersonSocialRelationsGroupCM.objects.get(id=id)
        elif source == "person_ip":
            person_details = PersonIP.objects.get(id=id)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        person_details.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


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
        flat = request.POST['flat']
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
        PersonEducation(person=person_data[0], building_type=building_type, building_name=building_name,
                        building_city=building_city,
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
        PersonFamilyTies(person=person_data[0], family_tie_relation=family_tie_relation,
                         family_tie_first_name=family_tie_first_name,
                         family_tie_last_name=family_tie_last_name, family_tie_middle_name=family_tie_middle_name,
                         family_tie_date_birthday=family_tie_date_birthday,
                         family_tie_link_social_net=family_tie_link_social_net,
                         family_tie_job=family_tie_job, family_tie_working_position=family_tie_working_position).save()
        url = "/person/" + str(number)
        return redirect(url)


def delete_person_family_tie(request, number):
    person_family_tie = PersonFamilyTies.objects.get(id=number)
    id = person_family_tie.person.id
    person_family_tie.delete()
    url = "/person/" + str(id)
    return redirect(url)
