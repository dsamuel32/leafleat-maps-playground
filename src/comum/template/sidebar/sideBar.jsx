import React, { Component } from 'react'

import Menu from '../menu/menu'

class NavBar extends Component {

    render() {
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <Menu/>
                </section>
            </aside>
        )
    }
}

export default NavBar