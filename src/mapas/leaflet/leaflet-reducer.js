const INITIAL_STATE = {
    map: {}, 
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
            return { ...state, map: action.payload.map }
        case 'ADD_POLYGON':
            return { ...state, drawControls: {draw: { polygon: action.payload.polygon } }  }
        default:
            return state 
    }
}