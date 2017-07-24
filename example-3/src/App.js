import React, { Component } from 'react';
import TopBar from './Components/TopBar';
import Counter from './Components/Counter';

class App extends Component {


  componentDidMount() {
    this.setState({

    })
  }

  render() {
    const user = {
      name: 'Xavier',
      photo: 'https://avatars2.githubusercontent.com/u/3688705'
    };

    return (
      <div className="app">
        <TopBar user={user} />
        <Counter title={'Push ups'} />
        <Counter title={'Cups of coffee'} />
        <Counter title={'Beers'} />
      </div>
    );
  }
}

export default App;
