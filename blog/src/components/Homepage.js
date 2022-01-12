import React from 'react';
import Register from './Register';
import Login from './Login';
import '../App.css';

function Homepage(props) {
    return (
        <div className="homepage">
            <Register className="formbox" props={ props.registerProps } />
            <Login props={ props.loginProps } />
        </div>
    )
}

export default Homepage
