import React, { useState } from 'react'
import SectionTitle from '../elements/SectionTitle'
import UBoraStudioFull from '../works/UboraStudioFull'
import UboraStudioFull from '../works/UboraStudioFull'
import UboraStudioFront from '../works/UboraStudioFront'
import Freelance from '../works/Freelance'

type Props = {}

function Experience({ }: Props) {

    const [uboraFull, setUboraFull] = useState(true)
    const [uboraFront, setUboraFront] = useState(false)
    const [freelance, setFreelance] = useState(false)

    const handleUboraFull = () => {
        setUboraFull(true)
        setUboraFront(false)
        setFreelance(false)
    }

    const handleUboraFront = () => {
        setUboraFull(false)
        setUboraFront(true)
        setFreelance(false)
    }

    const handleFreelance = () => {
        setUboraFull(false)
        setUboraFront(false)
        setFreelance(true)
    }

    return (
        <section id='experience' className='max-w-containers mx-auto py-10 lgl:py-24 px-4'>
            <SectionTitle title={'Experience'} />

            <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
                <ul className='md:w-32 flex flex-col'>
                    <li onClick={handleUboraFull} className={`${uboraFull ? 'border-l-textGreen text-textGreen' : ' border-l-hoverColor text-textDark'} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>Ubora Studio</li>

                    <li onClick={handleUboraFront} className={`${uboraFront ? 'border-l-textGreen text-textGreen' : ' border-l-hoverColor text-textDark'} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>Ubora Studio</li>

                    <li onClick={handleFreelance} className={`${freelance ? 'border-l-textGreen text-textGreen' : ' border-l-hoverColor text-textDark'} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>Freelance</li>

                    {/* <li className='border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium'>Spash</li>

                    <li className='border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium'>Amazon</li> */}
                </ul>

                {uboraFull && <UboraStudioFull />}
                {uboraFront && <UboraStudioFront />}
                {freelance && <Freelance />}

            </div>
        </section>
    )
}

export default Experience