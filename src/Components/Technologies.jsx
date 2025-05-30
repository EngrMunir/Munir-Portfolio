import { FaReact } from 'react-icons/fa';
import { RiNextjsLine } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";
import { SiAntdesign, SiExpress, SiMongodb, SiMongoose, SiShadcnui, SiTailwindcss, SiTypescript } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { motion } from 'framer-motion';
import { GrMysql } from 'react-icons/gr';

const iconVariants = (duration)=>({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition:{
            duration: duration,
            ease:"linear",
            repeat:Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h2
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity:0, y: -100}}
            transition={{duration: 1.5}}
            className='my-20 text-center text-4xl'>Technologies</motion.h2>
            <motion.div 
            whileInView={{opacity: 1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration: 1.5}}
            className='flex flex-wrap items justify-center gap-4'>
                <motion.div 
                    variants = {iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaReact className="text-7xl text-cyan-400"/>
                </motion.div>
                <motion.div
                    variants = {iconVariants(3)}
                    initial="initial"
                    animate="animate"
                
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiNextjsLine className="text-7xl text-cyan-500"/>
                </motion.div>
                <motion.div
                 variants = {iconVariants(5)}
                    initial="initial"
                    animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <DiJavascript className="text-7xl text-yellow-400"/>
                </motion.div>
                <motion.div 
                 variants = {iconVariants(2)}
                    initial="initial"
                    animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMongodb className="text-7xl text-green-400"/>
                </motion.div>
                <motion.div 
                 variants = {iconVariants(2)}
                    initial="initial"
                    animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMongoose className="text-7xl text-green-400"/>
                </motion.div>
                <motion.div 
                 variants = {iconVariants(2)}
                    initial="initial"
                    animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <GrMysql className="text-7xl text-green-400"/>
                </motion.div>
                <motion.div 
                 variants = {iconVariants(2)}
                    initial="initial"
                    animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiTypescript className="text-7xl text-green-400"/>
                </motion.div>
                <motion.div 
                 variants = {iconVariants(6)}
                    initial="initial"
                    animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiFirebase className="text-7xl text-yellow-500"/>
                </motion.div>
                <motion.div 
                    variants = {iconVariants(3)}
                    initial="initial"
                    animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <DiNodejs className="text-7xl text-green-500"/>
                </motion.div>
                <motion.div 
                    variants = {iconVariants(3)}
                    initial="initial"
                    animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiExpress  className="text-7xl text-cyan-400"/>
                </motion.div>
                <motion.div 
                    variants = {iconVariants(3)}
                    initial="initial"
                    animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiAntdesign className="text-7xl text-cyan-400"/>
                </motion.div>
                <motion.div 
                    variants = {iconVariants(3)}
                    initial="initial"
                    animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiShadcnui className="text-7xl text-cyan-400"/>
                </motion.div>
                <motion.div 
                    variants = {iconVariants(3)}
                    initial="initial"
                    animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiTailwindcss className="text-7xl text-cyan-400"/>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;
