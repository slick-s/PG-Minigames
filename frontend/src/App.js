import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState({});
    const [firstCard, setFirstCard] = useState(null);
    const [turns, setTurns] = useState(0);

    useEffect(() => {
        startNewGame();
    }, []);

    const startNewGame = () => {
        fetch('http://localhost:5000/api/new', { method: 'POST' })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const initialState = data.reduce((acc, card) => {
                    acc[card.id] = false; // Initially, all cards are not flipped
                    return acc;
                }, {});
                setCards(data);
                setFlippedCards(initialState);
                setFirstCard(null); // Reset first card
                setTurns(0); // Reset turns counter
            })
            .catch(error => console.error('Error starting new game:', error));
    };

    const handleCardClick = (id) => {
        if (flippedCards[id]) return; // Ignore clicks on already flipped cards
        if (firstCard === null) {
            // First card flip
            setFirstCard(id);
            setFlippedCards(prevState => ({
                ...prevState,
                [id]: true
            }));
        } else {
            // Second card flip
            const secondCard = id;
            setFlippedCards(prevState => ({
                ...prevState,
                [secondCard]: true
            }));

            // Increment the turn counter
            setTurns(turns + 1);

            // Check if the cards match
            const firstCardData = cards.find(card => card.id === firstCard);
            const secondCardData = cards.find(card => card.id === secondCard);

            if (firstCardData.name === secondCardData.name) {
                // Cards match - keep them flipped
                setFirstCard(null);
            } else {
                // Cards do not match - flip them back after a delay
                setTimeout(() => {
                    setFlippedCards(prevState => ({
                        ...prevState,
                        [firstCard]: false,
                        [secondCard]: false
                    }));
                    setFirstCard(null);
                }, 1000); // Delay for the user to see the cards
            }
        }
    };

    return (
        <div>
            <h1>Memory Card Game</h1>
            <h2>Turns: {turns}</h2>
            <button onClick={startNewGame}>New Game</button>
            <div className="card-grid">
                {cards.map(card => (
                    <div
                        key={card.id}
                        className={`card ${flippedCards[card.id] ? 'flipped' : ''}`}
                        onClick={() => handleCardClick(card.id)}
                    >
                        <div className="card-inner">
                            <div className="card-front">
                                <img src={`http://localhost:5000/img/${card.front_image}`} alt={card.name} />
                            </div>
                            <div className="card-back">
                                <img src={`http://localhost:5000/img/${card.back_image}`} alt="Card Back" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
