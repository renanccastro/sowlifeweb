import AppConfig from '../AppConfig';
const PrayRequestSource = {
  fetch(){
    return fetch(AppConfig.url + "getprayrequest", {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': localStorage.token
      }
    }).then((response) => response.json());
  },
  getUserPrayRequests(){
    return fetch(AppConfig.url + "allprays", {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': localStorage.token
      }
    }).then((response) => response.json());
  },
  postNewPray(Description){
    let pray = {Description};
    return fetch(AppConfig.url + "addprayrequest", {
      method: 'POST',
      body: JSON.stringify(pray),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': localStorage.token
      }
    }).then((response) => response.json());
  },
  getById(id){
    return fetch(AppConfig.url + "getpraybyid/"+id, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': localStorage.token
      }
    }).then((response) => response.json());
  }
};
export default PrayRequestSource;
