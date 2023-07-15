import React from 'react'
import SectionTitle from '../elements/SectionTitle'
import Image from 'next/image'
import { TbBrandGithubFilled } from "react-icons/tb";
import { FiExternalLink } from "react-icons/fi";
import { BsArrowUpRight } from "react-icons/bs";

import findAJobImg from "../../../public/assets/images/capture_ecran/findajob.png";
import teslaImg from "../../../public/assets/images/capture_ecran/tesla.png";

type Props = {}

function Projects({ }: Props) {
    return (
        <section id="projects" className='max-w-containerWidth mx-auto lgl:px-20 py-24'>
            <SectionTitle title={'Projects'} />

            <div className='w-full flex flex-col items-center justify-between gap-10 mt-10'>
                {/* Project 1 */}
                <div className='w-full flex flex-col items-center justify-center gap-28 mt-20'>
                    <div className='flex flex-col xl:flex-row gap-6'>
                        <a href="https://find-a-job-front.vercel.app" target='_blank' className='w-full xl:w-1/2 h-auto relative group'>
                            <div>
                                <Image className='w-full h-full object-contain' src={findAJobImg} alt="Find A Job" />
                            </div>
                        </a>
                        <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
                            <p className='text-textGreen text-sm tracking-wide'>Feature Projet</p>
                            <h3 className='text-2xl font-bold text-[#fff]'>Find A Job</h3>
                            <p className='bg-[#111240] text-sm md:text-base p-2 rounded-md text-textDark'>
                                Web application enabling job seekers to search for
                                work and companies or individuals to post job offers.
                            </p>

                            <ul className='text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                                <li className='text-textDark/80 hover:text-textDark/100 cursor-pointer'>NextJs</li>
                                <li className='text-textDark/80 hover:text-textDark/100 cursor-pointer'>Typescript</li>
                                <li className='text-textDark/80 hover:text-textDark/100 cursor-pointer'>Tailwindcss</li>
                                <li className='text-textDark/80 hover:text-textDark/100 cursor-pointer'>Figma</li>
                                <li className='text-textDark/80 hover:text-textDark/100 cursor-pointer'>Vercel</li>
                            </ul>

                            <div className='text-xl flex gap-4'>
                                <a href="" target="_blank" rel="noopener noreferrer" className='hover:text-textGreen duration-300 text-textDark'>
                                    <TbBrandGithubFilled />
                                </a>

                                <a href="https://find-a-job-front.vercel.app" target="_blank" className='hover:text-textGreen duration-300 text-textDark' rel="noopener noreferrer">
                                    <FiExternalLink />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Project 2 */}
                <div className='w-full flex flex-col items-center justify-center gap-28 mt-20'>
                    <div className='flex flex-col xl:flex-row-reverse gap-6'>
                        <a href="https://tesla-website-clone-nu.vercel.app/" target='_blank' className='w-full xl:w-1/2 h-auto relative group'>
                            <div>
                                <Image className='w-full h-full object-contain' src={teslaImg} alt="Tesla clone" />
                            </div>
                        </a>
                        <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10'>
                            <p className='text-textGreen text-sm tracking-wide'>Feature Projet</p>
                            <h3 className='text-2xl font-bold text-[#fff]'>Clone testa UI</h3>
                            <p className='bg-[#111240] text-sm md:text-base p-2 xl:-mr-16 rounded-md text-textDark'>
                               Clone of the UI of the Tesla website
                            </p>

                            <ul className='text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                                
                                <li className='text-textDark/80 hover:text-textDark/100 cursor-pointer'>JavaScript</li>
                                <li className='text-textDark/80 hover:text-textDark/100 cursor-pointer'>Tailwindcss</li>
                                <li className='text-textDark/80 hover:text-textDark/100 cursor-pointer'>Vercel</li>
                            </ul>

                            <div className='text-xl flex gap-4'>
                                <a href="https://github.com/sudo-001/tesla_website_clone/" target="_blank" rel="noopener noreferrer" className='hover:text-textGreen duration-300 text-textDark'>
                                    <TbBrandGithubFilled />
                                </a>

                                <a href="https://tesla-website-clone-nu.vercel.app/" target="_blank" className='hover:text-textGreen duration-300 text-textDark' rel="noopener noreferrer">
                                    <FiExternalLink />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Project 3 */}
            </div>

            {/* <div className='flex bg-bodyColor/80 mt-10'>
            <a href="https://ubora-studios.com/" target='_blank' className='tracking-wider text-base text-textDark group relative cursor-pointer flex gap-1 overflow-x-hidden'>
                    <span className='text-base self-center'><BsArrowUpRight /></span>
                    See more on github
                    <span className='hidden md:inline-flex absolute w-full bg-textGreen h-[1px] bottom-0 left-0 transition-transform duration-500 -translate-x-[110%] group-hover:translate-x-0'></span>
                </a>
            </div> */}
        </section>
    )
}

export default Projects