import React from 'react';
import '../assets/scss/pages/login/login.scss';

import Authorization from '../components/authorization';
import Regisntation from '../components/registration';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      registration: true,
    };

    this.activateRegistration = this.activateRegistration.bind(this);
  }

  activateRegistration() {
    this.setState({ registration: !this.state.registration });
  }

  render() {
    let formType;
    if (!this.state.registration) {
      formType = <Authorization />;
    } else {
      formType = <Regisntation  />
    }

    return (
      <div className="login">
        <span className="login__logo">Ingwaz<strong>DO</strong></span>
        {formType}
      </div>
    );
  }
}

export default Login;