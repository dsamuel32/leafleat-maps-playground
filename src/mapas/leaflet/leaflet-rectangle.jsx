import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addRectangle } from './leaflet-action'

class LeafletRectangle extends Component {

    componentWillMount () {
        this.props.addRectangle(this.props)
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
const mapDispatchToProps = dispatch => bindActionCreators({ addRectangle }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (LeafletRectangle)