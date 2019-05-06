import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Auth from './Components/Auth/Auth'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
// import Nav from './Components/Nav/Nav'
import Post from './Components/Post/Post'

export default (
    <HashRouter>
        <Switch>
            <Route path='/' component={Auth} exact />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/post/:postid' component={Post} />
            <Route path='/new' component={Form} />
        </Switch>
    </HashRouter>
)