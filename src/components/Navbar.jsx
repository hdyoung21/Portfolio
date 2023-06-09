import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsPersonBadgeFill } from 'react-icons/bs'
import lodgelogo from '../assets/lodgelogo.JPG'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)
    return (
        <div className='top w-full h-[80px] flex justify-between items-center px-4 bg-[#154b2bfb] text-white'>
            <div>
                <img src={lodgelogo} alt="Youngs Lodge Logo" style={{ width: '80px' }} />
            </div>
            {/* menu */}

            <ul className='hidden md:flex text-[#ffd700]'>
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact Me
                    </Link>
                </li>
            </ul>

            {/* burger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#154b2bfb] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link></li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skills
                    </Link></li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                        Projects
                    </Link></li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact Me
                    </Link>
                </li>
            </ul>

            {/* social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-500'>
                        <a className='flex justify-between items-center w-full text-white' href='https://www.linkedin.com/in/hunter-young-688130125/'>
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-black'>
                        <a className='flex justify-between items-center w-full text-white' href='https://github.com/hdyoung21'>
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-red-500'>
                        <a className='flex justify-between items-center w-full text-white' href='/contact'>
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li> */}
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-white'>
                        <a className='flex justify-between items-center w-full text-black' href='https://docs.google.com/document/d/1OR-cb4Df5HP6ER_c9Uw6vQ4cWZxHEiuq/edit?usp=sharing&ouid=103502477606550281684&rtpof=true&sd=true'>
                            Resume <BsPersonBadgeFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar