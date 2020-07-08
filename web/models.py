from django.db import models
from django.utils import timezone
from django.utils.timezone import now


class Person(models.Model):
    createdAt = models.DateTimeField("Created At", auto_now_add=True)
    first_name = models.CharField("Имя", max_length=30)
    last_name = models.CharField("Фамилия", max_length=30)
    middle_name = models.CharField("Отчество", max_length=30, blank=True, null=True)
    inn = models.CharField("ИНН", max_length=30, blank=True, null=True)
    date_birthday = models.DateField("Дата рождения", blank=True, null=True)
    person_characteristic = models.TextField("Характеристика", blank=True, null=True)
    person_comment = models.TextField("Комментарий", blank=True, null=True)
    person_negative = models.TextField("Негатив", blank=True, null=True)

    def __str__(self):
        return self.first_name


class РreviousLastName(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE, blank=True, null=True, )
    createdAt = models.DateTimeField("Created At", auto_now_add=True)
    last_name = models.CharField("Фамилия", max_length=30, blank=True, null=True)

    def is_edit_mode(self):
        return False


class PersonPassport(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)
    passport_date_issued = models.DateField("Дата выдачи паспорта", null=True, blank=True)
    passport_issued = models.CharField("Выдан", max_length=300, blank=True, null=True)
    passport_code = models.CharField("Код паспорта", max_length=30, blank=True, null=True)
    passport_series = models.CharField("Серия паспорта", max_length=30, blank=True, null=True)
    passport_number = models.CharField("Номер паспорта", max_length=30, blank=True, null=True)
    passport_birthday_country = models.CharField("Место рождения (страна)", max_length=30, blank=True, null=True)
    passport_birthday_city = models.CharField("Место рождения (город)", max_length=30, blank=True, null=True)
    passport_address = models.CharField("Ардес регистрации", max_length=300, blank=True, null=True)


class PersonAddress(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)
    country = models.CharField("Страна", max_length=130, blank=True, null=True)
    region = models.CharField("Регион", max_length=130, blank=True, null=True)
    district = models.CharField("Округ", max_length=130, blank=True, null=True)
    city = models.CharField("Город", max_length=50, blank=True, null=True)
    street = models.CharField("Улица", max_length=150, blank=True, null=True)
    building = models.CharField("Дом", max_length=30, blank=True, null=True)
    construction_number = models.CharField("Строение", max_length=30, blank=True, null=True)
    flat = models.CharField("Квартира", max_length=30, blank=True, null=True)

    def is_edit_mode(self):
        return False


class PersonEducation(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)
    building_type = models.CharField("Тип заведения", max_length=30, blank=True, null=True)
    building_name = models.CharField("Название учереждения", max_length=30, blank=True, null=True)
    building_city = models.CharField("Город", max_length=30, blank=True, null=True)
    building_number = models.CharField("Номер", max_length=30, blank=True, null=True)


class PersonSocialNet(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)
    name_social_net = models.CharField("Название соц. сети", max_length=150, blank=True, null=True)
    link_social_net = models.URLField("Ссылка на соцсеть", max_length=200, blank=True, null=True)


class PersonFamilyTies(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)
    family_tie_relation = models.CharField("Степерь родства", max_length=30, blank=True, null=True)
    family_tie_first_name = models.CharField("Имя", max_length=30, blank=True, null=True)
    family_tie_last_name = models.CharField("Фамилия", max_length=30, blank=True, null=True)
    family_tie_middle_name = models.CharField("Отчество", max_length=30, blank=True, null=True)
    family_tie_date_birthday = models.DateField("Дата рождения", null=True, blank=True)
    family_tie_link_social_net = models.URLField("Ссылка на соцсеть", max_length=200, blank=True, null=True)
    family_tie_job = models.CharField("Место работы", max_length=130, blank=True, null=True)
    family_tie_working_position = models.CharField("Должность", max_length=130, blank=True, null=True)


class PersonFellowTraveler(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)
    fellow_traveler_first_name = models.CharField("Имя", max_length=30, blank=True, null=True)
    fellow_traveler_last_name = models.CharField("Фамилия", max_length=30, blank=True, null=True)
    fellow_traveler_middle_name = models.CharField("Отчество", max_length=30, blank=True, null=True)
    fellow_traveler_date_birthday = models.DateField("Дата рождения", null=True, blank=True)
    fellow_traveler_city_from = models.CharField("Город отправления", max_length=50, null=True, blank=True)
    fellow_traveler_city_to = models.CharField("Город прибытия", max_length=50, null=True, blank=True)
    fellow_traveler_date_trip = models.DateField("Дата поездки", null=True, blank=True)


class PersonSocialRelationsVK(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)
    social_relations_vk_link_account = models.URLField("Ссылка на аккаунт в соц.сети", max_length=200, blank=True,
                                                       null=True)
    social_relations_vk_first_name = models.CharField("Имя", max_length=30, blank=True, null=True)
    social_relations_vk_last_name = models.CharField("Фамилия", max_length=30, blank=True, null=True)
    social_relations_vk_middle_name = models.CharField("Отчество", max_length=30, blank=True, null=True)


class PersonSocialRelationsFB(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)
    social_relations_fb_link_account = models.URLField("Ссылка на аккаунт в соц.сети", max_length=200, blank=True,
                                                       null=True)
    social_relations_fb_first_name = models.CharField("Имя", max_length=30, blank=True, null=True)
    social_relations_fb_last_name = models.CharField("Фамилия", max_length=30, blank=True, null=True)
    social_relations_fb_middle_name = models.CharField("Отчество", max_length=30, blank=True, null=True)


class PersonSocialRelationsInst(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)
    social_relations_inst_link_account = models.URLField("Ссылка на аккаунт в соц.сети", max_length=200, blank=True,
                                                         null=True)
    social_relations_inst_first_name = models.CharField("Имя", max_length=30, blank=True, null=True)
    social_relations_inst_last_name = models.CharField("Фамилия", max_length=30, blank=True, null=True)
    social_relations_inst_middle_name = models.CharField("Отчество", max_length=30, blank=True, null=True)


class PersonSocialRelationsCM(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)
    social_relations_cm_link_account = models.URLField("Ссылка на аккаунт в соц.сети", max_length=200, blank=True,
                                                       null=True)
    social_relations_cm_first_name = models.CharField("Имя", max_length=30, blank=True, null=True)
    social_relations_cm_last_name = models.CharField("Фамилия", max_length=30, blank=True, null=True)
    social_relations_cm_middle_name = models.CharField("Отчество", max_length=30, blank=True, null=True)


class PersonSocialRelationsGroupVK(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)
    social_relations_vk_link_group = models.URLField("Ссылка на группы", max_length=200, blank=True, null=True)
    social_relations_vk_name_group = models.CharField("Имя", max_length=150, blank=True, null=True)


class PersonSocialRelationsGroupFB(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)
    social_relations_fb_link_group = models.URLField("Ссылка на группы", max_length=200, blank=True, null=True)
    social_relations_fb_name_group = models.CharField("Имя", max_length=150, blank=True, null=True)


class PersonSocialRelationsGroupInst(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)
    social_relations_inst_link_group = models.URLField("Ссылка на группы", max_length=200, blank=True, null=True)
    social_relations_inst_name_group = models.CharField("Имя", max_length=150, blank=True, null=True)


class PersonSocialRelationsGroupCM(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)
    social_relations_cm_link_group = models.URLField("Ссылка на группы", max_length=200, blank=True, null=True)
    social_relations_cm_name_group = models.CharField("Имя", max_length=150, blank=True, null=True)


class PersonIP(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)
    ip_name = models.CharField("Название ИП", max_length=50, blank=True, null=True)
    ip_inn = models.CharField("ИНН", max_length=30, blank=True, null=True)
    ip_is_active = models.BooleanField("Действует?", blank=True, null=True)
    ip_date_period_from = models.DateField("Период работы с", null=True, blank=True)
    ip_date_period_to = models.DateField("Период работы по", null=True, blank=True)


class IPDetail(models.Model):
    ip = models.ForeignKey(PersonIP, related_name='business_detail', on_delete=models.CASCADE)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)
    ip_detail_okved = models.CharField("Основной ОКВЕД", max_length=50, blank=True, null=True)


class PersonWorkWOC(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)
    company_name = models.CharField("Название компании", max_length=50, blank=True, null=True)
    company_inn = models.CharField("ИНН компании", max_length=30, blank=True, null=True)
    work_position = models.CharField("Должность", max_length=30, blank=True, null=True)
    work_date_period_from = models.DateField("Период работы в комании с", null=True, blank=True)
    work_date_period_to = models.DateField("Период работы в компании по", null=True, blank=True)


class PersonCompaniesCEOWOC(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE, blank=True, null=True)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)
    company_name = models.CharField("Название компании", max_length=50, blank=True, null=True)
    company_inn = models.CharField("ИНН компании", max_length=30, blank=True, null=True)
    companies_ceo_date_period_from = models.DateField("Ген. дир с", null=True, blank=True)
    companies_ceo_date_period_to = models.DateField("Ген. дир по", null=True, blank=True)
    company_date_period_from = models.DateField("Период работы компании с", null=True, blank=True)
    company_date_period_to = models.DateField("Период работы компании по", null=True, blank=True)


class PersonCompaniesFounderWOC(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE, blank=True, null=True)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)
    company_name = models.CharField("Название компании", max_length=50, blank=True, null=True)
    company_inn = models.CharField("ИНН компании", max_length=30, blank=True, null=True)
    company_share = models.IntegerField("Доля в компании", null=True, blank=True)
    company_date_period_from = models.DateField("Период работы компании с", null=True, blank=True)
    company_date_period_to = models.DateField("Период работы компании по", null=True, blank=True)


class CompaniesCEOFounders(models.Model):
    company = models.ForeignKey(PersonCompaniesCEOWOC, related_name='business_detail', on_delete=models.CASCADE, blank=True, null=True)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)
    first_name = models.CharField("Имя", max_length=30, blank=True, null=True)
    last_name = models.CharField("Фамилия", max_length=30, blank=True, null=True)
    middle_name = models.CharField("Отчество", max_length=30, blank=True, null=True)
    inn = models.CharField("ИНН", max_length=30, blank=True, null=True)


class CompaniesFounderPartners(models.Model):
    company = models.ForeignKey(PersonCompaniesFounderWOC, related_name='business_detail', on_delete=models.CASCADE, blank=True, null=True)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)
    first_name = models.CharField("Имя", max_length=30, blank=True, null=True)
    last_name = models.CharField("Фамилия", max_length=30, blank=True, null=True)
    middle_name = models.CharField("Отчество", max_length=30, blank=True, null=True)
    inn = models.CharField("ИНН", max_length=30, blank=True, null=True)
    company_share = models.IntegerField("Доля в компании", null=True, blank=True)





'''НЕ ИСПОЛЬЗУЕТСЯ'''
class Company(models.Model):
    company_name = models.CharField("Название компании", max_length=50, blank=True, null=True)
    company_inn = models.CharField("ИНН компании", max_length=30, blank=True, null=True)
    company_is_active = models.BooleanField("Действует?", blank=True, null=True)
    company_date_period_from = models.DateField("Период работы с", null=True, blank=True)
    company_date_period_to = models.DateField("Период работы по", null=True, blank=True)

'''НЕ ИСПОЛЬЗУЕТСЯ'''
class PersonWork(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)
    company = models.ManyToManyField(Company)
    work_position = models.CharField("Должность", max_length=30, blank=True, null=True)
    work_date_period_from = models.DateField("Период работы с", null=True, blank=True)
    work_date_period_to = models.DateField("Период работы по", null=True, blank=True)

'''НЕ ИСПОЛЬЗУЕТСЯ'''
class PersonCompaniesCEO(models.Model):
    person = models.ForeignKey(Person, on_delete=models.SET_NULL, blank=True, null=True)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)
    company = models.ManyToManyField(Company)
    companies_ceo = models.CharField("Сейчас является ген.дир?", max_length=30, blank=True, null=True)
    companies_ceo_date_period_from = models.DateField("Ген. дир с", null=True, blank=True)
    companies_ceo_date_period_to = models.DateField("Ген. дир по", null=True, blank=True)

'''НЕ ИСПОЛЬЗУЕТСЯ'''
class PersonCompaniesFounder(models.Model):
    person = models.ForeignKey(Person, on_delete=models.SET_NULL, blank=True, null=True)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)
    company = models.ManyToManyField(Company)
    companies_founder = models.CharField("Сейчас является учредителем?", max_length=30, blank=True, null=True)
    companies_founder_date_period_from = models.DateField("являлся учредителем с", null=True, blank=True)
    companies_founder_date_period_to = models.DateField("являлся учредителем по", null=True, blank=True)
