import React, { Component} from 'react';


class Time extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentDate: "",
			currentTime: ""
		};

		this.setCurrentTime = this.setCurrentTime.bind(this)
	}

	addZero = (number) => {
		if(number < 10) {
			number = "0" + number;
		}
		return number;
	}

	setCurrentTime = () => {
		var getDateObj = new Date();

		// get date
		var getMonth = this.addZero(getDateObj.getMonth());
		var getDate = this.addZero(getDateObj.getDate());
		var getYear = getDateObj.getFullYear();
		var getCurrentDate = getMonth + "/" + getDate + "/" + getYear;

		// get time
		var getHours = getDateObj.getHours();
		var getMinute = this.addZero(getDateObj.getMinutes());
		var ampm = getHours >= 12 ? ' pm' : ' am';
		getHours = getHours % 12;
		var getCurrentTime = getHours + ":" + getMinute + ampm;

		this.setState({
			currentDate: getCurrentDate,
			currentTime: getCurrentTime
		})
	}

	componentDidMount() {
		this.setTimer = setInterval(() => this.setCurrentTime(), 1000);
	}

	componentWillUnMount() {
		clearInterval(this.setTimer);
	}

	render() {
		return(
			<div className="align-text">
				<p>Ngày: {this.state.currentDate}</p>
				<p>Thời gian: {this.state.currentTime}</p>
			</div>
		);
	}
}

export default Time;