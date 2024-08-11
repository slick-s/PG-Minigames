import React, { useState } from 'react';
import './Login.css';


function Login(){
     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');

     const handleLogin = (e) => {
        e.preventDefault();
        //Need to add the logic 

        console.log('Login information', {username, password});
     };

     return(
        <div className="body">
            <div className="styles">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div>
                        <label>Username:</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
     );
}

export default Login;