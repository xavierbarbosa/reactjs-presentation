import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';

class TopBar extends Component {
  render() {
    const user = this.props.user;

    return (
      <div className="app-top-bar">
        <h1>The Counter Machine</h1>
        <Avatar photo={user.photo} name={user.name} />
      </div>
    );
  }
}

TopBar.propTypes = {
  user: PropTypes.object.isRequired,
};

export default TopBar;