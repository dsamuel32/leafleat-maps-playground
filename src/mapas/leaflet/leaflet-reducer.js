const INITIAL_STATE = {
    map: {}, 
    id: 'mapLeaflet', 
    center: [51.505, -0.09], 
    zoom: 18, 
    drawControl: false}

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'CREATE_MAP':
            return { ...state, map: action.payload }
        default:
            return state 
    }
}