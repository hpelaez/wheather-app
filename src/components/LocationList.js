import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles.css';

const LocationList = ({ cities, onSeletedLocation }) => {
    const handleWeatherLocationClick = city => {
        console.log('handleWeatherLocationClick')
        onSeletedLocation(city);
    }
    const strToComponents = cities => (
        cities.map( city => 
            (
                <WeatherLocation 
                    key={city} 
                    city={city} 
                    onWeatherLocationClick={() => handleWeatherLocationClick(city)}/>))
    )

    return (
        <div className="locationList">
            {strToComponents(cities)}
        </div>
    )
    
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSeletedLocation: PropTypes.func,
}

export default LocationList;