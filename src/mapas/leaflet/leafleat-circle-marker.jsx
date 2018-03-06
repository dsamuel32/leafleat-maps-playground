import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addCircleMarker } from './leaflet-action'

class LeafletCircleMarker extends Component {

    componentWillMount () {
        this.props.addCircleMarker(this.props)
    }

    render () {
        return false
    }

}

const mapStateToProps = state => (
    {
        map: state.leaflet.map,
        drawControls: state.leaflet.drawControls
    })
const mapDispatchToProps = dispatch => bindActionCreators({ addCircleMarker }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (LeafletCircleMarker)