import React from 'react';
import Image from '../assets/Creativise Logo SVG 2.png'
import {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {IoCloseCircleOutline} from 'react-icons/io5';
import { Link } from 'react-router-dom';




const Navbar = () => {
     const [isOpen, setIsOpen] = useState(false)

    const toggleNav = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='p-5 mx-2 font-body'>
            <nav className='flex items-center justify-between'>
                <img src={Image} alt='logo' className='h-[61px] w-[180px]'></img>
                <ul className='hidden md:flex gap-[40px] font-semibold text-lg text-slate-500  '>
                    <Link to ='/'>
                    <li className='hover:text-indigo-700'>Home</li>

                    </Link>
                    <Link to='/products'>
                    <li className='hover:text-indigo-700'>Products</li>

                    </Link>
                    <Link to='/about'>
                    <li className='hover:text-indigo-700'>About Us</li> 

                    </Link>
                    <Link to='/blogs'>
                    <li className='hover:text-indigo-700'>Blogs</li>

                    </Link>


                </ul>
                <div className='text-xl flex gap-4 items-center'>
                    <Link to='/login'>
                         <button className='hidden md:flex rounded-md bg-slate-300 p-3 text-indigo-700'>Login</button>

                    </Link>
                    <div className='hidden md:flex w-2 h-2 rounded-full bg-indigo-700'></div>
                    <Link to='/signin'>
                        <button className='hidden md:flex border border-indigo-700 p-3 text-indigo-700 rounded-md'>Sign Up</button>

                    </Link>
                </div>
                <div className='md:hidden text-indigo-700 text-3xl flex items-center' onClick={toggleNav}>
                {!isOpen ? <GiHamburgerMenu/> : <IoCloseCircleOutline/> }
            </div>
            </nav>
            <ul className={!isOpen ? 'hidden' : ' bg-slate-300 w-full rounded-2xl  p-8 text-2xl font-body text-center'}>
                <Link to='/'>
                <li className='hover:text-indigo-700 border-b-2 border-gray-600 p-4 w-full text-indigo-700 font-bold'>Home</li>

                </Link>
                <Link to='/products'>
                <li className='hover:text-indigo-700 border-b-2 border-gray-600 p-4 w-full text-indigo-700 font-bold'>Products</li>

                </Link>
                <Link to='/about'>
                <li className='hover:text-indigo-700 border-b-2 border-gray-600 p-4 w-full text-indigo-700 font-bold'>About Us</li>

                </Link>
                <Link to='/blogs'>
                <li className='hover:text-indigo-700 border-b-2 border-gray-600 p-4 w-full text-indigo-700 font-bold'>Blogs</li>

                </Link>
                <div className='flex items-center flex-col'>
                    <Link to='/login'>
                    <button className=' rounded-md bg-indigo-600 p-3 text-white mt-4'>Login</button>

                    </Link>
                    <Link to='/signin'>
                    <button className=' rounded-md bg-indigo-600 p-3 text-white mt-4'>Sign Up</button>

                    </Link>
                </div>


            </ul>
    
            
        </div>
    );
};

export default Navbar;