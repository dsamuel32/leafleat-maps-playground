import React, { Component } from 'react'

import Header from './header/header'
import SideBar from './sidebar/sideBar'
import Footer from './footer/footer'
import Messages from '../msg/messages'

class Template extends Component {
    render () {
        return (
            <div className="wrapper">
                <Header/>
                <SideBar />
                <div className="content-wrapper max-size">
                    {this.props.children}
                </div>
                <Footer/>
                <Messages/>
            </div>
        )
    }
}

export default Template