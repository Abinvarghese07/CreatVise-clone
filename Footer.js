import React from 'react';
import logo from '../assets/Creativise Logo SVG 3.png'
import {IoLogoInstagram} from 'react-icons/io5';
import {FaFacebookF} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import {FaPinterestP} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa6';





const Footer = () => {
    return (
        <div className='bg-indigo-500 font-body'>
        <div className=' flex py-12 flex-col items-center justify-center'>
            <img src={logo} alt='logo' className='w-[200px]'></img>
            <h2 className='text-white text-xl tracking-tight font-semibold'>Empowering Curators, Enriching Perspectives</h2>
        </div>
        <div className='p-9 flex flex-col gap-6 md:flex-row items-center justify-between'>
            <input placeholder='email' className='px-[53px] py-[8px] rounded-[40px]'>

            </input>
            <button className='hidden md:flex text-white bg-indigo-500 relative right-[17vh] rounded-xl p-2 text-xs'>notify me</button>
            <div className='flex ml-[30vh] text-white text-2xl gap-7 mr-[30vh]'>
            <IoLogoInstagram/>
            <FaFacebookF/>
            <FaLinkedinIn/>
            <FaPinterestP/>
            <FaTwitter/>

            
            </div>
            <p className='text-white font-semibold'> &copy; 2023 Creativise, All rights reserved.</p>



        </div>
            
        </div>
    );
};

export default Footer;