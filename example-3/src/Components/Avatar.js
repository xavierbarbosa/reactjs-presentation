import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Avatar extends Component {
    render() {
        return (
            <div className="avatar">
                <img
                    src={this.props.photo}
                    alt="This guy's face!"
                    with={100}
                    height={100}
                />
            </div>
        );
    }
}

Avatar.propTypes = {
    photo: PropTypes.string.isRequired,
};

export default Avatar;
