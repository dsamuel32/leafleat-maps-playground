import React, { Component } from 'react'

import 'modules/leaflet/dist/leaflet.css'
import 'modules/leaflet-draw/dist/leaflet.draw.css'
import './leaflet-map.css'

import L from 'leaflet'
import { Draw } from 'leaflet-draw';

const center = [51.505, -0.09];
const zoom = 18;

export default class LeafletMap extends Component {
    
    
    componentDidMount() {
        
        let map = L.map('mapLeaflet', { drawControl: true }).setView(center, zoom);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: zoom,
            draw: {}
        }).addTo(map);

        var editableLayers = new L.FeatureGroup();
        map.addLayer(editableLayers);
        map.removeControl(map.drawControl)
        map.addControl(new L.Control.Draw(this.drawControls()))
        
        map.on('draw:created', function (e) {
            console.log(e);
            map.addLayer(e.layer);
        });
        
    }

    drawControls() {
        return {
            position: 'topright',
            draw: {
                polygon: {
                allowIntersection: false, // Restricts shapes to simple polygons
                drawError: {
                    color: '#e1e100', // Color the shape will turn when intersects
                    message: '<strong>Oh snap!<strong> you can\'t draw that!' // Message that will show when intersect
                },
                shapeOptions: {
                    color: '#97009c'
                }
                },
                // disable toolbar item by setting it to false
                polyline: false,
                circle: false, // Turns off this drawing tool
                rectangle: false,
                marker: false,
                }
        }
    }

    render() {
        return (<div id="mapLeaflet"></div>)
    }

}

//https://jsfiddle.net/user2314737/324h2d9q/
//https://github.com/Leaflet/Leaflet.draw
