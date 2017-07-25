import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddInput extends Component {

    state = {
        value: '',
    };

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    clear() {
        this.setState({value: ''});
    }

    handleSubmit() {
        if (this.state.value === '') {
            return;
        }

        this.props.action(this.state.value);
        this.clear();
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange.bind(this)}
                    onClick={this.clear.bind(this)}
                />
                <button onClick={this.handleSubmit.bind(this)}>Add Counter</button>
            </div>
        );
    }
}

AddInput.propTypes = {
    action: PropTypes.func.isRequired,
};

export default AddInput;
