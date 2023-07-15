import React from 'react'

type Props = {}

function Contact({ }: Props) {
    return (
        <section id='contact' className='max-w-contentContainer mx-auto py-20 xl:py-32 flex flex-col gap-4 items-center justify-center'>
            <p className='text-lg text-textGreen font-semibold flex items-center tracking-wide'>
                What's Next?
            </p>
            <h2 className='text-5xl font-semibold text-[#fff]'>
                Get In touch
            </h2>

            <p className='max-w-[700px] text-center text-textDark overflow-x-hidden'>
                Did you like my projects and would you like to collaborate with me? Don't hesitate to contact me, directly at my email or via social networks. I like to work creatively and I'm always open for a one-off assignment or for a longer-term collaboration, I'm always open to new opportunities. Feel free to contact me now to discuss your project. Thank you for your interest and I look forward to hearing from you soon.
            </p>

            <a href="mailto:carickymele@gmail.com">
                <button className='text-textGreen w-40 h-14 border border-textGreen mt-6 text-sm tracking-wider rounded-md hover:bg-hoverColor duration-300'>Say Hello</button>
            </a>
        </section>
    )
}

export default Contact