import axios from 'axios';

const API_URL = 'http://localhost:8000';

export class API {

  constructor() {
    //EMPTY
  }

  static getBirds(page = 1) {
    const url = `${API_URL}/api/birds?page=${page}`;
    return axios.get(url).then(response => response.data);
  }

  static getBird(id) {
    const url = `${API_URL}/api/contacts/${id}`;
    return axios.get(url).then(response => response.data);
  }

  static getOrders() {
    const url = `${API_URL}/api/orders/`;
    return axios.get(url).then(response => response.data);
  }

  static getFamilies() {
    const url = `${API_URL}/api/families/`;
    return axios.get(url).then(response => response.data);
  }

  static getHabitats() {
    const url = `${API_URL}/api/habitats/`;
    return axios.get(url).then(response => response.data);
  }
}
