import React, {Component} from  'react'

import MenuItem from './menuItem'
import MenuTree from './menuTree'

class Menu extends Component {
    render() {
        return (
            <ul className="sidebar-menu">
                <MenuTree key="1" nome="Mapas" icone="map">
                    <MenuItem key="2" url="/leaflet" icone="leaf" nome="Leaflet"/>                  
                </MenuTree>                
            </ul>
        )
    }
}

export default Menu