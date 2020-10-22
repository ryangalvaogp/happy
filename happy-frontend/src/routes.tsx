import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'

import landing    from './pages/lading'
import orphanageMap from './pages/OrphanageMap'
export default function Routes(){
    return(

        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={landing}/>
                <Route path="/app" component={orphanageMap}/>
            </Switch>
         
        </BrowserRouter>
    )
}