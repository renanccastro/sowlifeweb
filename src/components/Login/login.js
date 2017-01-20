import React, { Component } from 'react';
import auth from '../../auth'
import logoPng from '../../../public/img/logo_sowlife_isolado.png'
import "./login.css"
import Message from "../message";
import FacebookLogin from 'react-facebook-login';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', pass: '', error: []};
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleEmail(event) {
    this.setState({email: event.target.value});
  }
  handlePass(event) {
    this.setState({pass: event.target.value});
  }
  nextRoute(){
    const { location } = this.props;

    if (location.state && location.state.nextPathname) {
      this.props.router.replace(location.state.nextPathname)
    } else {
      this.props.router.replace('/')
    }

  }
  handleSubmit(e){
    auth.login(this.state.email, this.state.pass, (r)=>{
      if (!r){
        this.setState({error: {message:"Usuário ou senha errada.", type:"danger"}})
        return
      }
      console.log(r);
      this.nextRoute();
    });
    e.preventDefault();
  }

  responseFacebook = (response) => {
    auth.loginFacebook(response.id, response.accessToken, (bool) => {
      console.log("chamou")
      console.log(bool)
      if(bool)
        this.nextRoute();
    })
    console.log(response);
  }

  render() {
    return (
        <div className="css-login-container fill">
          <div className="container fill">
            <img className=" img-responsive img-center" width="200px" height="auto" role="presentation" src={logoPng}/>
            <Message message={this.state.error}/>
            <form id="loginForm" className="form-signin" onSubmit={this.handleSubmit}>
              <input type="text" id="username" required="true"
                            className="form-control" onChange={this.handleEmail} placeholder="login / email"
                           />
              <input type="password" id="password" required="true"
                             className="form-control" onChange={this.handlePass} placeholder="senha"/>


              <button id="submitButton" type="submit"
                      className="btn btn-lg btn-primary btn-block black-button">ACESSAR O SISTEMA
              </button>
              <FacebookLogin
                textButton=" Logar com Facebook"
                appId="787236971297906"
                autoLoad={true}
                fields="name,email,picture"
                cssClass="btn btn-lg btn-block btn-primary"
                icon="fa-facebook"
                callback={this.responseFacebook} />
            </form>
          </div>
        </div>
    );
  }
}

export default Login;
