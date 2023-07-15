import React from 'react'

type Props = {}

function RightSide({ }: Props) {
    return (
        <div className='w-full h-full flex flex-col items-center justify-end text-textLight'>
            <a href="mailto:carickymele@gmail.com">
                <p className='text-sm rotate-90 w-72 tracking-wide text-textGreen'>
                    contact me
                </p>
            </a>

            <span className='w-[2px] h-44 bg-textDark' />

        </div>
    )
}

export default RightSide