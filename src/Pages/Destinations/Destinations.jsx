import React, { use } from 'react';
import banner from '../../assets/banner.png';
import coxsBazarImg from '../../assets/Rectangle 1.png';
import sajekImg from '../../assets/Sajek.png';
import sreemongol from '../../assets/Sreemongol.png';
import sylhet from '../../assets/sylhet.png';
import bandarban from '../../assets/bandarban.png';
import shundorban from '../../assets/sundorbon.png';
import khoiyachori from '../../assets/khoiachorajhorna.png';
import saathgombuj from '../../assets/shaatgombujMasjid.png';
import kaptaiLake from '../../assets/kaptaiLake.png';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { FaArrowRight } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router';
import AuthContext from '../../Context/AuthContext';

const Destinations = () => {
    const{user}=use(AuthContext);
    const location=useLocation();
    console.log(location);

    return (
        <div className=''>
          <header>
            {/* navbar */}
            <Navbar light></Navbar>
            {/* banner */}
            <div>
                <img src={banner} className='w-full h-90 object-cover'  alt="" />
            </div>
          </header>
          <main className='w-10/12 mx-auto'>
            {/* text */}
<div className='text-center space-y-2 mt-16 mb-14'>
    <h2 className='text-lg text-yellow-400 font-bold'>
    Explore Destinations
</h2>
<h1 className='text-5xl font-bold'>Find Your Next Adventure</h1>
<h2 className='text-2xl font-medium text-gray-500'>Top Destinations in Bangladesh</h2>
</div>
{/* images */}
<div className='grid grid-cols-3 px-10 gap-7 mb-18'>

    {/* cox's bazar */}
<div className='relative  w-100 h-120 '>
    <img src={coxsBazarImg} className='w-full h-full rounded-xl object-cover' alt=" cox's bazar image" />
    <div className='absolute top-70 left-8 space-y-2 bg-gray-500/30 p-5 rounded-lg'>
        <h1 className='text-white text-3xl font-semibold'>Sea Beach</h1>
        <h2 className='text-white text-xl flex items-center gap-1 font-medium'><FaLocationDot className='text-yellow-400'></FaLocationDot><span >Cox's Bazar</span></h2>
        <Link to='/booking' className='btn hover:btn-warning mt-2'>
        Book Now<FaArrowRight></FaArrowRight>
        </Link>
        
    </div>
</div>
{/* sreemongol */}
<div className='w-100 h-120 relative'>
    <img src={sreemongol} className='w-full h-full rounded-xl  object-cover' alt="sreemongol image" />
     <div className='absolute top-70 left-8 space-y-2 bg-gray-400/30 p-5 rounded-lg'>
        <h1 className='text-white text-3xl font-semibold'>Sreemongol</h1>
        <h2 className='text-white text-xl flex items-center gap-1 font-medium'><FaLocationDot className='text-yellow-400'></FaLocationDot><span >MouloviBazar</span></h2>
        <Link to='/booking' className='btn hover:btn-warning mt-2'>
        Book Now<FaArrowRight></FaArrowRight>
        </Link>
        
    </div>
</div>

{/* sajek valley */}
<div className='w-100 h-120 relative'>
    <img src={sajekImg} className='w-full h-full rounded-xl  object-cover' alt="sajek valley image" />
     <div className='absolute top-70 left-8 space-y-2 bg-gray-500/30 p-5 rounded-lg'>
        <h1 className='text-white text-3xl font-semibold'>Sajek Valley</h1>
        <h2 className='text-white text-xl flex items-center gap-1 font-medium'><FaLocationDot className='text-yellow-400'></FaLocationDot><span >Rangamati</span></h2>
        <Link to='/booking' className='btn hover:btn-warning mt-2'>
        Book Now<FaArrowRight></FaArrowRight>
        </Link>
        
    </div>

</div>
{/* shada pathor */}
<div className='w-100 h-120 relative'>
    <img src={sylhet} className='w-full h-full rounded-xl  object-cover' alt="shada pathor image" />
    
    <div className='absolute top-70 left-8 space-y-2 bg-gray-500/30 p-5 rounded-lg'>
        <h1 className='text-white text-3xl font-semibold'>Shada Pathor</h1>
        <h2 className='text-white text-xl flex items-center gap-1 font-medium'><FaLocationDot className='text-yellow-400'></FaLocationDot><span >Sylhet</span></h2>
        <Link to='/booking' className='btn hover:btn-warning mt-2'>
        Book Now<FaArrowRight></FaArrowRight>
        </Link>
        
    </div>
</div>
{/* shundorban */}
<div className='w-100 h-120 relative'>
    <img src={shundorban} className='w-full h-full rounded-xl  object-cover' alt="shundorban image" />

    <div className='absolute top-70 left-8 space-y-2 bg-gray-500/30 p-5 rounded-lg'>
        <h1 className='text-white text-3xl font-semibold'>Shundarban</h1>
        <h2 className='text-white text-xl flex items-center gap-1 font-medium'><FaLocationDot className='text-yellow-400'></FaLocationDot><span >Khulna</span></h2>
        <Link to='/booking' className='btn hover:btn-warning mt-2'>
        Book Now<FaArrowRight></FaArrowRight>
        </Link>
        
    </div>


</div>
{/* debotakunda */}
<div className='w-100 h-120 relative'>
    <img src={bandarban} className='w-full h-full rounded-xl  object-cover' alt="debotakunda image" />

    <div className='absolute top-70 left-8 space-y-2 bg-gray-500/30 p-5 rounded-lg'>
        <h1 className='text-white text-3xl font-semibold'>Debotakunda</h1>
        <h2 className='text-white text-xl flex items-center gap-1 font-medium'><FaLocationDot className='text-yellow-400'></FaLocationDot><span >Bandarban</span></h2>
        <Link to='/booking' className='btn hover:btn-warning mt-2'>
        Book Now<FaArrowRight></FaArrowRight>
        </Link>
        
    </div>
</div>

{/* khoiyachori */}
<div className='w-100 h-120 relative'>
    <img src={khoiyachori} className='w-full h-full rounded-xl  object-cover' alt="khoiyachori waterfall image" />

    <div className='absolute top-70 left-8 space-y-2 bg-gray-500/30 p-5 rounded-lg'>
        <h1 className='text-white text-3xl font-semibold'>Khoiyachora</h1>
        <h2 className='text-white text-xl flex items-center gap-1 font-medium'><FaLocationDot className='text-yellow-400'></FaLocationDot><span >Chattogram</span></h2>
        <Link to='/booking' className='btn hover:btn-warning mt-2'>
        Book Now<FaArrowRight></FaArrowRight>
        </Link>
        
    </div>
</div>

{/* sathgombuj masjid */}
<div className='w-100 h-120 relative'>
    <img src={saathgombuj} className='w-full h-full rounded-xl  object-cover' alt="sat masjid image" />

    <div className='absolute top-70 left-8 space-y-2 bg-gray-500/30 p-5 rounded-lg'>
        <h1 className='text-white text-3xl font-semibold'>Sat Gombuj</h1>
        <h2 className='text-white text-xl flex items-center gap-1 font-medium'><FaLocationDot className='text-yellow-400'></FaLocationDot><span >Bagerhat</span></h2>
        <Link to='/booking' className='btn hover:btn-warning mt-2'>
        Book Now<FaArrowRight></FaArrowRight>
        </Link>
        
    </div>
</div>

{/* kaptai lake */}

<div className='w-100 h-120 relative'>
    <img src={kaptaiLake} className='w-full h-full rounded-xl  object-cover' alt="kaptai lake image" />

    <div className='absolute top-70 left-8 space-y-2 bg-gray-500/30 p-5 rounded-lg'>
        <h1 className='text-white text-3xl font-semibold'>Kaptai Lake</h1>
        <h2 className='text-white text-xl flex items-center gap-1 font-medium'><FaLocationDot className='text-yellow-400'></FaLocationDot><span ></span>Rangamati</h2>
        <Link to='/booking' className='btn hover:btn-warning mt-2'>
        Book Now<FaArrowRight></FaArrowRight>
        </Link>
        
    </div>
</div>
</div>
          </main>
          <footer>
            <Footer></Footer>
          </footer>
        </div>
    );
};

export default Destinations;