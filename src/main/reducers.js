import { combineReducers } from "redux"
import { reducer as toastrReducer } from 'react-redux-toastr'
import LeafletReducer  from '../mapas/leaflet/leaflet-reducer'

const rootReducer = combineReducers({
    toastr: toastrReducer,
    leaflet: LeafletReducer
})

export default rootReducer