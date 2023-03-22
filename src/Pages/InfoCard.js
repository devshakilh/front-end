import React from 'react';
import clock from '../assets/icons/clock.svg'
import marker from '../assets/icons/marker.svg'
import phone from '../assets/icons/phone.svg'
import InfoCards from './InfoCards';
const InfoCard = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 am so 5.00pm everyday',
            icon: clock,
            bg: 'bg-primary'
        },
        {
            id: 2,
            name: 'Our Location',
            description: 'Open 9.00 am so 5.00pm everyday',
            icon: marker,
            bg: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contacts Us',
            description: 'Open 9.00 am so 5.00pm everyday',
            icon: phone,
            bg: 'bg-primary'
        },
    ]
    return (
        <div className='grid text-white pt-4 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData.map(card => <InfoCards
                    key={card.id}
                    card={card}
                ></InfoCards>)
            }
        </div>
    );
};

export default InfoCard;