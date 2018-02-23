import React, {Component} from  'react'

import MenuItem from './menuItem'
import MenuTree from './menuTree'

class Menu extends Component {
    render() {
        return (
            <ul className="sidebar-menu">
                <MenuTree key="1" nome="Mapas" icone="map">
                    <MenuItem key="2" url="/arcgis" icone="" nome="ArcGis"/>
                    <MenuItem key="3" url="/teste1" icone="" nome="Google"/>
                    <MenuItem key="4" url="/teste1" icone="" nome="Leaflet"/>
                    <MenuItem key="5" url="/teste1" icone="" nome="OpenLayers"/>                    
                </MenuTree>                
            </ul>
        )
    }
}

export default Menu