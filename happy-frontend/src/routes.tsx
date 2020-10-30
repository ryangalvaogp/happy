import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'

import landing    from './pages/lading'
import orphanageMap from './pages/OrphanageMap'


import createOrphanage from './pages/CreateOrphanage'


import orphanage from './pages/Orphanage'


export default function Routes(){
    return(

        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={landing}/>
                <Route path="/app" component={orphanageMap}/>
                
                <Route  path="/orphanages/details/:id" component={orphanage}/>
                <Route path="/orphanages/create" component={createOrphanage}/>
            
            </Switch>
         
        </BrowserRouter>
    )
}