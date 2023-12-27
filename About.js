import React from 'react';
import Typed from 'react-typed';


const About = () => {
    return (
         <div className='flex justify-center font-body font-bold h-screen py-[40vh]  p-7 '>
            <Typed className='text-7xl text-indigo-600' strings={['About Page !']} typeSpeed={100} backSpeed={100} loop></Typed>

            
        </div>
    );
};

export default About;