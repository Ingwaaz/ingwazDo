import React from 'react';
import '../assets/scss/pages/components/registration.scss';

import Button from './button';
import RegitrationFields from './registrationFields';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };

  }

  render() {
    return (
      <div className="registration">
        <div className="registration__title">
          <span>Registration in Ingwaz<strong>DO</strong></span>
        </div>
        <form>
          <div className="registration__fields">
            <RegitrationFields />
          </div>
          <div className="registration__checkbox">
            <div className="registration__checkbox__box"></div>
            <span>I consent to the processing of personal data</span>
          </div>
          <div className="registration__errors">
            <span>Сonfirm the processing of personal data</span>
          </div>
          <div className="registration__btns">
            <Button btnVariant="register" btnName="Register" />
          </div>
        </form>
      </div>
    );
  }
}

export default Registration;