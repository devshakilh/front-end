import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import './DashBoard.css'
import navImg from '../assets/Group 5.png'
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .catch(err => console.log(err));
    }

    const menuItems = <React.Fragment>
        <li><Link to='/'>Home</Link></li>

        {user?.uid ?
            <>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><button onClick={handleLogOut}>Sign Out</button></li>
            </>

            : <li><Link to='/login'>Login</Link></li>
        }
    </React.Fragment>
    return (
        <div>
            <div className="navbar   text-[#323B4B] font-bold">
                <div className="flex-1">
                    <Link to='/' className="">  <img src={navImg} className='navImg' alt="" /></Link>
                </div>

                <div className="flex-none bg-zinc-600 gap-2">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-600 rounded-box w-32">

                            {menuItems}

                        </ul>
                    </div>


                </div>
                <div className="navbar-center pt-4  hidden lg:flex">
                    <ul className="menu  menu-horizontal p-0">

                        {menuItems}
                    </ul>
                </div>

                <div className="dropdown dropdown-end pt-4">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 bg-zinc-600 p-2 shadow menu menu-compact dropdown-content  rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>

                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Navbar;