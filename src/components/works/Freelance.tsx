import React from 'react'
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import { TiArrowForward } from "react-icons/ti";

type Props = {}

function Freelance({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            className='w-full'>
            <h3 className='flex justify-between font-medium text-xl text-[#fff] '>
                <p className='flex gap-1'>FrontEnd Developer
                </p>

            </h3>

            <p className='text-sm mt-1 font-medium text-textDark'>
                July 2022 – present
            </p>

            <ul className='mt-6 flex flex-col gap-3'>
                <li className=' flex text-base gap-2 text-textDark'>
                    <span className='text-textGreen mt-1'><TiArrowForward /></span>As a freelancer, I've created applications and websites
                    for individuals.
                </li>

            </ul>

            <div>
                <ul className='flex gap-4 flex-wrap mt-4'>
                    <li className='border border-textDark rounded-full py-1 px-4 flex items-center gap-2 text-blue-400'>
                        <span className='p-1 bg-textDark rounded-full w-0.5 h-0.5'></span> ReactJs</li>
                    <li className='border border-textDark rounded-full py-1 px-4 flex items-center gap-2 text-blue-400'>
                        <span className='p-1 bg-textDark rounded-full w-0.5 h-0.5'></span>
                        NodeJs
                    </li>
                    <li className='border border-textDark rounded-full py-1 px-4 flex items-center gap-2 text-blue-400'>
                        <span className='p-1 bg-textDark rounded-full w-0.5 h-0.5'></span>
                        Express
                    </li>
                    <li className='border border-textDark rounded-full py-1 px-4 flex items-center gap-2 text-blue-400'>
                        <span className='p-1 bg-textDark rounded-full w-0.5 h-0.5'></span>
                        CodeIgniter
                    </li>
                </ul>
            </div>

        </motion.div>
    )
}


export default Freelance