import React, { Component } from 'react';
import { Map, TileLayer} from 'react-leaflet';

class MapView extends Component {
    state = {
        lat: 53.469386,
        lng: -2.283222,
        zoom: 15,
    }    
    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <div>
                <Map center={position} zoom={this.state.zoom} onDragend={this.handleMapMove} onZoom={this.handleZoomChange} ref="map">
                    <TileLayer
                    attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />  
                </Map>                
            </div>
        );
    }
    handleMapMove = event => {
        const {lat, lng} = event.target.getCenter();
        this.setState({lat,lng})
    }
    handleZoomChange = event => {
        this.setState({
            zoom: event.target.getZoom()
        })
    }    
}

export default MapView;