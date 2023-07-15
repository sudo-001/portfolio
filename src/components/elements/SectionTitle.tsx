import React from 'react'
import { HiInformationCircle } from "react-icons/hi"
import { GiSkills } from "react-icons/gi";
import { CgWorkAlt } from "react-icons/cg";
import { GrProjects } from "react-icons/gr";
import { GoProjectSymlink } from "react-icons/go";
import { AiOutlineAppstore } from "react-icons/ai";

type Props = {
    title: string,
}

function SectionTitle(props: Props) {
    const { title } = props

    return (
        <h2 className='text-2xl font-semibold flex items-center text-[#fff]'>
            <span className='text-base md:text-2xl cursor-pointer text-textGreen mr-2'>
                {title == "About Me" ? (
                    <HiInformationCircle />
                ) : (title == "Skills" ? (
                    <GiSkills />
                ) : (title == "Experience" ? (
                    <CgWorkAlt />
                ) : ( title == "Projects" ? (
                    // <GrProjects />
                    <AiOutlineAppstore />
                    // <GoProjectSymlink />
                ) : ("") )))}
            </span>
            {title}
            <span className='hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-gray-700 ml-6'></span>
        </h2>
    )
}

export default SectionTitle