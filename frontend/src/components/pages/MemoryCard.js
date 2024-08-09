import React, { useEffect, useState } from 'react';
import Card from '../Card';
import MemoryCard from './MemoryCard.css';

function MemoryGame() {
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
                    acc[card.id] = false; // All cards should be initially flipped back
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
        if (flippedCards[id] || firstCard === id) return; // Ignore clicks on already flipped cards or clicking the same card twice
    
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
            setTurns(prevTurns => prevTurns + 1);
    
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
                    <Card
                        key={card.id}
                        id={card.id}
                        frontImage={card.front_image}
                        backImage={card.back_image}
                        isFlipped={flippedCards[card.id]}
                        onClick={handleCardClick}
                    />
                ))}
            </div>
        </div>
    );
}

export default MemoryGame;
