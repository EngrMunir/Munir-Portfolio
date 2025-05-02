import { GrLinkedin } from "react-icons/gr";
import profileImg from '../assets/heroimg.jpg';
import { motion } from "framer-motion";
import { FaFacebook, FaGithub } from 'react-icons/fa';
const container =(delay)=>({
    hidden: {x:-100, opacity: 0},
    visible:{
        x:0,
        opacity:1,
        transition: {
            duration: 0.5,
            delay: delay
        }
    }
})

const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2 mb-5'>
                    <div className='flex flex-col items-center lg:items-center'>
                        <motion.h1 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className='pb-16 text-center text-5xl font-thin tracking-tight lg:mt-16 lg:text-5xl'>Hi, <br />I'm Md Sirajul Munir</motion.h1>
                        <motion.span
                         variants={container(0.5)}
                         initial="hidden"
                         animate="visible"
                        className='bg-gradient-to-r from-pink-300 via-slate-500 to bg-purple-500 bg-clip-text 
                        text-3xl tracking-tight text-transparent'>MERN Stack Developer</motion.span>
                        <a href='/resume.pdf' download="resume.pdf">
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>Get Resume</button>
                        </a>
                        <h2 className='mt-8'>Follow Me</h2>
                        <div className="divider"></div>
                        <div className='flex gap-5 mt-10'>
                        <a href="https://www.facebook.com/Smsirajulmonir"><FaFacebook className='text-3xl' /></a>
                        <a href="https://github.com/EngrMunir"><FaGithub className='text-3xl'/></a>
                        <a href="https://www.linkedin.com/in/engrmunir/"><GrLinkedin className='text-3xl'/></a>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <motion.img  
                        initial={{x: 100, opacity: 0}}
                        animate={{ x:0, opacity:1}}
                        transition={{ duration: 1, delay: 1.2}}
                         src={profileImg} alt="Sirajul Munir" />
                </div>
            </div>
        </div>
    );
};

export default Hero;