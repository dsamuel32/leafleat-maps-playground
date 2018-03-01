import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addPolyline } from './leaflet-action'

class LeafLetLine extends Component {

    componentWillMount () {
        this.props.addPolyline(this.props)
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
const mapDispatchToProps = dispatch => bindActionCreators({ addPolyline }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (LeafLetLine)