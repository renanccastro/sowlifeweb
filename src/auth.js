import UserApiUtils from "./network/UserApiUtils"

module.exports = {
  loginFacebook(userid, fbtoken, cb){
    cb = arguments[arguments.length - 1];
    if(localStorage.token){
      console.log("armazenado!")
      if (cb)  cb(true);
      return
    }

    UserApiUtils.postLoginFacebook(userid,fbtoken).then((res)=>{
      console.log("to aqui!!")
      console.log(res)
      localStorage.token = res.token;
      localStorage._id = res.profile._id
      localStorage.profile = JSON.stringify(res.profile);
      if (cb)  cb(true);
    }).catch((err) =>{
      console.log(err);
    })
  },
  login(email, pass, cb) {
    cb = arguments[arguments.length - 1];
    if (localStorage.token) {
      if (cb) cb(true);
      this.onChange(true);
      return
    }
    pretendRequest(email, pass, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token;
        if (cb) cb(true);
        this.onChange(true)
      } else {
        if (cb) cb(false);
        this.onChange(false)
      }
    })
  },

  getToken() {
    return localStorage.token
  },

  logout(cb) {
    delete localStorage.token;
    try{
      window.FB.logout()
    }catch(e){

    }
    if (cb) cb();
    this.onChange(false);
  },

  loggedIn() {
    return !!localStorage.token
  },

  onChange() {}
}

function pretendRequest(email, pass, cb) {
  setTimeout(() => {
    if (email === 'joe@example.com' && pass === 'password1') {
      cb({
        authenticated: true,
        token: Math.random().toString(36).substring(7)
      })
    } else {
      cb({ authenticated: false })
    }
  }, 0)
}
