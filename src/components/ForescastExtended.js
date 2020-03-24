import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ForescastExtended extends Component {
    
    render() {
        const { city } = this.props;
        return (<div>Pronostico Extendido para {city}</div>);
    }
}

ForescastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForescastExtended;