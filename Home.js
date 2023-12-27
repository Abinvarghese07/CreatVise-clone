import React from 'react';

const Home = () => {
    return (
        <div className='bg-gradient-to-r from-indigo-600 from-4% via-indigo-300 to-indigo-700 to-80%  h-full mb-4 flex  flex-col items-center gap-[80px]'>
        <h1 className='text-6xl  md:text-6xl  md:text-[100px]  font-semibold text-white text-center md:leading-[100px] font-body mt-[24vh] tracking-tighter'>
            Empowering Curators, Enriching Perspectives
        </h1>
        <p className=' text-white font-body px-[10vh] md:mx-[25vh] text-center'>
            Welcome to Creativise! Unleashing the power of curation. We empower curators worldwide, providing them with a robust platform to showcase their expertise and amplify their impact. We believe in the power of curation and helps in turning a perspective into reality.

        </p>
        <button className='font-body text-xl text-white bg-indigo-600 rounded-[40px] p-3 px-7 font-semibold mb-[10vh]'>Get Started</button>

        </div>
    );
};

export default Home;