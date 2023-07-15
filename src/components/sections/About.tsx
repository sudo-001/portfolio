import React from 'react'
import SectionTitle from '../elements/SectionTitle'
import Image from 'next/image'
import logo from "../../../public/assets/images/icon.jpg";
import me from "../../../public/assets/images/me.jpeg";
type Props = {}

function About({ }: Props) {
    return (
        <section id='about' className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8 xl:h-screen'>
            <SectionTitle title='About Me' />

            <div className='flex flex-col lgl:flex-row gap-16'>
                <div className='w-full lgl:w-2/3 text-textDark font-medium flex flex-col gap-4 text-lg tracking-widest'>
                    <p className=''>
                        Hi, I'm Carick ATEZONG I'm better known as sudo, I'm a <span className="text-textGreen">frontend developer</span>, <span className="text-textGreen">web integrator</span> , <span className="text-textGreen">backend developer</span>, I'm from Cameroon. I'm passionate about solving problems with code, creating beautiful, friendly and responsive websites, and creating scalable databases. I like listening to music and in my spare time I like reading books, or playing video games.
                    </p>

                    <div>
                        <h2 className='uppercase font-semibold'>Languages</h2>
                        <ul  className='list-none flex flex-col gap-4 pl-2'>
                            <li className='font-medium mt-4'>French <span className='font-light'>Native</span></li>
                            <li className='font-medium'>English <span className='font-light'>Fluent</span></li>
                        </ul>
                    </div>
                </div>

                <div className='w-full lgl:w-1/3 h-80 relative group'>
                    <div className='absolute w-full h-80 -left-6 -top-6 rounded-lg'>
                        <div className='w-full h-full relative z-20 flex pl-6 lgl:pl-0'>
                            <Image className='rounded-lg h-full object-cover' src={me} alt="myImage" />

                            <div className='hidden lgl:inline-block absolute w-full h-80 bg-textGreen/10 rounded-md left-0 group-hover:bg-transparent duration-300'></div>

                            <div className='absolute hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md translate-x-5 translate-y-5 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300 -z-10'></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About