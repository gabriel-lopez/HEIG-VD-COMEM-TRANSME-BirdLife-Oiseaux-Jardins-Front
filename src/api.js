import axios from 'axios'

//const API_URL = 'https://oiseaux-de-nos-jardins.birdlife.ch'
const API_URL = 'http://localhost:8000'

export class API {
  static getBirds (pGarden, pOrder, pFamily, pHabitat, pPlumageColor, pLegsColor, pBeakColor, pBeakShape, pSize, pName, page = 1) {
    const url = `${API_URL}/api/birds`
    return axios.get(url, {
      params: {
        garden: pGarden,
        order: pOrder,
        family: pFamily,
        habitat: pHabitat,
        plumageColor: pPlumageColor,
        legsColor: pLegsColor,
        beakColor: pBeakColor,
        beakShape: pBeakShape,
        size: pSize,
        name: pName,
        page: page
      }
    }).then(response => response.data)
  }

  static getBird (id) {
    const url = `${API_URL}/api/birds/${id}`
    return axios.get(url).then(response => response.data)
  }

  static getOrders () {
    const url = `${API_URL}/api/orders/`
    return axios.get(url).then(response => response.data)
  }

  static getFamilies () {
    const url = `${API_URL}/api/families/`
    return axios.get(url).then(response => response.data)
  }

  static getHabitats () {
    const url = `${API_URL}/api/habitats/`
    return axios.get(url).then(response => response.data)
  }

  static getColors () {
    const url = `${API_URL}/api/colors/`
    return axios.get(url).then(response => response.data)
  }

  static getBeakShapes () {
    const url = `${API_URL}/api/beakshapes/`
    return axios.get(url).then(response => response.data)
  }

  static getSizes () {
    const url = `${API_URL}/api/sizes/`
    return axios.get(url).then(response => response.data)
  }

  static getFeatures () {
    const url = `${API_URL}/api/features/`
    return axios.get(url).then(response => response.data)
  }

  static postParticipation (pBirds, pObservation_day, pObservation_time, pObservation_npa, pObservation_city, pObservation_features, pName, pSurname, pEmail, pBirthday, pNewsletter, pNewmember, pOrder) {
    const url = `${API_URL}/api/submissions/`
    return axios.post(url, {
      observation_day: pObservation_day,
      observation_time: pObservation_time,
      observation_npa: pObservation_npa,
      observation_city: pObservation_city,
      observation_features: pObservation_features,

      name: pName,
      surname: pSurname,
      email: pEmail,
      birthday: pBirthday,
      newsletter: pNewsletter,
      newmember: pNewmember,
      order: pOrder,

      birds: pBirds,
    }).then(response => response.data)
  }
}
