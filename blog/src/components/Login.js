import React from 'react'

function Login(props) {
    return (
        <div>
            <h2>Already registered?</h2>
            <form onSubmit={ props.handleUserLogin }>
                Username <input type="text" value={ props.username }
                onChange={ (e) => props.setUsername(e.target.value) } />
                Password <input type="password" value={ props.password }
                onChange={ (e) => props.setPassword(e.target.value) } />
            </form>
        </div>
    );
};

export default Login
