import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';

const Footer = () => {
    return (
        <footer className="footer footer-center mx-auto bg-base-300 text-base-content p-4">
            <div>
                <nav className='text-center mb-5'>
                    <h6 className="footer-title text-center">Social Links</h6>
                    <aside className="flex justify-center items-center my-8 gap-4">
                        <a href="https://www.facebook.com/Smsirajulmonir"><FaFacebook className='text-3xl' /></a>
                        <a href="https://github.com/EngrMunir"><FaGithub className='text-3xl'/></a>
                        <a href="https://www.linkedin.com/in/engrmunir/"><GrLinkedin className='text-3xl'/></a>
                    </aside>
                    <aside>
                        <p>Copyright © ${new Date().getFullYear()} - All right reserved by Md Sirajul Munir</p>
                    </aside>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;