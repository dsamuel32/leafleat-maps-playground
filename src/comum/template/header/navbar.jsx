import React, { Component } from 'react'

class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state = { open: false }
    }

    changeOpen() {
        this.setState({ open: !this.state.open })
    }

    render() {
        return (
            <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                   
                </ul>
            </div>
        )
    }
}

export default Navbar
