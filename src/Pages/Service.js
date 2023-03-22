import React from 'react';
import fluoridy from '../assets/images/fluoride.png'
import cavity from '../assets/images/cavity.png';

import whitening from '../assets/images/whitening.png'
import ServiceCard from './ServiceCard';
const Service = () => {
    const ServiceData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ip',
            img: fluoridy
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ip',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ip',
            img: whitening
        }
    ]
    return (
        <div >
            <div className='text-center pt-16'>
                <h3 className='font-5xl text-primary uppercase'>Our Service</h3>
                <h2 className='text-3xl font-semibold'>Service We Provide</h2>
            </div>
            <div className='grid  pt-4 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    ServiceData.map(service =>
                        <ServiceCard
                            key={service.id}
                            service={service}
                        ></ServiceCard>
                    )
                }
            </div>
        </div>
    );
};

export default Service;