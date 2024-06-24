import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                {/* <img src={logo} alt="logo" /> */}
                <h2>Portfolio</h2>
            </div>
            <ul className='m-8 flex items-center justify-center gap-4 text-2xl'>
               <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
               <li><Link to="about" smooth={true} duration={500}>About</Link></li>
               <li><Link to="project" smooth={true} duration={500}>Projects</Link></li>
               <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
               <li><Link to="technology" smooth={true} duration={500}>Technology</Link></li>
            </ul>            
        </nav>
    );
};

export default Navbar;