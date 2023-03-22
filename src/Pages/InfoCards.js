import React from 'react';

const InfoCards = ({ card }) => {
    const { name, description, icon, bg } = card;
    return (
        <div className={`card card-side shadow-xl p-6  ${bg}`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>

            </div>
        </div>
    );
};

export default InfoCards;