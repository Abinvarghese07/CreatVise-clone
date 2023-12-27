import React from 'react';
import Square from '../assets/Group 699.png'
import Vector from '../assets/Vector 88.png'
import Group from '../assets/Group 701.png'
import Squares from '../assets/Group 700.png'


const Lastpage = () => {
    return (
        <div className='flex flex-col mt-[30vh] h-screen'>
            <div className='font-body md:mx-[50vh] text-indigo-700 '>
                <h1 className='text-6xl md:text-[80px]  font-semibold text-center  leading-[10vh] tracking-tighter'> Get the freedom to be more creative!</h1>
                <p className='mt-9 mx-3 text-center'>Let your imagination soar in the magical world where creativity knows no bounds, where knowledge and expertise intertwine to create something truly extraordinary, fostering brilliance and enabling new ideas to flourish.</p>
                <div className='flex justify-center mt-[48px]'>
                <button className='text-white p-3 bg-indigo-700 px-7  rounded-[30px] font-bold'>Get Started</button>
                <img src={Square} alt='square' className='hidden md:flex relative right-[90vh] bottom-[50vh]'></img>

                </div>
            </div>
            <img src={Vector} alt="vector" className='hidden md:flex w-[300px] relative left-[175vh] bottom-[65vh]' />
            <img src={Group} alt='group' className='hidden md:flex w-[1100px] relative bottom-[80vh]'></img>
            <img src={Squares} alt='squares' className='hidden md:flex w-[200px] relative bottom-[130vh] left-[180vh]'></img>

        </div>
    );
};

export default Lastpage;