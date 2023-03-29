import React from 'react'

function About() {
    return (
        <div name='about' className='w-full h-screen bg-[#154b2bfb] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold text-[#807f77]'>
                        <p>Hey, Im Hunter Young and thanks for checking out my portfolio</p>
                    </div>
                    <div>
                        <p className='text-[#ffd700]'>I was born and raised in Atlanta, Ga. I have always been passionate about building things and the outdoors. Over the past few years I have developed an affinity for technology that I hadn’t had before. It began when I started with an access-control company and was installing and selling camera systems and badge readers. As I became more knowledgeable and worked with more innovative products my curiosity grew. I first got into networking and earned my certification, but I wasn’t in love with it. In 2022 I enrolled Georgia Tech's Full Stack Developer program and have been enjoying building and collaborating from day 1, excited to be learning and growing in a new field to myself. I look forward to adding more about my coding journey and sharing the projects I have built along the way.</p>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default About