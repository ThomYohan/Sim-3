import React, { Component } from 'react'
import axios from 'axios'


export default class Auth extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    


    render() {
        return (
            <div>Auth</div>
        )
    }
}