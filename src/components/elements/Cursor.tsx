import { HoverContext } from '@/contexts/HoverContext';
import React, { useContext, useEffect, useState } from 'react'

type Props = {}

function Cursor({ }: Props) {
    const {isLinkHover, setIsLinkHover} = useContext(HoverContext);

    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: any) => {
            setPosition({ x: e.clientX, y: e.clientY });
        }

        document.addEventListener('mousemove', handleMouseMove);


        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        }
    }, [])

    return (
        <div className={`${isLinkHover == true ? 'w-12 h-12 bg-bodyColor/40 border-white/40' : 'w-8 h-8 bg-textDark/0 border-white'} hidden fixed z-50 rounded-full pointer-events-none md:flex items-center justify-center transition-all duration-75 border ease-in-out`} style={isLinkHover == false ? {
            left: position.x - 15, top: position.y-15
        } : {
            left: position.x - 25, top: position.y-25
        }}>
            <div className={`${isLinkHover == true ? 'w-2 h-2 bg-white/40 ' : 'w-2 h-2 bg-white'} fixed z-50 rounded-full pointer-events-none xl:transition-all xl:duration-[25ms] ease-in-out`} style={isLinkHover == false ? {
                left: position.x-3, top: position.y-3
            } : {
                left: position.x-6, top: position.y-6
            }}></div>
        </div>
    )
}

export default Cursor