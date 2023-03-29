import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

function Home() {
    return (
        <div name='home' className='w-full h-screen bg-[#154b2bfb]'>

            {/* container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#ffd700]'>Welcome to the portfolio of</p>
                <h1 className='text-white font-bold text-4xl sm:text-7xl'>Hunter Young</h1>
                <h2 className='text-[#807f77] font-bold text-3xl sm:text-7xl'>Full Stack Developer.</h2>
                <p className='text-[#ffd700] py-4 max-w-[700px]'>Emerging developer with a passion for developing client-focused applications with polished front-ends and robust backends.  Enjoy the out-of-the-box thinking needed for creative problem solving.  Energized by collaborating with customers and colleagues to solve business challenges. Looking for a company that I can invest in as they invest in me to grow and develop my technical and consulting skills.</p>
                <div>
                    <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-black hover:border-[#ffd700]'>
                        View Work
                        <span className='hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>
                </div>
            </div>
        </div >
    )
}

export default Home