import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addCircle } from './leaflet-action'

class LeafletCircle extends Component {

    componentWillMount () {
        this.props.addCircle(this.props)
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
const mapDispatchToProps = dispatch => bindActionCreators({ addCircle }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (LeafletCircle)