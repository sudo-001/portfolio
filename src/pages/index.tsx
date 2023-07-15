import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/global/navbar'
import LeftSide from '@/components/sections/LeftSide'
import RightSide from '@/components/sections/RightSide'
import { motion } from "framer-motion";
import Banner from '@/components/sections/Banner'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Cursor from '@/components/elements/Cursor'
import Archive from '@/components/sections/Archive'

// Octokit
import { octokit } from "../lib/github";
import { useEffect } from 'react'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/global/footer/Footer'


const inter = Inter({ subsets: ['latin'] })

function Home() {

  // useEffect(() => {
  //   console.log(repos)
  // },[])
  
  return (
    <main className='w-full h-screen bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar-track-textDark/20 scrollbar-thumb-textDark/60 scrollbar-thin'>
      <Navbar />

      {/* Cursor */}
      <Cursor />
      <div id="container" className='w-full min-h-[88vh]  xl:flex items-center gap-20 justify-between'>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className='hidden xl:inline-flex w-32 fixed left-0 bottom-0'>
          <LeftSide />
        </motion.div>

        <div className=' h-[88vh] w-full xl:mx-[8rem] mx-auto p-4'>
          <Banner />

          <About />

          <Skills />

          <Experience />

          <Projects />

          <Archive />

          <Contact />

          <Footer />
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} className='hidden xl:inline-flex w-32 fixed right-0 bottom-0'>
          <RightSide />
        </motion.div>

      </div>
    </main>
  )
}

// export async function getServerSideProps() {
//   const { data: repos } = await octokit.repos.listForAuthenticatedUser();

//   return {
//     props: { repos }
//   }
// }

export default Home