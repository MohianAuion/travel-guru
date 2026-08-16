import React, { use } from 'react';
import logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router';
import { FaSearch } from 'react-icons/fa';
import AuthContext from '../../Context/AuthContext';

const Navbar = ({light=false}) => {

  const{user, logOut}=use(AuthContext);

    const links=<div className={`flex gap-7 font-medium ${light? 'text-black' : 'text-white'}`}>
        <li><NavLink>News</NavLink></li>
        <li><NavLink>Destination</NavLink></li>
        <li><NavLink>Blog</NavLink></li>
        <li><NavLink>Contact</NavLink></li>
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
    <div >
      <img className={`w-34 ${light?'':'brightness-0 invert'}`} src={logo} alt="" />
    </div>

   <div className='flex items-center gap-10 '>

    {/* search */}
    {
      light?<div></div> : <div className='relative'>
      <input type="text" placeholder="Search Your Destination" className="input pr-16 pl-9 w-64 lg:w-auto text-white font-semibold bg-gray-300/50" />
      <span className='absolute text-white top-3 right-63'><FaSearch></FaSearch></span>
    </div>
    }

{/* links */}
    <div className=''>
      <ul className="menu menu-horizontal px-1 ">
        {
            links
        }
      </ul>
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