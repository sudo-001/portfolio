import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link';

type Props = {}

function Banner({ }: Props) {

    const handleScroll = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        // setShowMenu(false)
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

    return (
        <section id='home' className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'>

            <motion.h3 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className='text-lg tracking-wide text-textGreen'>
                Hi, My name is
            </motion.h3>
            <motion.h1
                initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }}
                className='text-4xl lgl:text-6xl font-semibold flex flex-col text-[#fff]'
            >Carick Atezong. <span className='text-[#cccccc]'>I am a <span className='text-textGreen'>Fullstack JS developer</span></span>
            </motion.h1>

            <motion.p
                initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }}
                className='text-base md:max-w-[650px] text-textDark font-medium tracking-widest'>

                Also know as <span className='text-textGreen'>sudo</span>, i am a developer with 2+ years of experience in <span className="text-textGreen">React</span> and <span className="text-textGreen">nodejs</span>. I have a strong fondation in front-end & back-end development and am skilled in creating user-friendly and responsive web applications using React, Nextjs, Nodejs and Nestjs. {" "}
                <Link href="#about" onClick={handleScroll}>
                    <span className='text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group'>
                        Learn More
                        <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                    </span>
                </Link>

            </motion.p>

            <Link href="#projects" onClick={handleScroll}>
                <motion.button initial={{y:10, opacity: 0}} animate={{ y:0, opacity: 1}} transition={{duration: 0.5, delay: 0.9}} className='w-52 h-14 text-sm border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300'>
                    Check out my Projects!
                </motion.button>
            </Link>
        </section>
    )
}

export default Banner