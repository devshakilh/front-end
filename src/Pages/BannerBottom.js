import React from 'react';
import treatment from '../assets/images/treatment.png'
const BannerBottom = () => {
    return (
        <div className="hero mx- py-4 ">
            <div className="hero-content flex-col gap-8 lg:flex-row">
                <img src={treatment} alt='' height={400} width={400} className=" rounded-lg  shadow-2xl" />
                <div className=''>
                    <h1 className="text-4xl font-bold">Exceptional Dental <br /> Care, on Your Terms</h1>
                    <p className="py-6 font-semibold">It is a long established by the <br /> readable content of a page when looking at its layout. The point <br /> of using Lorem Ipsumis that it has a more-or-less normal <br /> distribution of letters,ased to using 'Cd fact that a reader will be distracteontent <br /> here, content here', making it look like readable English. Many desktop <br /> publishins oppog packages and web page</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default BannerBottom;


