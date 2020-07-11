import React from 'react'
import {Route, Switch, Link} from 'react-router-dom'

import App from '../../App'
import Body from '../../Body'
import history from './History'



const Root = () => {
    return(
        <div>
            {/* <ul>
          <li><Link to="/">App</Link></li>
          <li><Link to="/Tracker">Tracker</Link></li>
        </ul> */}
            <Switch>
            <Route component={App} path="/" exact/>
            <Route component={Body} path="/Tracker"/>
            </Switch>
        </div>
    )
}
export default Root