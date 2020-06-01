export const main_titles ={
    person_previous_last_names: 'Предыдущая фамилия',
    person_addresses: 'Адрес',
    person_education: 'Образование',
    person_social_net: 'Соц. сети',
    person_family_ties: 'Семейные связи',
    person_fellow_traveler: 'Попутчики',
    person_social_relations_vk: 'Друзья соц сеть ВК',
    person_social_relations_fb: 'Друзья соц сеть ФБ',
    person_social_relations_inst: 'Друзья соц сеть Инст',
    person_social_relations_cm: 'Друзья соц сеть Однокласники',
    person_social_relations_group_vk: 'Группы ВК в которых состоит человек',
    person_social_relations_group_fb: 'Группы ФБ в которых состоит человек',
    person_social_relations_group_inst: 'Группы Инст в которых состоит человек',
    person_social_relations_group_cm: 'Группы Одноклассники в которых состоит человек',
    person_ip: 'Данные об ИП',

}



const person_previous_last_names = {
    last_name: 'Фамилия',
};
const person_addresses ={
    country: 'Страна',
    region: 'Регион',
    district: 'Округ',
    city: 'Город',
    street: 'Улица',
    building: 'Дом',
    construction_number: 'Стр.',
    flat: 'Кв.',
};
const person_education = {
    building_type: 'Тип заведения',
    building_name: 'Название учереждения',
    building_city: 'Город',
    building_number: 'Номер',
};
const person_social_net ={
    name_social_net: 'Название соц. сети',
    link_social_net: 'Ссылка на соцсеть',
};
const person_family_ties ={
    family_tie_relation: 'Родство',
    family_tie_first_name: 'Имя',
    family_tie_last_name: 'Фамилия',
    family_tie_middle_name: 'Отчество',
    family_tie_date_birthday: 'Дата рождения',
    family_tie_link_social_net: 'Ссылка на соцсеть',
    family_tie_job: 'Место работы',
    family_tie_working_position: 'Должность',
};
const person_fellow_traveler ={
    fellow_traveler_first_name: 'Имя',
    fellow_traveler_last_name: 'Фамилия',
    fellow_traveler_middle_name: 'Отчество',
    fellow_traveler_date_birthday: 'Дата рождения',
    fellow_traveler_city_from: 'Город отправления',
    fellow_traveler_city_to: 'Город прибытия',
    fellow_traveler_date_trip: 'Дата поездки',
};

const person_social_relations_vk ={
    social_relations_vk_link_account: 'Ссылка на аккаунт в соц.сети',
    social_relations_vk_first_name: 'Имя',
    social_relations_vk_last_name: 'Фамилия',
    social_relations_vk_middle_name: 'Отчество',
};
const person_social_relations_fb ={
    social_relations_fb_link_account: 'Ссылка на аккаунт в соц.сети',
    social_relations_fb_first_name: 'Имя',
    social_relations_fb_last_name: 'Фамилия',
    social_relations_fb_middle_name: 'Отчество',
};
const person_social_relations_inst ={
    social_relations_inst_link_account: 'Ссылка на аккаунт в соц.сети',
    social_relations_inst_first_name: 'Имя',
    social_relations_inst_last_name: 'Фамилия',
    social_relations_inst_middle_name: 'Отчество',
};
const person_social_relations_cm ={
    social_relations_cm_link_account: 'Ссылка на аккаунт в соц.сети',
    social_relations_cm_first_name: 'Имя',
    social_relations_cm_last_name: 'Фамилия',
    social_relations_cm_middle_name: 'Отчество',
};
const person_social_relations_group_vk ={
    social_relations_vk_link_group: 'Ссылка на группы',
    social_relations_vk_name_group: 'Название группы',
};
const person_social_relations_group_fb ={
    social_relations_fb_link_group: 'Ссылка на группы',
    social_relations_fb_name_group: 'Название группы',
};
const person_social_relations_group_inst ={
    social_relations_inst_link_group: 'Ссылка на группы',
    social_relations_inst_name_group: 'Название группы',
};
const person_social_relations_group_cm ={
    social_relations_cm_link_group: 'Ссылка на группы',
    social_relations_cm_name_group: 'Название группы',
};
const person_ip ={
    ip_name: 'Название ИП',
    ip_inn: 'ИНН',
    ip_is_active: 'Действует?',
    ip_date_period_from: 'Период работы с',
    ip_date_period_to: 'Период работы по',
};


export default function getPersonDetailTableTitle(title) {
    switch(title){
        case "person_previous_last_names":
            return person_previous_last_names;
        case "person_addresses":
            return person_addresses;
        case "person_education":
            return person_education;
        case "person_social_net":
            return person_social_net;
        case "person_family_ties":
            return person_family_ties;
        case "person_fellow_traveler":
            return person_fellow_traveler;
        case "person_social_relations_vk":
            return person_social_relations_vk;
        case "person_social_relations_fb":
            return person_social_relations_fb;
        case "person_social_relations_inst":
            return person_social_relations_inst;
        case "person_social_relations_cm":
            return person_social_relations_cm;
        case "person_social_relations_group_vk":
            return person_social_relations_group_vk;
        case "person_social_relations_group_fb":
            return person_social_relations_group_fb;
        case "person_social_relations_group_inst":
            return person_social_relations_group_inst;
        case "person_social_relations_group_cm":
            return person_social_relations_group_cm;
        case "person_ip":
            return person_ip;
        default:
            return title;
    }

}



