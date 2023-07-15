import React from 'react'
import { BsGithub, BsTwitter, BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";

type Props = {}

function Footer({ }: Props) {
    return (
        <footer className='hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4'>
            <div className='flex gap-4 '>

                <a href="https://github.com/sudo-001" target="_blank" rel="noopener noreferrer">
                    <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                        <BsGithub />
                    </span>
                </a>
                <a href="https://www.linkedin.com/in/carickymele/" target="_blank" rel="noopener noreferrer">
                    <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                        <BsLinkedin />
                    </span>
                </a>
                <a href="https://twitter.com/CAtezong" target="_blank" rel="noopener noreferrer">
                    <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                        <BsTwitter />
                    </span>
                </a>
                <a href="https://www.instagram.com/sudo9058/" target="_blank" rel="noopener noreferrer">
                    <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                        <BsInstagram />
                    </span>
                </a>

            </div>
        </footer>
    )
}

export default Footer