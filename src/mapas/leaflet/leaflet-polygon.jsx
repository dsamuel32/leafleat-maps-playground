import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addPolygon } from './leaflet-action'

class LeafletPolygon extends Component {

    componentWillMount () {
        this.props.addPolygon(this.props)
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
const mapDispatchToProps = dispatch => bindActionCreators({ addPolygon }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (LeafletPolygon)