import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '400px',
    height: '300px'
};

export class MapComponent extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={12}
                style={mapStyles}
                initialCenter={{
                    lat: 22.356703,
                    lng: 114.0406677
                }}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAry0seJfhg9IUkTMOeEmCAsukennkt3Cc'
})(MapComponent);