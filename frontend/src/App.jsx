import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);

  useEffect(() => {
    axios.post('http://localhost:5000/start-game')
      .then(response => {
        setCards(response.data.cards);
        setFlipped(response.data.flipped);
      });
  }, []);

  const flipCard = (index) => {
    axios.post('http://localhost:5000/flip-card', { index })
      .then(response => {
        setFlipped(response.data.flipped);
      });
  };

  return (
    <div>
      <h1>Memory Card Game</h1>
      <div className="board">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${flipped.includes(index) ? 'flipped' : ''}`}
            onClick={() => flipCard(index)}
          >
            {flipped.includes(index) ? card : 'X'}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
