const INITIAL_STATE = {
    map: {},
    mapRender: false,
    id: 'mapLeaflet', 
    center: [51.505, -0.09], 
    zoom: 18, 
    drawControl: true,
    drawControls: {
                    position: 'topright',
                    draw: {
                        polygon: false,                    
                        polyline: false,
                        circle: false,
                        rectangle: false,
                        marker: false,
                        circlemarker: false
                    }
                    
                }                  
}

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'CREATE_MAP':
            return { ...state, map: action.payload.map, mapRender: action.payload.mapRender }
        case 'ADD_POLYGON':
            return { ...state, map: action.payload.map, drawControls: action.payload.drawControls }
        case 'ADD_POLYLINE':
            return { ...state, map: action.payload.map, drawControls: action.payload.drawControls }
        case 'ADD_CIRCLE':
            return { ...state, map: action.payload.map, drawControls: action.payload.drawControls }
        case 'ADD_RETANGLE':
            return { ...state, map: action.payload.map, drawControls: action.payload.drawControls }
        case 'ADD_MARKER':
            return { ...state, map: action.payload.map, drawControls: action.payload.drawControls }
        case 'ADD_CIRCLE_MARKER':
            return { ...state, map: action.payload.map, drawControls: action.payload.drawControls }
        default:
            return state 
    }
}