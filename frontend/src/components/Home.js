import React from 'react';
import { useHistory } from 'react-router-dom';
import Home from './Home.css';

function Home() {
    const history = useHistory();

    const handleLogin = () => {
        // Navigate to the login route
        history.push('/login');
    };

    const handleGuest = () => {
        // Navigate to the guest route (bypassing login)
        history.push('/guest');
    };

    return (
        <div className="home-page">
            <h1>Welcome to the Memory Card Game</h1>
            <button onClick={handleLogin}>Log In</button>
            <button onClick={handleGuest}>Play as Guest</button>
        </div>
    );
}

export default Home;
