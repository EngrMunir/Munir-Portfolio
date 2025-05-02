import { CONTACT } from '../constants';
import { motion } from 'framer-motion';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

const Contact = () => {
    return (
        <div className='border-b border-neutral-900 pb-20 px-4'>
            <h2 className='my-10 text-center text-4xl font-semibold'>Get In Touch</h2>

            <div className='flex flex-col md:flex-row md:justify-between md:items-start gap-10 max-w-6xl mx-auto'>

                {/* Left Side - Contact Info */}
                <div className='md:w-1/2 text-center md:text-left tracking-tight space-y-6'>
                    <h3 className='text-2xl font-semibold'>Contact Information</h3>
                    <p className='text-sm text-gray-400'>
                        Feel free to reach out to me for collaboration opportunities or just to say hello!
                    </p>

                    <div className='flex items-start gap-4'>
                        <MdEmail className='text-2xl text-blue-500' />
                        <div>
                            <h4 className='font-semibold'>Email</h4>
                            <a href={`mailto:${CONTACT.email}`} className='text-blue-400 underline'>
                                {CONTACT.email}
                            </a>
                        </div>
                    </div>

                    <div className='flex items-start gap-4'>
                        <MdLocationOn className='text-2xl text-green-500' />
                        <div>
                            <h4 className='font-semibold'>Location</h4>
                            <p>{CONTACT.address}</p>
                        </div>
                    </div>

                    <div className='flex items-start gap-4'>
                        <MdPhone className='text-2xl text-yellow-500' />
                        <div>
                            <h4 className='font-semibold'>Phone</h4>
                            <p>{CONTACT.phoneNo}</p>
                        </div>
                    </div>
                     <h2 className='mt-8'>Follow Me</h2>
                        <div className="divider"></div>
                            <div className='flex gap-5 mt-10'>
                                <a href="https://www.facebook.com/Smsirajulmonir"><FaFacebook className='text-3xl' /></a>
                                <a href="https://github.com/EngrMunir"><FaGithub className='text-3xl'/></a>
                                <a href="https://www.linkedin.com/in/engrmunir/"><GrLinkedin className='text-3xl'/></a>
                            </div>
                        </div>

                {/* Right Side - Form */}
                <form className='md:w-1/2 space-y-6'>
                    <div>
                        <label className='block mb-2 text-sm font-medium'>Name</label>
                        <input
                            type="text"
                            placeholder="Your name"
                            className='w-full rounded-md border border-neutral-800 bg-transparent px-4 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>
                    <div>
                        <label className='block mb-2 text-sm font-medium'>Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className='w-full rounded-md border border-neutral-800 bg-transparent px-4 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>
                    <div>
                        <label className='block mb-2 text-sm font-medium'>Subject</label>
                        <input
                            type="text"
                            placeholder="Subject"
                            className='w-full rounded-md border border-neutral-800 bg-transparent px-4 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>
                    <div>
                        <label className='block mb-2 text-sm font-medium'>Message</label>
                        <textarea
                            rows="5"
                            placeholder="Your message"
                            className='w-full rounded-md border border-neutral-800 bg-transparent px-4 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className='rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 transition duration-200'
                    >
                        Send Email
                    </button>
                </form>

            </div>
        </div>
    );
};

export default Contact;
