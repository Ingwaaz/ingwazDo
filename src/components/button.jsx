import React from 'react';
import '../assets/scss/pages/components/button.scss';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className={`button ${this.props.btnVariant}`} onClick={this.props.functionEvent}>
        <span>{this.props.btnName}</span>
      </div>
    );
  }
}

export default Button;