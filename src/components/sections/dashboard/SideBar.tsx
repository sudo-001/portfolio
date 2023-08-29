import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { CgWebsite, CgWorkAlt } from 'react-icons/cg';
import { GoWorkflow } from 'react-icons/go';
import { AiOutlineAppstore } from 'react-icons/ai';
import { MdBuild, MdContacts, MdMedicalInformation, MdPerson, MdWebStories, MdWorkHistory } from 'react-icons/md';
import { GrAppleAppStore } from 'react-icons/gr';
import { BsBuilding } from 'react-icons/bs';
import { TbBuildingCarousel } from 'react-icons/tb';


type Props = {}

function SideBar({ }: Props) {
    return (
        <div className='w-1/5 rounded-xl h-full bg-slate-100 group p-4'>

            <div className='py-4 border-b border-b-bodyColor px-4'>
                <Link href="/" >
                    <h2 className='flex gap-2 itesm-center text-bodyColor font-bold cursor-pointer tracking-wider text-lg'>
                        <TbBuildingCarousel className='w-6 h-6 ' />
                        <span className='hidden mdl:block'>MakePorfolio</span>
                    </h2>
                </Link>
            </div>

            <div className='hidden mdl:inline-flex items-center gap-7 w-full pt-4'>
                <ul className='flex text-bodyColor flex-col text-[13px] gap-3  tracking-widest w-full'>
                    <Link href="#home"
                        className='flex items-center gap-2 font-semibold  hover:bg-bodyColor hover:text-white hover:font-bold hover:rounded-full py-3 px-4 cursor-pointer duration-300 nav-link tracking-wider group'>
                        <MdPerson className="w-5 h-5" />
                        <motion.li initial={{ y: -15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2 }} className=''>
                            Me
                        </motion.li>
                    </Link>

                    <Link href="#about"
                        className='flex items-center gap-2 font-semibold  hover:bg-bodyColor hover:text-white hover:font-bold hover:rounded-full py-3 px-4 cursor-pointer duration-300 nav-link tracking-wider group'>
                        <GrAppleAppStore className="w-5 h-5" />
                        <motion.li initial={{ y: -15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.2 }}>
                            Projects
                        </motion.li>
                    </Link>

                    <Link href="#skills"
                        className='flex items-center gap-2 font-semibold  hover:bg-bodyColor hover:text-white hover:font-bold hover:rounded-full py-3 px-4 cursor-pointer duration-300 nav-link tracking-wider group'>
                        <GiSkills className='w-5 h-5' />
                        <motion.li initial={{ y: -15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.3 }}>
                            Skills
                        </motion.li>
                    </Link>

                    <Link href="#experience"
                        className='flex items-center gap-2 font-semibold  hover:bg-bodyColor hover:text-white hover:font-bold hover:rounded-full py-3 px-4 cursor-pointer duration-300 nav-link tracking-wider group'>
                        <MdWorkHistory className="w-5 h-5" />
                        <motion.li initial={{ y: -15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.4 }}>
                            Experiences
                        </motion.li>
                    </Link>

                    <Link href="#projects"
                        className='flex items-center gap-2 font-semibold  hover:bg-bodyColor hover:text-white hover:font-bold hover:rounded-full py-3 px-4 cursor-pointer duration-300 nav-link tracking-wider group'>
                        <MdContacts className='w-5 h-5' />
                        <motion.li initial={{ y: -15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.5 }}>
                            Contact
                        </motion.li>
                    </Link>

                    <Link href="#contact"
                        className='flex items-center gap-2 font-semibold  hover:bg-bodyColor hover:text-white hover:font-bold hover:rounded-full py-3 px-4 cursor-pointer duration-300 nav-link tracking-wider group'>
                        <MdWebStories className='w-5 h-5' />
                        <motion.li initial={{ y: -15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.6 }}>
                            Portfolio
                        </motion.li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default SideBar