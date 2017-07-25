import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Avatar extends Component {

  style = {
    name: {
      fontSize: '24px',
    }
  };

  render() {
    return (
      <div className="avatar">
        <img
            src={this.props.photo}
            alt="This guy's face!"
            width={100}
            height={100}
        />
        <span style={this.style.name}> {this.props.name}</span>
      </div>
    );
  }
}

Avatar.propTypes = {
    photo: PropTypes.string.isRequired,
};

export default Avatar;
