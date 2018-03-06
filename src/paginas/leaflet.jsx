import React, { Component } from 'react'

import ContentHeader from '../comum/template/content/contentHeader'
import Content from '../comum/template/content/content'
import Row from '../comum/layout/row'
import LeafletMap from '../mapas/leaflet/leaflet-map'
import LeafletPolygon from '../mapas/leaflet/leaflet-polygon'
import LeafletLine from '../mapas/leaflet/leaflet-line'
import LeafletCircle from '../mapas/leaflet/leaflet-circle'
import LeafletRectangle from '../mapas/leaflet/leaflet-rectangle'
import LeafletMarker from '../mapas/leaflet/leaflet-marker'
import LeafletCircleMarker from '../mapas/leaflet/leafleat-circle-marker'


export default class Leaflet extends Component {

   
    render() {
        return (
            <div>
                <ContentHeader title="Leaflet" small="1.3.1"/>
                <Content>
                    <Row>
                        <LeafletMap>
                            <LeafletPolygon></LeafletPolygon>
                            <LeafletLine></LeafletLine>
                            <LeafletCircle></LeafletCircle>
                            <LeafletRectangle></LeafletRectangle>
                            <LeafletMarker></LeafletMarker>
                            <LeafletCircleMarker></LeafletCircleMarker>
                        </LeafletMap>
                    </Row>                    
                </Content>
            </div>)
    }
}

//https://github.com/Esri/react-redux-js4/tree/master/src
//https://github.com/clhenrick/React-Leaflet-demo/blob/master/src/Map.js