// src/Card.js
import React from 'react';
import './Card.css'; // If you have specific styles for the card

const Card = ({ id, frontImage, backImage, isFlipped, onClick }) => {
    return (
        <div
            key={id}
            className={`card ${isFlipped ? 'flipped' : ''}`}
            onClick={() => onClick(id)}
        >
            <div className="card-inner">
                <div className="card-front">
                    <img src={`http://localhost:5000/img/${frontImage}`} alt={`Front of ${id}`} />
                </div>
                <div className="card-back">
                    <img src={`http://localhost:5000/img/${backImage}`} alt="Card Back" />
                </div>
            </div>
        </div>
    );
};

export default Card;
