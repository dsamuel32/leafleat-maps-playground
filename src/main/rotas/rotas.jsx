import React from 'react'
import { Switch, Route, HashRouter, Redirect } from 'react-router-dom'

import App from '../app'
import Leaflet from '../../paginas/leaflet'
import Teste2 from '../../paginas/teste2'

export default props => (
    <HashRouter>
        <App>
            <Switch>
                <Route exact path='/' component={Leaflet}/>
                <Route path='/arcgis' component={Leaflet}/>
                <Route path='/teste2' component={Teste2}/>
                <Redirect from="*" to="/" />
            </Switch>
        </App>
    </HashRouter>
   
)

/*
<HashRouter>
        <Switch>
            <Route path='/login' component={Login}/>
            <Redirect from="*" to="/login" />
        </Switch>
    </HashRouter>
*/