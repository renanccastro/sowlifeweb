import AppConfig from '../AppConfig';
var sha1 = require('sha1');
import 'whatwg-fetch'



const UserApiUtils = {
  postLoginFacebook(userid, token){
    console.log(userid,token);
    return fetch(AppConfig.url+"loginandcreatifnotexistsfacebook", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        facebookuserid: userid,
        accesstoken: token,
      })
    }).then(function(response) {
      return response.json()
    });
  },
  postLoginEmailUser(email,password){
    password = sha1(password);
    return fetch(AppConfig.url+"loginlocalpost", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      })
    }).then((response) => response.json());
  }
};

export default UserApiUtils;
