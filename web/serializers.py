from rest_framework import serializers
from .models import Person, РreviousLastName, PersonAddress, PersonEducation, PersonSocialNet, PersonFamilyTies, \
    PersonSocialRelationsVK, PersonSocialRelationsFB, PersonSocialRelationsInst, \
    PersonSocialRelationsCM, PersonSocialRelationsGroupVK, PersonSocialRelationsGroupFB, PersonSocialRelationsGroupInst, \
    PersonSocialRelationsGroupCM, PersonWork, PersonFellowTraveler, PersonIP, PersonWorkWOC, PersonCompaniesCEOWOC, \
    PersonCompaniesFounderWOC, CompaniesCEOFounders, CompaniesFounderPartners, IPDetail, PersonPassport


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = '__all__'


class PersonРreviousLastNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = РreviousLastName
        fields = ('last_name', 'id', 'person')


class PersonPassportSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonPassport
        fields = (
            'passport_date_issued', 'passport_issued', 'passport_code', 'passport_series', 'passport_number', 'passport_birthday_country', 'passport_birthday_city', 'passport_address', 'id',
            'person')


class PersonAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonAddress
        fields = (
            'country', 'region', 'district', 'city', 'street', 'building', 'construction_number', 'flat', 'id',
            'person')


class PersonEducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonEducation
        fields = ('building_type', 'building_name', 'building_city', 'building_number', 'id', 'person')


class PersonSocialNetSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonSocialNet
        fields = ('name_social_net', 'link_social_net', 'id', 'person')


class PersonFamilyTiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonFamilyTies
        fields = ('family_tie_relation', 'family_tie_first_name', 'family_tie_last_name', 'family_tie_middle_name',
                  'family_tie_date_birthday', 'family_tie_link_social_net', 'family_tie_job',
                  'family_tie_working_position',
                  'id', 'person')


class PersonFellowTravelerSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonFellowTraveler
        fields = (
            'fellow_traveler_first_name', 'fellow_traveler_last_name', 'fellow_traveler_middle_name',
            'fellow_traveler_date_birthday',
            'fellow_traveler_city_from', 'fellow_traveler_city_to', 'fellow_traveler_date_trip', 'id', 'person')


class PersonSocialRelationsVKSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonSocialRelationsVK
        fields = (
            'social_relations_vk_link_account', 'social_relations_vk_first_name', 'social_relations_vk_last_name',
            'social_relations_vk_middle_name', 'id', 'person')


class PersonSocialRelationsFBSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonSocialRelationsFB
        fields = (
            'social_relations_fb_link_account', 'social_relations_fb_first_name',
            'social_relations_fb_last_name',
            'social_relations_fb_middle_name', 'id', 'person')


class PersonSocialRelationsInstSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonSocialRelationsInst
        fields = (
            'social_relations_inst_link_account', 'social_relations_inst_first_name', 'social_relations_inst_last_name',
            'social_relations_inst_middle_name', 'id', 'person')


class PersonSocialRelationsCMSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonSocialRelationsCM
        fields = (
            'social_relations_cm_link_account', 'social_relations_cm_first_name',
            'social_relations_cm_last_name',
            'social_relations_cm_middle_name', 'id', 'person')


class PersonSocialRelationsGroupVKSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonSocialRelationsGroupVK
        fields = (
            'social_relations_vk_link_group', 'social_relations_vk_name_group', 'id', 'person')


class PersonSocialRelationsGroupFBSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonSocialRelationsGroupFB
        fields = (
            'social_relations_fb_link_group', 'social_relations_fb_name_group', 'id', 'person')


class PersonSocialRelationsGroupInstSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonSocialRelationsGroupInst
        fields = (
            'social_relations_inst_link_group', 'social_relations_inst_name_group', 'id', 'person')


class PersonSocialRelationsGroupCMSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonSocialRelationsGroupCM
        fields = (
            'social_relations_fb_link_group', 'social_relations_cm_name_group', 'id', 'person')


class PersonWorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonWork
        fields = (
            'work_company_name', 'work_inn', 'work_position',
            'work_date_period_from',
            'work_date_period_to', 'id', 'person')


class IPDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = IPDetail
        fields = (
            'ip_detail_okved', 'id', 'ip')


class PersonIPSerializer(serializers.ModelSerializer):
    business_detail = IPDetailSerializer(many=True,read_only=True)

    class Meta:
        model = PersonIP
        fields = (
            'ip_name', 'ip_inn',
            'ip_date_period_from',
            'ip_date_period_to', 'business_detail', 'id', 'person')




class PersonWorkWOCSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonWorkWOC
        fields = (
            'company_name', 'company_inn', 'work_position',
            'work_date_period_from',
            'work_date_period_to', 'id', 'person')


class CompaniesCEOFoundersSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompaniesCEOFounders
        fields = (
            'first_name', 'last_name', 'middle_name',
            'inn', 'id', 'company')


class CompaniesFounderPartnersSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompaniesFounderPartners
        fields = (
            'first_name', 'last_name', 'middle_name',
            'inn', 'company_share', 'id', 'company')


class PersonCompaniesCEOWOCSerializer(serializers.ModelSerializer):
    business_detail = CompaniesCEOFoundersSerializer(many=True, read_only=True)


    class Meta:
        model = PersonCompaniesCEOWOC
        fields = (
            'company_name', 'company_inn', 'companies_ceo_date_period_from',
            'companies_ceo_date_period_to',
            'business_detail', 'id', 'person')


class PersonCompaniesFounderWOCSerializer(serializers.ModelSerializer):
    business_detail = CompaniesFounderPartnersSerializer(many=True, read_only=True)

    class Meta:
        model = PersonCompaniesFounderWOC
        fields = (
            'company_name', 'company_inn', 'company_share',
            'business_detail', 'id', 'person')


