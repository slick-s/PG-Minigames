import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MemoryCard from './components/pages/MemoryCard'; 
import Home from './components/pages/Home';
import Login from './components/pages/Login';

function App() {
    const [gameStarted, setGameStarted] = useState(false);
    const [userType, setUserType] = useState(null); // 'guest' or 'login'

    const startGameAsGuest = () => {
        setUserType('guest');
        setGameStarted(true);
    };

    const login = () => {
        setUserType('login');
        setGameStarted(true);
    }

    return (
        <Routes>
            <Route path="/" element={<Home onStartAsGuest={startGameAsGuest} onLogin={login} />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/game" element={<MemoryCard userType={userType} />} />
        </Routes>
    );
}

export default App;
