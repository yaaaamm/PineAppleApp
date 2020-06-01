import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class PersonsService{

    getPersons() {
        const url = `${API_URL}/person_list/`;
        return axios.get(url).then(response => response.data);
    }

    getPerson(id) {
        const url = `${API_URL}/person/${id}`;
        return axios.get(url).then(response => response.data);
    }
    PersonDeletePreviousLastName(data) {
        const url=`${ API_URL }/person_data_delete/`;
        return axios.delete(url, {
            data: {
                id: data.id, source: data.source
            }
        });
    }
    createPersonPreviousLastName(previousLastName){
        const url = `${API_URL}/person_data_create/`;
        return axios.post(url,previousLastName);
    }
    updatePersonPreviousLastName(PreviousLastName){
       console.log(PreviousLastName)
        const url = `${API_URL}/person_data_update/`;
        return axios.put(url,PreviousLastName);
    }
}

