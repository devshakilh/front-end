import React from 'react';

import { Link, NavLink } from 'react-router-dom';
import './DashBoard.css'
import navImg from '../assets/Group 5.png'
import navImg2 from '../assets/Group 6.png'
import navImg3 from '../assets/Group 7.png'
import navImg4 from '../assets/Group 8.png'
import navImg5 from '../assets/Group 10.png'


const DashBoard = ({ users, loading }) => {
    if (loading) {
        return <h1>Loading...</h1>;
    }

    console.log(users)

    return (
        <div>

            <div className='left-side'>

                <Link to='/'> <img src={navImg} className='navImg' alt="" /> </Link>
                <p className='pages'>PAGES</p>

                <>
                    <li className='list-none'>
                        <NavLink to="">
                            <img src={navImg2} className='navImg2' alt="" />

                        </NavLink>
                    </li>
                    <li className='list-none'>
                        <NavLink to="">
                            <img src={navImg3} className='navImg3' alt="" />
                        </NavLink>
                    </li>
                    <li className='list-none'>
                        <NavLink to="">
                            <img src={navImg4} className='navImg4' alt="" />
                        </NavLink>
                    </li>
                </>


            </div>



            <div>
                <input className='searchButtn' placeholder='Search' type="button" value="" />
                <h1 className='userList'>Users List</h1>

                <img src={navImg5} className='navImg5' alt="" />

                <div className='userId'>
                    {users && users.map(user => (
                        <div key={user.id} className='flex justify-between'>
                            <div className='flex gap-8 font-semibold text-[#323B4B] text-[18px]'>
                                <p className='pt-6'>{user.id}</p>
                                <div className='flex gap-4 items-center'>
                                    <div className="avatar py-2">
                                        <div className="w-16 rounded-full">
                                            <img src={user.avatar} className='' alt="" />
                                        </div>
                                    </div>

                                    <h1>{user.first_name}{user.last_name}</h1>
                                </div>
                            </div>
                            <p className='font-semibold text-[#323B4B] text-[18px]'>{user.email}</p>
                            <h1 className='pr-8'>....</h1>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default DashBoard;