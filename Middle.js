import React from 'react';
import {FaLongArrowAltRight} from 'react-icons/fa';
import Image1 from '../assets/MacBook Pro 16_ - new light mode 1.png'



const Middle = () => {
    return (
        <div className='mt-[15vh] flex flex-col md:flex-row '>
            <div className='font-body text-indigo-600 gap-3 p-[13vh] '>
                <h1 className='text-[40px] font-semibold  tracking-tighter leading-10'>Unleash your creativity in your curative zone !</h1>
                <p className='text-md mt-6  text-start'>Whether you're a creative enthusiast or a professional designer, Creativise zone is the first browser based design tool that allows to create stunning graphics with more user friendly experience. It has the power of stitching your .psd (Photoshop) and .ai (Illustrator) files with intuitive features to meet all your design needs. This tool prioritizes user-friendliness and aims to provide a seamless and enjoyable design experience like never before.</p>
                <button className="flex items-center gap-4 font-semibold text-xl justify-start mt-3 hover:text-black">Explore Now <FaLongArrowAltRight className='text-3xl hover:text-black ' /> </button>
                
                 

            </div>
            <div>
                <div className='flex '>
                    <img className='h-[662px] w-[700vh] ' src={Image1} alt='img'></img>
         
            
                </div>
            </div>
           

        </div>
    );
};

export default Middle;