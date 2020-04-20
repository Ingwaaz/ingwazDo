import React, { Component } from 'react';

class RegistrationFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: [
        {
          title: 'Name',
          name: 'name',
          type: 'text',
          id: 1,
          classNameField: 'name',
        },
        {
          title: 'Second Name',
          name: 'secondName',
          type: 'text',
          id: 2,
          classNameField: 'second_name',
        },
        {
          title: 'Email',
          name: 'email',
          type: 'text',
          id: 3,
          classNameField: 'email',
        },
        {
          title: 'Password',
          name: 'password',
          type: 'password',
          id: 4,
          classNameField: 'password',
        },
        {
          title: 'Confirm Password',
          name: 'comfirmPassword',
          type: 'password',
          id: 5,
          classNameField: 'confirm_password',
        },
      ],
      activeField: '',
    }

    this.changeActiveField = this.changeActiveField.bind(this);
  }

  changeActiveField(event) {
    const name = event.target.name;
    if (this.state.activeField === '') {
      this.setState({ activeField: name });
    } else if (this.state.activeField === name) {
      this.setState({ activeField: '' });
    }
  }

  render() {
    const fields = this.state.fields;
    return (
      <React.Fragment>
        { fields.map((item) => 
          <div
            className={
              this.state.activeField === item.name
                ? `registration__fields__` + item.classNameField + ' active'
                :  `registration__fields__` + item.classNameField
            }
            key={item.id}
            onFocus={this.changeActiveField}
            onBlur={this.changeActiveField}
          >
            <span>{item.title}</span>
            <input type={item.type} name={item.name} />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default RegistrationFields;
