import React from 'react';
import chair from '../assets/images/chair.png'
const Banner = () => {
    return (

        <div className="hero my-10  bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt='' className="lg:w-1/2 rounded-lg shadow-2xl" />
                <div className='lg:w-1/2 '>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6 text-[18px]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-second
                    ary text-white">Get Started</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;