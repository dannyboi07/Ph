import React from 'react';
// import '../App.css';

// const styles = {
//     formbox: {
//         display: "flex",
//         flexDirection: "column",
//     },
// }

function Register(props) {
    console.log(props);
    return (
        <div style={{ border: "1px solid" }}>
            <h2>Register as a user</h2>
            <form   onSubmit={ props.handleUserRegister }>
                Name <input type="text" value={ props.name } 
                onChange={ (e) => props.setName(e.target.value) } />

                Username <input type="text" value={ props.username } 
                onChange={ (e) => props.setUsername(e.target.value) } />

                Password <input type="password" value={ props.password }
                onChange={ (e) => props.setPassword(e.target.value) } />
            </form>
        </div>
    )
}

export default Register;