import React from 'react';
import '../assets/scss/pages/components/authorization.scss';

import Button from './button';

class Authorization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFieldEmail: false,
      activeFieldPassword: false,
      email: '',
      password: '',
      errorMessage: 'Заполните поля',
    };

    this.changeActiveFieldEmail = this.changeActiveFieldEmail.bind(this);
    this.changeActiveFieldPassword = this.changeActiveFieldPassword.bind(this);
    this.saveEmail = this.saveEmail.bind(this);
    this.savePassword = this.savePassword.bind(this);
    this.sendForm = this.sendForm.bind(this);
  }

  changeActiveFieldEmail() {
    this.setState({ activeFieldEmail: !this.state.activeFieldEmail, });
  }

  changeActiveFieldPassword() {
    this.setState({ activeFieldPassword: !this.state.activeFieldPassword, });
  }

  saveEmail(event) {
    this.setState({ email : event.target.value });
  }

  savePassword(event) {
    this.setState({ password : event.target.value });
  } 

  sendForm(event) {
    console.log(this.state.email, this.state.password);
    event.preventDefault();
  }

  render() {
    const activeFieldEmail = this.state.activeFieldEmail;
    const activeFieldPassword = this.state.activeFieldPassword;
    return (
      <div className="authorization">
        <div className="authorization__title">
          <span>Log into Ingwaz<strong>DO</strong></span>
        </div>
        <form>
          <div className="authorization__fields">
            <div className={activeFieldEmail ? 'authorization__fields__email active' : 'authorization__fields__email'} 
              onFocus={this.changeActiveFieldEmail} onBlur={this.changeActiveFieldEmail}>
              <span>Email</span>
              <input type="text" value={this.state.email} onChange={this.saveEmail}></input>
            </div>
            <div className={activeFieldPassword ? 'authorization__fields__password active' : 'authorization__fields__password'} 
              onFocus={this.changeActiveFieldPassword} onBlur={this.changeActiveFieldPassword}>
              <span>Password</span>
              <input type="password" value={this.state.password} onChange={this.savePassword}></input>
            </div>
          </div>
          <div className="authorization__btns">
            <Button btnVariant="login" btnName="Войти" functionEvent={this.sendForm} />
            <Button btnVariant="register" btnName="Регистрация" />
          </div>
          <div className="authorization__error_message">
            <span>{this.state.errorMessage}</span>
          </div>
        </form>
      </div>
    );
  }
}

export default Authorization;