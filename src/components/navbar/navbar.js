import {Link} from 'react-router';
import React, { Component } from 'react';
import auth from '../../auth';
import "./navbar.css"
import { browserHistory } from 'react-router';

import PrayRequestSource from "../../network/PrayRequestSource"

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand">SL</Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-left">
              <li className="nav-item">
                <Link to="/nova-oracao" className="nav-link">Nova Oração</Link>
              </li>
              <li className="nav-item" onClick={()=>{
                PrayRequestSource.fetch().then((response) => {
                  this.props.router.push("/pray/"+response._id);
                })
              }
              }>
                <a className="nav-link" href="#">Pegar Oração</a>
              </li>
              <li className="nav-item">
                <Link to="/chat" className="nav-link">Mensagens</Link>
              </li>


            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                   aria-expanded="false">SowLife <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li onClick={
                    (e) =>{
                      auth.logout();
                      this.props.router.replace('/login')
                    }
                  }><a href="#">Sair</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
