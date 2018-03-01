import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addPolygon } from './leaflet-action'

class LeafletPolygon extends Component {

    componentWillMount () {
        let options = {
                        polygon: true
                      }
        this.props.addPolygon(options)
    }

    render () {
        return (
            <div></div>
        )
    }

}
/*
const mapStateToProps = state => (
    {
        map: state.leaflet.map, 
        drawControl: state.leaflet.drawControl,
        drawControls: state.leaflet.drawControls
    })*/
const mapDispatchToProps = dispatch => bindActionCreators({ addPolygon }, dispatch)

export default connect(null, mapDispatchToProps) (LeafletPolygon)