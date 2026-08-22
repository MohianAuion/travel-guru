import React, { use } from 'react';
import logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router';
import { FaSearch } from 'react-icons/fa';
import AuthContext from '../../Context/AuthContext';
import './Navbar.css'

const Navbar = ({light=false}) => {

  const{user, logOut}=use(AuthContext);
 

    const links=<div className={`flex gap-10 font-medium ${light? 'text-black' : 'text-white'}`}>
        <li className='hover:font-bold'><Link to='/'>Home</Link></li>
        <li className='hover:font-bold'><NavLink to='/destinations'>Destinations</NavLink></li>
        <li className='hover:font-bold'><NavLink to='/about'>About Us</NavLink></li>
        <li className='hover:font-bold'><NavLink to='/contact'>Contact</NavLink></li>
    </div>

    // handle logout
    const handleLogOut=()=>{
      logOut()
      .then(result=>{
        console.log(result.user);
      })
      .catch(error=>{
        console.log(error.message);
      })
    }
    return (
        <div className="max-w-10/12 mx-auto rounded-md">
  <div className="collapse-title navbar flex justify-between pt-5 ">
    {/* first div */}
    <div >
      <img className={`w-34 ${light?'':'brightness-0 invert'}`} src={logo} alt="" />
    </div>

{/* 2nd div */}
   <div className='flex items-center gap-10'>

    {/* search */}
   <div>
     {
      light?<div></div> : <div className='relative'>
      <input type="text" placeholder="Search Your Destination" className="input pr-16 pl-9 w-64 lg:w-auto text-white font-semibold bg-gray-300/50" />
      <span className='absolute text-white top-3 right-63'><FaSearch></FaSearch></span>
    </div>
    }

   </div>
{/* links */}
   
   <div>
       <ul>
        {
            links
        }
      </ul>
   </div>
  

     {/* button */}
    <div>
       {
        user? <Link onClick={handleLogOut} to='/auth' className='btn btn-warning ml-7'>LogOut</Link>: <Link to='/auth' className='btn btn-warning ml-7'>LogIn</Link>
      }
    </div>
   </div>
    
  </div>
</div>
    );
};

export default Navbar;