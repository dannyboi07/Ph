import { useState, useEffect } from 'react';
import './App.css';
import Homepage from './components/Homepage';

function App() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  function handleUserRegister() {

  };

  function handleUserLogin() {

  };

  return (
    <div className="App">
      <h2>Blog App</h2>
      { true && <Homepage registerProps={ { className: "formbox", handleUserRegister: handleUserRegister, name: name, 
      setName: setName, username: username, setUsername: setUsername, password: password, 
      setPassword: setPassword } } 
      loginProps={ { handleUserLogin: handleUserLogin, username: username, setUsername: setUsername,
      password: password, setPassword: setPassword } } /> }
    </div>
  );
}

export default App;