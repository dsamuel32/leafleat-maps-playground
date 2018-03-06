import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addMarker } from './leaflet-action'

class LeafletMarker extends Component {

    componentWillMount () {
        this.props.addMarker(this.props)
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
const mapDispatchToProps = dispatch => bindActionCreators({ addMarker }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (LeafletMarker)