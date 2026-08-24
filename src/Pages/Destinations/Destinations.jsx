import React from 'react';
import banner from '../../assets/banner.png';
import coxsBazarImg from '../../assets/Rectangle 1.png';
import sajekImg from '../../assets/Sajek.png';
import sreemongol from '../../assets/Sreemongol.png';
import sylhet from '../../assets/sylhet.png';
import bandarban from '../../assets/bandarban.png';
import shundorban from '../../assets/sundorbon.png';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { TbLocationCheck } from 'react-icons/tb';

const Destinations = () => {
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
<h2 className='text-2xl font-medium text-mist-500'>Top Destinations in Bangladesh</h2>
</div>
{/* images */}
<div className='grid grid-cols-3 px-10 gap-7 mb-18'>

    {/* cox's bazar */}
<div className='relative  w-100 h-120 '>
    <img src={coxsBazarImg} className='w-full h-full rounded-xl object-cover' alt="" />
    <div className='absolute top-80 left-7 space-y-1'>
        <h1 className='text-white text-3xl font-semibold'>SeaBeech</h1>
        <h2 className='text-white text-xl flex items-center gap-1 font-medium'><TbLocationCheck className='text-yellow-300'></TbLocationCheck> <span>Cox's Bazar</span></h2>
        <button className='btn hover:btn-warning'>Booking</button>
    </div>
</div>
{/* sreemongol */}
<div className='w-100 h-120'>
    <img src={sreemongol} className='w-full h-full rounded-xl  object-cover' alt="" />
</div>

{/* sajek */}
<div className='w-100 h-120'>
    <img src={sajekImg} className='w-full h-full rounded-xl  object-cover' alt="" />

</div>
{/* sylhet */}
<div className='w-100 h-120'>
    <img src={sylhet} className='w-full h-full rounded-xl  object-cover' alt="" />
</div>
{/* shundorban */}
<div className='w-100 h-120'>
    <img src={shundorban} className='w-full h-full rounded-xl  object-cover' alt="" />
</div>
{/* bandarban */}
<div className='w-100 h-120'>
    <img src={bandarban} className='w-full h-full rounded-xl  object-cover' alt="" />
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