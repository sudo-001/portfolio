import React, { useEffect, useState } from 'react'

type Props = {}

function Cursor({ }: Props) {

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
        <div className='hidden fixed z-50 w-8 h-8 bg-textDark/0 rounded-full pointer-events-none md:flex items-center justify-center transition-all duration-75 border border-white ease-in-out' style={{
            left: position.x - 15, top: position.y-15
        }}>
            <div className='fixed z-50 w-2 h-2 bg-white rounded-full pointer-events-none xl:transition-all xl:duration-[25ms] ease-in-out ' style={{
                left: position.x-3, top: position.y-3
            }}></div>
        </div>
    )
}

export default Cursor