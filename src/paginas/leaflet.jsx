import React, { Component } from 'react'

import ContentHeader from '../comum/template/content/contentHeader'
import Content from '../comum/template/content/content'
import Row from '../comum/layout/row'
import LeafletMap from '../mapas/leaflet/leaflet-map'
import LeafletPolygon from '../mapas/leaflet/leaflet-polygon'


export default class Leaflet extends Component {

   
    render() {
        return (
            <div>
                <ContentHeader title="Leaflet" small="1.3.1"/>
                <Content>
                    <Row>
                        <LeafletMap>
                            <LeafletPolygon></LeafletPolygon>
                        </LeafletMap>
                    </Row>                    
                </Content>
            </div>)
    }
}

//https://github.com/Esri/react-redux-js4/tree/master/src
//https://github.com/clhenrick/React-Leaflet-demo/blob/master/src/Map.js