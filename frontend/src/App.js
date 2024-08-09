import React from 'react';
import MemoryGame from './components/MemoryGame'; 
import Home from './components/Home';

function App() {
    const [gameStarted, setGameStarted] = useState(false);
    const [userType, setUserType] = useState(null); // 'guest' or 'login'

    const startGameAsGuest = () =>{
        setUserType('guest');
        setGameStarted(true);
    };

    const login = ()=>{
        setUserType('login');
        setGameStarted(true);
    }

    if(!gameStarted){
        return(
            <Home onStartAsGuest= {startGameAsGuest} onLogin={login}/>
        );
    }

    return (
        <div>
            <MemoryGame userType={userType}/>
        </div>
    );
}

export default App;
