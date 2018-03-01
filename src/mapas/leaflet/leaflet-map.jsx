import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import 'modules/leaflet/dist/leaflet.css'
import 'modules/leaflet-draw/dist/leaflet.draw.css'
import './leaflet-map.css'

import { criateMap } from './leaflet-action'

class LeafletMap extends Component {
    
    componentDidMount() {
        console.log('pai')
        this.props.criateMap(this.props);

        /*var editableLayers = new L.FeatureGroup();
        map.addLayer(editableLayers);
        map.removeControl(map.drawControl)
        map.addControl(new L.Control.Draw(this.drawControls()))
        
        map.on('draw:created', function (e) {
            console.log(e);
            map.addLayer(e.layer);
        });*/
        
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
        return (
            <div>
                <div id="mapLeaflet"></div>
                { this.props.mapRender ? this.props.children : '' }
            </div>
            
        )
    }

}

const mapStateToProps = state => (
    {
        id: state.leaflet.id, 
        map: state.leaflet.map,
        mapRender: state.leaflet.mapRender, 
        center: state.leaflet.center, 
        zoom: state.leaflet.zoom, 
        drawControl: state.leaflet.drawControl,
        drawControls: state.leaflet.drawControls
    })
const mapDispatchToProps = dispatch => bindActionCreators({ criateMap }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (LeafletMap)
//https://jsfiddle.net/user2314737/324h2d9q/
//https://github.com/Leaflet/Leaflet.draw
