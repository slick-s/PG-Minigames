import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Home.css';
import Login from './Login';

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

        <div className="home-page">
            <header>
                <h1>Welcome to a set of Minigames for you to enjoy!</h1>
            </header>

            <h2>Please log in if you want to restore your previous game.</h2>

            <button onClick={handleGuestClick}>Play as Guest</button>
            <Link to ="/Login"><button>Login</button></Link>
        </div>
    );
}

export default Home;

