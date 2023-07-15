import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { motion } from "framer-motion";
import { Smokum } from 'next/font/google';
import { MdOutlineClose } from 'react-icons/md';
import { BsGithub, BsTwitter, BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";

type Props = {}

function Navbar({ }: Props) {
    const [showMenu, setShowMenu] = useState(false)

    const ref = useRef<String | any>("");
    const handleScroll = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setShowMenu(false)
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "")
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: 'smooth',
        });

        // Update the className of the clicked link
        const links = document.querySelectorAll(".nav-link");
        links.forEach((link) => {
            link.classList.remove("active")
        });
        e.currentTarget.classList.add("active")
    }

    function handleClick(e: any) {
        if (e.target.contains(ref.current)) {
            setShowMenu(false)
        }
    }

    return (
        <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
            <div className='max-w-container h-full mx-auto py-1 flex items-center justify-between'>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                    <p className='text-lg font-bold hover:cursor-pointer hover:shadow-xl  hover:text-textGreen transition-all duration-500 text-[#fff]'>
                        <a href="/">
                            {'< / Sudo >'}
                        </a>
                    </p>
                </motion.div>

                <div className='hidden mdl:inline-flex items-center gap-7'>
                    <ul className='flex text-[13px] gap-7 tracking-widest'>
                        <Link href="#home"
                            onClick={handleScroll} className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                            <motion.li initial={{ y: -15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2 }}>
                                Home
                            </motion.li>
                        </Link>

                        <Link href="#about"
                            onClick={handleScroll} className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                            <motion.li initial={{ y: -15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.2 }}>
                                About
                            </motion.li>
                        </Link>

                        <Link href="#skills"
                            onClick={handleScroll} className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                            <motion.li initial={{ y: -15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.3 }}>
                                Skills
                            </motion.li>
                        </Link>

                        <Link href="#experience"
                            onClick={handleScroll} className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                            <motion.li initial={{ y: -15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.4 }}>
                                Experience
                            </motion.li>
                        </Link>

                        <Link href="#projects"
                            onClick={handleScroll} className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                            <motion.li initial={{ y: -15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.5 }}>
                                Projects
                            </motion.li>
                        </Link>

                        <Link href="#contact"
                            onClick={handleScroll} className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                            <motion.li initial={{ y: -15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.6 }}>
                                Contact
                            </motion.li>
                        </Link>
                    </ul>

                    <a href="/assets/my_resume.pdf" target='_blank'>
                        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className='px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'>
                            Resume
                        </motion.button>
                    </a>
                </div>

                {/* hamburger icon */}
                <div
                    onClick={() => setShowMenu(true)} className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group'>
                    <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
                    <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300'></span>
                    <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>
                </div>

                {
                    showMenu && (
                        <div ref={(val) => { ref.current = val }} onClick={handleClick}
                            className='absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end backdrop-blur-sm'>
                            <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.1 }} className='w-[80%] h-full overflow-y-scroll scrollbar bg-[#112240] flex flex-col items-center px-4 py-10 relative'>
                                <MdOutlineClose onClick={() => setShowMenu(false)} className='text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4' />

                                <div className='flex flex-col items-center gap-7'>
                                    <ul className='flex flex-col text-base gap-7 tracking-widest'>
                                        <Link href="#home"
                                            onClick={handleScroll} className='flex items-center gap-1 font-medium text-textDark/100 hover:text-textGreen cursor-pointer duration-300 nav-link'>
                                            <motion.li initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.1, ease: 'easeIn' }}>
                                                Home
                                            </motion.li>
                                        </Link>

                                        <Link href="#about"
                                            onClick={handleScroll} className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                                            <motion.li initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.2, ease: 'easeIn' }}>
                                                About
                                            </motion.li>
                                        </Link>

                                        <Link href="#skills"
                                            onClick={handleScroll} className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                                            <motion.li initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.3, ease: 'easeIn' }}>
                                                Skills
                                            </motion.li>
                                        </Link>

                                        <Link href="#experience"
                                            onClick={handleScroll} className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                                            <motion.li initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.4, ease: 'easeIn' }}>
                                                Experience
                                            </motion.li>
                                        </Link>

                                        <Link href="#projects"
                                            onClick={handleScroll} className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                                            <motion.li initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.5, ease: 'easeIn' }}>
                                                Projects
                                            </motion.li>
                                        </Link>

                                        <Link href="#contact"
                                            onClick={handleScroll} className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                                            <motion.li initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.6, ease: 'easeIn' }}>
                                                Contact
                                            </motion.li>
                                        </Link>
                                    </ul>

                                    {/* Resume button */}
                                    <a href="/assets/my_resume.pdf" target='_blank'>
                                        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className='w-32 h-10 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'>
                                            Resume
                                        </motion.button>
                                    </a>

                                    {/* Social media icons */}
                                    <div className='inline-flex xl:hidden items-center justify-center w-full py-6 gap-4'>
                                        <div className='flex gap-4 '>

                                            <motion.a initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.7, ease: 'easeIn' }} href="https://github.com/sudo-001" target="_blank" rel="noopener noreferrer">
                                                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                                                    <BsGithub />
                                                </span>
                                            </motion.a>
                                            <motion.a initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.8, ease: 'easeIn' }} href="https://www.linkedin.com/in/carickymele/" target="_blank" rel="noopener noreferrer">
                                                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                                                    <BsLinkedin />
                                                </span>
                                            </motion.a>
                                            <motion.a initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.9, ease: 'easeIn' }} href="https://twitter.com/CAtezong" target="_blank" rel="noopener noreferrer">
                                                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                                                    <BsTwitter />
                                                </span>
                                            </motion.a>
                                            <motion.a initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 1, ease: 'easeIn' }} href="https://www.instagram.com/sudo9058/" target="_blank" rel="noopener noreferrer">
                                                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                                                    <BsInstagram />
                                                </span>
                                            </motion.a>

                                        </div>
                                    </div>


                                </div>
                                <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, ease: 'easeIn' }} className="text-sm w-full tracking-widest text-textGreen text-center mt-4" href="mailto:carickymele@gmail.com">
                                    <p>CarickYmele@gmail.com</p>
                                </motion.a>
                            </motion.div>
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default Navbar