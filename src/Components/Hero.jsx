import React from 'react';
import { HERO_CONTENT } from '../constants';
import profileImg from '../assets/kevinRushProfile.jpg'

const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <h1 className='pb-10 text-6xl font-thin tracking-tight lg:mt-12 lg:text-7xl'>Md Sirajul Munir</h1>
                        <span className='bg-gradient-to-r from-pink-300 via-slate-500 to bg-purple-500 bg-clip-text 
                        text-4xl tracking-tight text-transparent'>Jr. Front End Developer</span>
                        <p className='my-2 max-w-xl py-8 font-light tracking-tighter'>{HERO_CONTENT}</p>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <img src={profileImg} alt="Sirajul Munir" />
                </div>
            </div>
        </div>
    );
};

export default Hero;