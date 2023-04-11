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
                        <p>I'm Hunter Young and thanks for checking out my portfolio</p>
                    </div>
                    <div>
                        <p className='text-[#ffd700] pb-20'>As a full stack developer born and raised in Atlanta, GA, I have always had a passion for building things and the outdoors. My interest in technology was sparked when I worked for an access-control company, installing and selling camera systems and badge readers. As I gained more knowledge and worked with more innovative products, my curiosity grew. While I initially got into networking and earned my certification, I discovered my love for coding when I enrolled in Georgia Tech's Full Stack Developer program in 2022. From day one, I have enjoyed building and collaborating, and I look forward to sharing the projects I have developed along the way.</p>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default About