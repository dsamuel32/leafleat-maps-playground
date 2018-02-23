import React, { Component } from 'react'

import Navbar from './navbar'

class Header extends Component {

    render() {
        return (
            <header className="main-header">
                <a href="/#/" className="logo">
                    <span className="logo-mini"><b>Ci</b>Pag</span>
                    <span className="logo-lg">
                        <i className="fa fa-money"></i>
                        <b>Ciclo</b> Pagamento
                    </span>
                </a>
                
                <nav className="navbar navbar-static-top">
                    <a href className="sidebar-toggle" data-toggle="offcanvas"></a>
                   <Navbar/>
                </nav>
            </header>
        )
    }

}

export default Header