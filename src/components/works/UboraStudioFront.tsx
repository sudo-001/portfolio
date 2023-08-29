import React from 'react'
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import { TiArrowForward } from "react-icons/ti";

type Props = {}

function UboraStudioFront({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            className='w-full'>
            <h3 className='flex flex-col md:flex-row justify-between font-medium text-xl text-[#fff] '>
                <p className='flex gap-2 items-center'>FrontEnd Developer
                    <span className='text-textGreen text-base tracking-wide'>@UBORA STUDIO</span>
                </p>

                <a href="https://ubora-studios.com/" target='_blank' className='tracking-wider text-base text-textDark group relative cursor-pointer flex gap-1 overflow-x-hidden'>
                    <span className='text-base self-center'><BsArrowUpRight /></span>
                    Website
                    <span className='hidden md:inline-flex absolute w-full bg-textGreen h-[1px] bottom-0 left-0 transition-transform duration-500 -translate-x-[110%] group-hover:translate-x-0'></span>
                </a>
            </h3>

            <p className='text-sm mt-1 font-medium text-textDark'>
                June 2021 – September 2021 | yaoundé, Cameroun
            </p>

            <ul className='mt-6 flex flex-col gap-3'>
                <li className=' flex text-base gap-2 text-textDark'>
                    <span className='text-textGreen mt-1'><TiArrowForward /></span>During this internship, my main objective was as a front-end developer, my goal was to create the
                    front-end for a photo printing site.
                </li>

                <li className=' flex text-base gap-2 text-textDark'>
                    <span className='text-textGreen mt-1'><TiArrowForward /></span>I've created front-end web applications to consume
                    APIs with REACTJS
                </li>

                <li className=' flex text-base gap-2 text-textDark'>
                    <span className='text-textGreen mt-1'><TiArrowForward /></span>I created figma maquettes
                </li>

                <li className=' flex text-base gap-2 text-textDark'>
                    <span className='text-textGreen mt-1'><TiArrowForward /></span>I created user interfaces inspired by my mock-ups and
                    those of other designers
                </li>
            </ul>

            <div>
                <ul className='flex gap-4 flex-wrap mt-4'>
                    <li className='border border-textDark rounded-full py-1 px-4 flex items-center gap-2 text-blue-400'>
                        <span className='p-1 bg-textDark rounded-full w-0.5 h-0.5'></span>
                        ReactJs
                    </li>

                    <li className='border border-textDark rounded-full py-1 px-4 flex items-center gap-2 text-blue-400'>
                        <span className='p-1 bg-textDark rounded-full w-0.5 h-0.5'></span>
                        Scss
                    </li>

                    <li className='border border-textDark rounded-full py-1 px-4 flex items-center gap-2 text-blue-400'>
                        <span className='p-1 bg-textDark rounded-full w-0.5 h-0.5'></span>
                        Framer-motion
                    </li>

                    <li className='border border-textDark rounded-full py-1 px-4 flex items-center gap-2 text-blue-400'>
                        <span className='p-1 bg-textDark rounded-full w-0.5 h-0.5'></span>
                        HTML5
                    </li>

                    <li className='border border-textDark rounded-full py-1 px-4 flex items-center gap-2 text-blue-400'>
                        <span className='p-1 bg-textDark rounded-full w-0.5 h-0.5'></span>
                        CSS3
                    </li>

                    <li className='border border-textDark rounded-full py-1 px-4 flex items-center gap-2 text-blue-400'>
                        <span className='p-1 bg-textDark rounded-full w-0.5 h-0.5'></span>
                        TailwindCss
                    </li>
                </ul>
            </div>

        </motion.div>
    )
}

export default UboraStudioFront