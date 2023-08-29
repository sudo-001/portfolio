import React, { useState } from 'react'
import ArchiveCard from '../elements/ArchiveCard'
import { motion } from "framer-motion";

type Props = {}

function Archive({ }: Props) {

    const [showMore, setShowMore] = useState(false);

    return (
        <div className='max-w-contentContainer mx-auto px-4 py-24'>
            <div className="w-full flex flex-col items-center text-[#fff]">
                <h2 className="text-3xl font-semibold">Other Noteworthy Projects</h2>
                <p className="text-sm text-textGreen">View the archive</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
                <ArchiveCard title="Wheather App" description="A frontend application that consumes a weather API and provides information on the weather in a given city." listItem={["HTML", "CSS", "JavaScript"]} link="https://weather-app-inky-six.vercel.app/" />
                <ArchiveCard title="CodersList" description="A frontend application for learning how to use NEXTJS, with an API that provides information about users." listItem={["Nextjs", "TailwindCss", "Vercel"]} link="https://coderslist.vercel.app/" />
                {/* <ArchiveCard title="title" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, vel incidunt ea inventore enim deserunt, tenetur nesciunt veritatis repellendus aspernatur pariatur excepturi doloremque quod? Voluptates praesentium rerum accusantium mollitia nobis." listItem={["ReactJs", "TailwindCss", "Framer-motion"]} link="https://tesla-website-clone-nu.vercel.app/" /> */}

                {/* {
                    showMore && (
                        <>
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} >
                                <ArchiveCard title="title" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, vel incidunt ea inventore enim deserunt, tenetur nesciunt veritatis repellendus aspernatur pariatur excepturi doloremque quod? Voluptates praesentium rerum accusantium mollitia nobis." listItem={["ReactJs", "TailwindCss", "Framer-motion"]} link="https://tesla-website-clone-nu.vercel.app/" />
                            </motion.div>

                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} >
                                <ArchiveCard title="title" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, vel incidunt ea inventore enim deserunt, tenetur nesciunt veritatis repellendus aspernatur pariatur excepturi doloremque quod? Voluptates praesentium rerum accusantium mollitia nobis." listItem={["ReactJs", "TailwindCss", "Framer-motion"]} link="https://tesla-website-clone-nu.vercel.app/" />
                            </motion.div>

                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} >
                                <ArchiveCard title="title" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, vel incidunt ea inventore enim deserunt, tenetur nesciunt veritatis repellendus aspernatur pariatur excepturi doloremque quod? Voluptates praesentium rerum accusantium mollitia nobis." listItem={["ReactJs", "TailwindCss", "Framer-motion"]} link="https://tesla-website-clone-nu.vercel.app/" />
                            </motion.div>
                        </>
                    )
                } */}
            </div>

            <div className='mt-12 flex justify-center items-center'>
                <button
                    onClick={() => setShowMore(!showMore)} className='w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'>
                    {showMore == false ? "Show More" : "Show Less"}
                </button>
            </div>
        </div>
    )
}

export default Archive