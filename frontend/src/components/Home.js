import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home({ onStartAsGuest, onLogin }) {
    const navigate = useNavigate();

    const handleGuestClick = () => {
        onStartAsGuest();
        navigate('/game'); // Navigate to the game page if necessary
    };

    const handleLoginClick = () => {
        onLogin();
        navigate('/game'); // Navigate to the game page if necessary
    };

    return (
        <div>
            <button onClick={handleGuestClick}>Play as Guest</button>
            <button onClick={handleLoginClick}>Login</button>
        </div>
    );
}

export default Home;

