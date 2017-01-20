import AppConfig from '../AppConfig';
const ProfileSource = {
  getUserProfileById(id){
    return fetch(`${AppConfig.url}profile/${id}?lastModified=0`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'token': localStorage.token
      }
    }).then((response) => response.json());
  }
};
export default ProfileSource;
