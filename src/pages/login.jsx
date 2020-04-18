import React from 'react';
import '../assets/scss/pages/login/login.scss';

import Authorization from '../components/authorization';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="login">
        <span className="login__logo">Ingwaz<strong>DO</strong></span>
        <Authorization />
      </div>
    );
  }
}

export default Login;