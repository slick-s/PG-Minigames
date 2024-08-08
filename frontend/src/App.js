import React, { useEffect, useState } from 'react';
import'./App.css';

function App() {
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState({});

    useEffect(()=> {
      fetch('http://localhost:5000/api/start', {method:'POST'})
        .then(response => response.json())
        .then(data=> setCards(data))
        .catch(error => console.error('Error starting game:', error));
    },[]);

    const handleCardClick = (id) => {
      setFlippedCards(prevState => ({
        ...prevState,
        [id]:!prevState[id]
      }));
    };

    return (
      <div>
          <h1>Memory Card Game</h1>
          <div className="card-grid">
              {cards.map(card => (
                  <div
                      key={card.id}
                      className={`card ${flippedCards[card.id] ? 'flipped' : ''}`}
                      onClick={() => handleCardClick(card.id)}
                  >
                      <div className="card-inner">
                          <div className="card-front">
                              <img src={`http://localhost:5000/images/${card.front_image}`} alt={card.name} />
                          </div>
                          <div className="card-back">
                              <img src={`http://localhost:5000/images/${card.back_image}`} alt="Card Back" />
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
}

export default App;

