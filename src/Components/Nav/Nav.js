import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { withRouter } from 'react-router-dom'


class Nav extends Component {


    render() {
        if (this.props.location.pathname === '/') {
            return null
        }
        return (
            <div>Nav
                <Link to='/dashboard'>
                    <h1>Home</h1>
                </Link>
                <Link to='/post/:postid'>
                    <h1>New Post</h1>
                </Link>
                <Link to='/'>
                    <h1>Logout</h1>
                </Link>
            </div>
        )
    }
}

export default withRouter(Nav)