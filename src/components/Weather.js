import React, { Component} from 'react';
import WeatherIcon from '../IconWeatherData.js';
// import img from './cloudy.svg';
// import img from './amcharts_weather_icons_1.0.0/animated/cloudy.svg';


var api = "https://fcc-weather-api.glitch.me/api/current?";


class Weather extends Component {
	constructor(props) {
		super(props);
		this.state = {
			weather: "",
			weatherDes: "",
			iconWeather: "",
			temperature: 0,
			humidity: 0,
			visibility: 0,
			windSpeed: 0
		};
		this.getLocation = this.getLocation.bind(this);
	}

	weatherIcon = (weather) => {
		switch(weather) {
			case "Dizzle":
				return WeatherIcon.dizzle;
				break;
			case "Clouds":
				return WeatherIcon.cloudy;
				break;
			case "Rain":
				return WeatherIcon.rain;
				break;
			case "Snow":
				return WeatherIcon.snowy;
				break;
			case "Clear":
				return WeatherIcon.clear;
				break;
			case "Thunderstorm":
				return WeatherIcon.thunderstorm;
				break;
			case "Mist":
				return WeatherIcon.other;
				break;
			default:
		}
	}

	showLocation = (lat, lon) => {
    	var urlString = api + lat + "&" + lon;
    	console.log(urlString);
    	fetch(urlString).then(results => {
        	return results.json();
    	}).then(data => {
        	this.setState({
            	weather: data.weather[0].main,
            	weatherDes: data.weather[0].description,
            	iconWeather: this.weatherIcon(data.weather[0].main),
            	temperature: data.main.temp,
            	humidity: data.main.humidity,
            	visibility: data.visibility,
            	windSpeed: data.wind.speed
            });
        });
    }

    getLocation = () => {
        if(!navigator.geolocation) {
            console.log("loi roi!");
        } else {
            navigator.geolocation.getCurrentPosition((position) => {
                var lat = "lat=" + position.coords.latitude;
                var lon = "lon=" + position.coords.longitude;
                console.log(lat);
                console.log(lon);
                this.showLocation(lat, lon);
            });
        }
    }

    componentDidMount() {
    	this.getLocation();
    }

    render() {
    	console.log(this.state.iconWeather);
    	return (
    		<div className="row align-text">
	    		<div className="col-md-6">
	    			<p>Thời tiết: {this.state.weather}</p>
	    			<p>Mô tả thời tiết: {this.state.weatherDes}</p>
	    			<div>
	    				<img src={this.state.iconWeather} alt="icon weather" />
	    			</div>
	    		</div>
	    		<div className="col-md-6">
					<p>Nhiệt độ: {this.state.temperature}</p>
					<p>Độ ẩm: {this.state.humidity}</p>
					<p>Tầm nhìn xa: {this.state.visibility}</p>
					<p>Tốc độ gió: {this.state.windSpeed}</p>
	    		</div>
	    	</div>
    	);
    }

}


export default Weather;