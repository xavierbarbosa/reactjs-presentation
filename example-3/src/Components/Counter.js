import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {

  state = {
     count: 0,
  }

  increase() {
      this.setState({
          count: ++this.state.count,
      })
  }

  render() {
    return (
      <div className="app-counter">
        <h2>{this.props.title}: {this.state.count}</h2>
        <button onClick={this.increase.bind(this)}>+1</button>
      </div>
    );
  }
}

Counter.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Counter;