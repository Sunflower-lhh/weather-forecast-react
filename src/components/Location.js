import React, { Component }from 'react';

var api = "https://fcc-weather-api.glitch.me/api/current?";


class Location extends Component {
    constructor(props) {
        super(props);
        this.state = {
            geolocation: ""
        };
        // this.showLocation = this.showLocation.bind(this);
        this.getLocation = this.getLocation.bind(this);
        

    }




    showLocation = (lat, lon) => {
        var urlString = api + lat + "&" + lon;
        console.log(urlString);
        fetch(urlString).then(results => {
            return results.json();
        }).then(data => {
            this.setState({geolocation: data.name + "," + data.sys.country});
            console.log(this.state.geolocation);
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
        // if(!navigator.geolocation) {
        //     console.log("loi roi!");
        // } else {
        //     navigator.geolocation.getCurrentPosition(function(position) {
        //         var lat = "lat=" + position.coords.latitude;
        //         var lon = "lon=" + position.coords.longitude;
        //         console.log(lat);
        //         console.log(lon);
        //         var urlString = api + lat + "&" + lon;
        //         var urlString = api + lat + "&" + lon;
        //         console.log(urlString);
        //     });
        //     fetch(urlString).then(results => {
        //         return results.json();
        //     }).then(data => {
        //         this.setState({geolocation: data.name + "," + data.sys.country});
        //         console.log(this.state.geolocation);
        //     });
        // }

        this.getLocation();
        // console.log(endApi);
        
        
        // fetch(urlString).then(results => {
        //             return results.json();
        //         }).then(data => {
        //             this.setState({geolocation: data.name + "," + data.sys.country});
        //             console.log(this.state.geolocation);
        //         });
        



    }


    

    render() {
        return (
            <div className="align-text">
                <p>{this.state.geolocation}</p>
            </div>
        );
    }

}


export default Location;
