import React from 'react'
import Image from 'next/image'

const Innovation = () => {
    return (
        <div className='w-full mx-auto p-4 relative'>
            <div className="relative">
                <Image
                    src="/Group 7261.png"
                    alt=''
                    layout="responsive"
                    width={1797}
                    height={621}
                    className='rounded-lg w-full h-auto z-10'
                />
            </div>

            <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center">
                <h1 className='sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4'>
                    <span>Advancing</span> <span className="text-[#E25420]">Innovation</span> <span>with the technology</span>
                </h1>
                <div className="flex flex-col sm:text-md md:text-xl lg:text-2xl md:flex-row gap-20 items-center justify-center">
                    <p className='font-semibold text-center md:text-left max-w-xl'>
                        The Science and Technology Council at IIT BHU is a student-run organization that aims to promote the understanding and application of Science and Technology among the IIT BHU community.
                    </p>
                    <div className="max-w-xs md:max-w-sm lg:max-w-md">
                        <Image
                            src="/image 1072.png"
                            alt=""
                            layout="responsive"
                            height={200}
                            width={300}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Innovation
