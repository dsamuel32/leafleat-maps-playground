import { toastr } from 'react-redux-toastr'

import L from 'leaflet'
import { Draw } from 'leaflet-draw';

export function criateMap(props) {

    let map = L.map(props.id, { drawControl: props.drawControl }).setView(props.center, props.zoom)

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: props.zoom,
        draw: {}
    }).addTo(map);
    let editableLayers = new L.FeatureGroup();
    map.addLayer(editableLayers);
    
    map.removeControl(map.drawControl)

    return {
        type: 'CREATE_MAP',
        payload: { map: map }
    }
}