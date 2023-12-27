import React from 'react';
import {useNavigate} from 'react-router-dom';

const Signin = () => {
     const navigate = useNavigate()

    const navi = () => {
        navigate('/')
    }
    const Log = () => {
        navigate('/login')
    }
    return (
        <div className='bg-indigo-500 h-screen w-full mt-5 flex justify-center border border-white '>
            <div className='mt-[8%] '>
                <form className='font-mono flex flex-col p-8 shadow-md shadow-indigo-700 '>
                    <h2 className='font-bold text-4xl py-2 text-decoration: underline text-white'>SignUp</h2>
                    <label className='text-2xl font-bold py-2 text-white'>Mail</label>
                    <input className='p-2 rounded-[10px]' placeholder='Enter your mail'></input>
                    <label className='text-2xl font-bold py-2 text-white'>Password</label>
                    <input className='p-2 rounded-[10px] ' placeholder='Enter your password'></input>
                    <button className='bg-indigo-500 p-2 rounded-[20px] mt-2' onClick={navi}>Register</button>
                    <button className='bg-indigo-500 p-2 rounded-[20px] mt-2' onClick={Log}>Already have an account?SignIn here</button>
                </form>
        
            </div>
        </div>
    );
};

export default Signin;