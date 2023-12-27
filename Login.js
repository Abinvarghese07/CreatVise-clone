import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()

    const navi = () => {
        navigate('/')
    }

    return (
         <div className='bg-indigo-500 h-screen w-full mt-5 flex justify-center border border-white '>
            <div className='mt-[8%] '>
                <form className='font-mono flex flex-col p-8 shadow-xl border rounded-xl shadow-indigo-700 '>
                    <h2 className=' font-bold text-4xl py-2 text-decoration: underline text-white'>LogIn</h2>
                    <label className='text-2xl font-bold py-2 text-white'>Mail</label>
                    <input className='p-2 rounded-[10px]' placeholder='Enter your mail'></input>
                    <label className='text-2xl font-bold py-2 text-white'>Password</label>
                    <input className='p-2 rounded-[10px] ' placeholder='Enter your password'></input>
                    <button className='bg-indigo-500 p-2 rounded-[20px] mt-2' onClick={navi}>SignIn</button>
                    <button  className='bg-indigo-500 p-2 rounded-[20px] mt-2'>Dont have an account?Signup here</button>
                </form>
        
            </div>
        </div>
    );
};

export default Login;