import React from 'react';
import SectionTitle from '../elements/SectionTitle';
import Image from 'next/image';
import { motion } from "framer-motion";

// Logo
import js from "../../../public/assets/images/logo/javascript.png";
import ts from "../../../public/assets/images/logo/typescript.png";
import php from "../../../public/assets/images/logo/php.png";
import nodejs from "../../../public/assets/images/logo/nodejs.png";
import reactjs from "../../../public/assets/images/logo/reactjs.png";
import nextjs from "../../../public/assets/images/logo/nextjs.png";
import nestjs from "../../../public/assets/images/logo/nestjs.png";
import ci from "../../../public/assets/images/logo/ci.png";
import expressjs from "../../../public/assets/images/logo/expressjs.png";
import tailwind from "../../../public/assets/images/logo/tailwindcss.png";
import vercel from "../../../public/assets/images/logo/vercel.svg";
import github from "../../../public/assets/images/logo/github.png";
import gitlab from "../../../public/assets/images/logo/gitlab.png";
import flutter from "../../../public/assets/images/logo/flutter.png";

type Props = {}

function Skills({ }: Props) {
    return (
        <section id='skills' className='max-w-containerSmall mx-auto py-10 lgl:py-24 flex flex-col gap-8 xl:h-max'>
            <SectionTitle title='Skills' />

            <div className='px-4 flex flex-col gap-16'>
                <div>
                    <h2 className='text-stroke-white text-2xl mb-4 text-transparent font-extrabold tracking-widest'>WEB</h2>

                    <div className='flex gap-8 flex-wrap'>

                        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className='flex flex-col items-center'>
                            <div className='p-4 rounded-full bg-yellow-400/10 hover:bg-yellow-400/20 transition-all duration-300 hover:scale-95 hover:border-yellow-100/5 flex flex-col border border-yellow-400'>
                                <Image src={js} alt="JavaScript" className='w-11 h-11' />
                            </div>
                            <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.5 }} className='pt-1 text-lg text-yellow-400 tracking-widest font-medium'>
                                Javascript
                            </motion.p>
                        </motion.div>

                        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className='flex flex-col items-center'>
                            <div className='p-4 rounded-full bg-textDark/20 hover:bg-blue-400/20 transition-all duration-300 hover:scale-95 hover:border-blue-100/5 flex flex-col border border-blue-400'>
                                <Image src={ts} alt="Typescript" className='w-11 h-11' />
                            </div>
                            <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.3 }} className='pt-1 text-lg text-blue-400 tracking-widest font-medium'>
                                Typescript
                            </motion.p>
                        </motion.div>

                        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} className='flex flex-col items-center'>
                            <div className='p-4 rounded-full bg-textDark/10 hover:bg-gray-400/20 transition-all duration-300 hover:scale-95 hover:border-gray-100/5 flex flex-col border border-gray-400'>
                                <Image src={php} alt="Php" className='w-11 h-11' />
                            </div>
                            <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.4 }} className='pt-1 text-lg text-gray-400 tracking-widest font-medium'>
                                Php
                            </motion.p>
                        </motion.div>

                        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className='flex flex-col items-center'>
                            <div className='p-4 rounded-full bg-green-600/10 hover:bg-green-600/20 transition-all duration-300 hover:scale-95 hover:border-green-900/5 flex flex-col border border-green-600'>
                                <Image src={nodejs} alt="nodejs" className='w-11 h-11' />
                            </div>
                            <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.5 }} className='pt-1 text-lg text-green-600 tracking-widest font-medium'>
                                NodeJs
                            </motion.p>
                        </motion.div>

                        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className='flex flex-col items-center'>
                            <div className='p-4 rounded-full bg-blue-400/10 hover:bg-blue-400/20 transition-all duration-300 hover:scale-95 hover:border-blue-400/5 flex flex-col border border-blue-400'>
                                <Image src={reactjs} alt="reactjs" className='w-11 h-11' />
                            </div>
                            <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.6 }} className='pt-1 text-lg text-blue-400 tracking-widest font-medium'>
                                ReactJs
                            </motion.p>
                        </motion.div>

                        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }} className='flex flex-col items-center'>
                            <div className='p-4 rounded-full bg-textDark/10 hover:bg-black/20 transition-all duration-300 hover:scale-95 hover:border-black/5 flex flex-col border border-black'>
                                <Image src={nextjs} alt="nextjs" className='w-11 h-11' />
                            </div>
                            <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.7 }} className='pt-1 text-lg text-black tracking-widest font-medium'>
                                NextJs
                            </motion.p>
                        </motion.div>

                        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }} className='flex flex-col items-center'>
                            <div className='p-4 rounded-full bg-textDark/10 hover:bg-textDark/20 transition-all duration-300 hover:scale-95 hover:border-textDark/5 flex flex-col border border-textDark'>
                                <Image src={expressjs} alt="expressjs" className='w-11 h-11' />
                            </div>
                            <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.8 }} className='pt-1 text-lg text-textDark/90 tracking-widest font-medium'>
                                ExpressJs
                            </motion.p>
                        </motion.div>

                        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.9 }} className='flex flex-col items-center'>
                            <div className='p-4 rounded-full bg-red-400/10 hover:bg-red-400/20 transition-all duration-300 hover:scale-95 hover:border-red-400/5 flex flex-col border border-red-400'>
                                <Image src={nestjs} alt="nestjs" className='w-11 h-11' />
                            </div>
                            <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.9 }} className='pt-1 text-lg text-red-400/90 tracking-widest font-medium'>
                                NestJs
                            </motion.p>
                        </motion.div>

                        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 1 }} className='flex flex-col items-center'>
                            <div className='p-4 rounded-full bg-red-500/10 hover:bg-red-500/20 transition-all duration-300 hover:scale-95 hover:border-red-500/5 flex flex-col border border-red-500'>
                                <Image src={ci} alt="ci" className='w-11 h-11' />
                            </div>
                            <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 1 }} className='pt-1 text-lg text-red-500/90 tracking-widest font-medium'>
                                CodeIgniter
                            </motion.p>
                        </motion.div>


                        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 1.1 }} className='flex flex-col items-center'>
                            <div className='p-4 rounded-full bg-blue-400/10 hover:bg-blue-400/20 transition-all duration-300 hover:scale-95 hover:border-blue-400/5 flex flex-col border border-blue-400'>
                                <Image src={tailwind} alt="tailwindcss" className='w-11 h-11' />
                            </div>
                            <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 1.2 }} className='pt-1 text-lg text-blue-400 tracking-widest font-medium'>
                                TailwindCss
                            </motion.p>
                        </motion.div>

                    </div>
                </div>

                <div>
                    <h2 className='text-stroke-white text-2xl mb-4 text-transparent font-extrabold tracking-widest'>MOBILE</h2>

                    <div className='flex gap-8 flex-wrap'>

                        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className='flex flex-col items-center'>
                            <div className='p-4 rounded-full bg-blue-400/10 hover:bg-blue-400/20 transition-all duration-300 hover:scale-95 hover:border-blue-100/5 flex flex-col border border-blue-400'>
                                <Image src={flutter} alt="JavaScript" className='w-11 h-11' />
                            </div>
                            <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.5 }} className='pt-1 text-lg text-blue-400 tracking-widest font-medium'>
                                Flutter
                            </motion.p>
                        </motion.div>

                    </div>
                </div>

                <div>
                    <h2 className='text-stroke-white text-2xl mb-4 text-transparent font-extrabold tracking-widest'>DEPLOYMENT</h2>

                    <div className='flex gap-8 flex-wrap'>
                        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 1.3 }} className='flex flex-col items-center'>
                            <div className='p-4 rounded-full bg-textDark/10 hover:bg-black/20 transition-all duration-300 hover:scale-95 hover:border-black/5 flex flex-col border border-black'>
                                <Image src={vercel} alt="vercel" className='w-11 h-11' />
                            </div>
                            <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 1.3 }} className='pt-1 text-lg text-black tracking-widest font-medium'>
                                Vercel
                            </motion.p>
                        </motion.div>
                    </div>
                </div>

                <div>
                    <h2 className='text-stroke-white text-2xl mb-4 text-transparent font-extrabold tracking-widest'>OTHERS</h2>

                    <div className='flex gap-8 flex-wrap'>
                        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 1.4 }} className='flex flex-col items-center'>
                            <div className='p-4 rounded-full bg-textDark/10 hover:bg-black/20 transition-all duration-300 hover:scale-95 hover:border-black/5 flex flex-col border border-black'>
                                <Image src={github} alt="github" className='w-11 h-11' />
                            </div>
                            <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 1.4 }} className='pt-1 text-lg text-black font-medium tracking-widest'>
                                Github
                            </motion.p>
                        </motion.div>

                        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 1.5 }} className='flex flex-col items-center'>
                            <div className='p-4 rounded-full bg-orange-500/10 hover:bg-orange-500/20 transition-all duration-300 hover:scale-95 hover:border-orange-500/5 flex flex-col border border-orange-500'>
                                <Image src={gitlab} alt="gitlab" className='w-11 h-11' />
                            </div>
                            <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 1.5 }} className='pt-1 text-lg text-orange-500 font-medium tracking-widest'>
                                Gitlab
                            </motion.p>
                        </motion.div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Skills