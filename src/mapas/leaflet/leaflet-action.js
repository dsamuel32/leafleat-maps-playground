import { toastr } from 'react-redux-toastr'

import L from 'leaflet'
import { Draw } from 'leaflet-draw';

export function criateMap(props) {
    console.log('evento pai')
    let map = L.map(props.id, { drawControl: props.drawControl }).setView(props.center, props.zoom)

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: props.zoom,
        draw: {}
    }).addTo(map);
    /*let editableLayers = new L.FeatureGroup();
    map.addLayer(editableLayers);*/
  
    map.removeControl(map.drawControl)
    map.addControl(new L.Control.Draw(props.drawControls))

    return {
        type: 'CREATE_MAP',
        payload: { map: map, mapRender: true }
    }
}

export function addPolygon(props) {
    props.map.removeControl(props.map.drawControl)
    props.drawControls.draw.polygon = true
    props.map.addControl(new L.Control.Draw(props.drawControls))
    return {
        type: 'ADD_POLYGON',
        payload: { map: props.map, drawControls: props.drawControls }
    }     
    
}

export function addPolyline(props) {
    props.map.removeControl(props.map.drawControl)
    props.drawControls.draw.polygon = false
    props.drawControls.draw.polyline = true
    props.map.addControl(new L.Control.Draw(props.drawControls))

    return {
        type: 'ADD_POLYLINE',
        payload: { map: props.map, drawControls: props.drawControls }
    }
}