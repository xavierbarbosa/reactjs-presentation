import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';

class TopBar extends Component {
  render() {
    const user = this.props.user;

    return (
      <div className="app-top-bar">
        <Avatar photo={user.photo} />
        {user.name}
      </div>
    );
  }
}

TopBar.propTypes = {
  user: PropTypes.object.isRequired,
};

export default TopBar;