import AppConfig from '../AppConfig';
const ProfileSource = {
  getUserProfileById(id, lastModified = 0){
    return fetch(`${AppConfig.url}profile/${id}?lastModified=${lastModified}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'token': localStorage.token
      }
    }).then((response) => {
        return response.json()
    }).catch((err) =>{
      return new Promise(function(resolve, reject) {
        reject("Sem resposta")
      })
    });
  }
};
export default ProfileSource;
