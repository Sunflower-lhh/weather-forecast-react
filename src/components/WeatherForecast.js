import React, { Component }from 'react';
import Location from './Location';
import Time from './Time';
import Weather from './Weather';

class WeatherForecast extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 center-box">
                    <Location />
                    <Time />
                    <Weather />
                </div>
                <div className="col-md-2"></div>
            </div>
        );
    }
}



export default WeatherForecast;