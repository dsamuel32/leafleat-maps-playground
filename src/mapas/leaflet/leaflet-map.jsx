import React, { Component } from 'react'

import 'modules/leaflet/dist/leaflet.css'
import './leaflet-map.css'

import L from 'leaflet'

const center = [51.505, -0.09];
const zoom = 18;
let editableLayers;

export default class LeafletMap extends Component {
    
    
    componentDidMount() {
        
        let map = L.map('mapLeaflet', { drawControl: true }).setView(center, zoom);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: zoom
        }).addTo(map);
        
        L.marker(center).addTo(map);        
    }

    drawPluginOptions() {
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
                },
            edit: {
                featureGroup: editableLayers, //REQUIRED!!
                remove: false
            }
        }
    }

    render() {
        return (<div id="mapLeaflet"></div>)
    }

}

//https://jsfiddle.net/user2314737/324h2d9q/
//https://github.com/Leaflet/Leaflet.draw
