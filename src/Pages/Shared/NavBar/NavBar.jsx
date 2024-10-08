import React, { useContext } from "react";
import logo from '../../../assets/logo.svg'
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import "./NavBar.css"
import { AuthContext } from "../../../Providers/AuthProvider";



const NavBar = () => {

   const {user,logOut} = useContext(AuthContext);
   const handleLogOut = () => {
        logOut()
        .then(res => {
          console.log(res)
        })
           
   }
    const navItems = <>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/service'}>Service</NavLink></li>
    <li><NavLink to={'/about'}>About</NavLink></li>
    <li><NavLink to={'/contact'}>Contact</NavLink></li> 
    {
      user?.email?<><li><Link onClick={handleLogOut}>Log Out</Link></li> <li><NavLink to={'/bookings'}>Bookings</NavLink></li> </> : <><li><NavLink to={'/Login'}>Login</NavLink></li> 
      <li><NavLink to={'/signUp'}>Sign Up</NavLink></li></>
    }
    

    
    </>
  return (
    <div className="navbar bg-base-100 py-4 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <Link className="text-xl">
        <img className="w-14" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu font-semibold menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center gap-3">
            <div className="text-xl flex gap-1 ">
            <IoBagHandleOutline />
            <CiSearch />

            </div>
            <button className="btn outline outline-1 outline-[#FF3811] text-[#FF3811] bg-white hover:bg-[rgb(255,56,17)] hover:outline-none hover:text-white ">Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
