import React, {Component} from 'react';
import TopBar from './Components/TopBar';
import Counter from './Components/Counter';
import AddInput from './Components/AddInput';

class App extends Component {

    state = {
        user: {
            name: 'Xavier Barbosa',
            photo: 'https://avatars2.githubusercontent.com/u/3688705'
        },
        counters: [
            'Push ups',
            'Slices of Pizza'
        ],
    };

    addNewCounter(title) {
        const counters = this.state.counters;
        counters.push(title);

        this.setState({counters})
    }

    render() {
        return (
            <div className="app">
                <TopBar user={this.state.user} />
                <br />
                <AddInput action={this.addNewCounter.bind(this)} />
                {this.state.counters.map((counter, index) => {
                    return <Counter key={index} title={counter}/>;
                })}
            </div>
        );
    }
}

export default App;
