import { toastr } from 'react-redux-toastr'

import L from 'leaflet'
import { Draw } from 'leaflet-draw'
import tooType from './tool-type'
import toolType from './tool-type';
import iconeMarker from './imagens/leaf-green.png'
import shadowMarker from './imagens/leaf-shadow.png'

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
    eventoControles(map)

    return {
        type: 'CREATE_MAP',
        payload: { map: map, mapRender: true }
    }
}

export function addPolygon(props) {
    props.map.removeControl(props.map.drawControl)
    let params =  { polygon: true }
    props.drawControls.draw.polygon = params.polygon;
    props.map.addControl(createControl(props.drawControls, params, toolType.POLYGON))
    return {
        type: 'ADD_POLYGON',
        payload: { map: props.map, drawControls: props.drawControls }
    }     
    
}

export function addPolyline(props) {
    let params =  { polyline: true }
    props.drawControls.draw.polyline = params.polyline;
    props.map.addControl(createControl(props.drawControls, params, toolType.POLYLINE))

    return {
        type: 'ADD_POLYLINE',
        payload: { map: props.map, drawControls: props.drawControls }
    }
}

export function addCircle(props) {
    let params =  { circle: true }
    props.drawControls.draw.circle = params.circle;
    props.map.addControl(createControl(props.drawControls, params, toolType.CIRCLE))

    return {
        type: 'ADD_CIRCLE',
        payload: { map: props.map, drawControls: props.drawControls }
    }
}

export function addRectangle(props) {
    let params =  { rectangle: true }
    props.drawControls.draw.rectangle = params.rectangle;
    props.map.addControl(createControl(props.drawControls, params, toolType.RETANGLE))

    

    return {
        type: 'ADD_RETANGLE',
        payload: { map: props.map, drawControls: props.drawControls }
    }
}

export function addMarker(props) {
    let params =  { marker: true }
    props.drawControls.draw.marker = params.marker;
    props.map.addControl(createControl(props.drawControls, params, toolType.MARKER))
    
    
    
    return {
        type: 'ADD_MARKER',
        payload: { map: props.map, drawControls: props.drawControls }
    }
}

export function addCircleMarker(props) {
    let params =  { circlemarker: true }
    props.drawControls.draw.circlemarker = params.circlemarker;
    props.map.addControl(createControl(props.drawControls, params, toolType.CIRCLEMARCKER))

    return {
        type: 'ADD_CIRCLE_MARKER',
        payload: { map: props.map, drawControls: props.drawControls }
    }
}

function createControl(drawControls, params, type) {
    let tools = { polygon: false, polyline: false, circle: false, rectangle: false, marker: false, circlemarker: false }

    switch(type) {
        case toolType.POLYGON:
            tools = { polygon: params, polyline: false, circle: false, rectangle: false, marker: false, circlemarker: false }
            break
        case toolType.POLYLINE:
            tools = { polygon: false, polyline: params, circle: false, rectangle: false, marker: false, circlemarker: false }
            break
        case toolType.CIRCLE:
            tools = { polygon: false, polyline: false, circle: params, rectangle: false, marker: false, circlemarker: false }
            break
        case toolType.RETANGLE:
            tools = { polygon: false, polyline: false, circle: false, rectangle: params, marker: false, circlemarker: false }
            break
        case toolType.MARKER:
            tools = { polygon: false, polyline: false, circle: false, rectangle: false, marker: params, circlemarker: false }
            break
        case toolType.CIRCLEMARCKER:
            tools = { polygon: false, polyline: false, circle: false, rectangle: false, marker: false, circlemarker: params }
            break
        default:
            tools = { polygon: params, polyline: false, circle: false, rectangle: false, marker: false, circlemarker: false }         
    }
    return new L.Control.Draw({...drawControls, draw: tools })
    
    
}

function eventoControles(map) {
    map.on('draw:created', function (e) {
        console.log(e);
        if (e.layerType === 'marker') {
            debugger;
            L.marker([e.layer._latlng.lat, e.layer._latlng.lng], {icon: criarIconeMarker(map)}).addTo(map);
        }
        map.addLayer(e.layer);     
    })
}

function criarIconeMarker(map) {
    var greenIcon = L.icon({
        iconUrl: iconeMarker,
        shadowUrl: shadowMarker,
    
        iconSize:     [38, 95], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    })

    return greenIcon;

}