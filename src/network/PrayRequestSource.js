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
  }
};
export default PrayRequestSource;
