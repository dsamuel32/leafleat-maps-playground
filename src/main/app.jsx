import React from 'react'

import Template from '../comum/template/template'
import '../comum/template/dependencies'

export default props => (
        <Template className="content-wrapper">
            {props.children}
        </Template>
)

//https://stackoverflow.com/questions/44982412/how-do-i-check-for-token-expiration-and-logout-user