import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Box from '@material-ui/core/Box';

export class MapContainer extends Component {
    render() {
        return (
            
                <Map initialCenter={{
                    lat: 1.0914,
                    lng: 37.0117
                }}
                    style={{ height: "40vh", width: "67vw" }}  //"67vw"
                    google={this.props.google} zoom={14}>

                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                    <Marker
                        title={'Customer location'}
                        name={'SOMA'}
                        position={{ lat: 1.0914, lng: 37.0117 }} />


                </Map>
            

        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAUKb48_8hxxqFVW51Yf_p5AoxGYNe40JM")
})(MapContainer)