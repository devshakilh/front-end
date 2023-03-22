import React from 'react';
import Users from '../data-Users/Users';
import Banner from './Banner';
import InfoCard from './InfoCard';
import Service from './Service';


const Home = () => {
    return (
        <div className='mx-5'>

            <Banner></Banner>
            <InfoCard></InfoCard>
            <Service></Service>

        </div>
    );
};

export default Home;