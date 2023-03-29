import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

function Home() {
    return (
        <div name='home' className='w-full h-screen bg-[#154b2bfb]'>

            {/* container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#ffd700]'>Welcome to the protfolio of</p>
                <h1 className='text-white font-bold text-4xl sm:text-7xl'>Hunter Young</h1>
                <h2 className='text-[#807f77] font-bold text-3xl sm:text-7xl'>I'm a Full Stack Developer.</h2>
                <p className='text-[#ffd700] py-4 max-w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus sapiente rem et explicabo at illum eligendi, nemo quidem animi ipsum dolores iste fuga adipisci corrupti ea accusamus aspernatur doloribus!</p>
                <div>
                    <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-black'>View Work <HiArrowNarrowRight className='ml-2'/></button>
                </div>
            </div>
        </div>
    )
}

export default Home