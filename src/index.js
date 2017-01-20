import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/Home/home';
import Login from './components/Login/login';
import PrayRequest from './components/PrayRequest/prayRequest';
import Chat from './components/chat/chat'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import '../node_modules/font-awesome/css/font-awesome.css';
var $ = require('jquery');
window.$ = $;
window.jQuery = $;
require('../node_modules/bootstrap/dist/js/bootstrap.js')
import {Router,Route,browserHistory,IndexRoute} from 'react-router';
import auth from './auth'
window.auth = auth

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
function alreadyAuthed(nextState, replace) {
  if (auth.loggedIn()) {
    replace({
      pathname: '/'
    })
  }
}


ReactDOM.render(
  (<Router history={browserHistory}>
    <Route path="/" component={App} onEnter={requireAuth}>
      <IndexRoute component={Home} />
    </Route>
    {/* <Route path="/chat/:id" component={Chat}/> */}
    <Route path="/pray/:id" component={PrayRequest}/>

    <Route path="/login" onEnter={alreadyAuthed} component={Login}/>
  </Router>),
  document.getElementById('root')
);
