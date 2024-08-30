import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='bg-black text-white py-8 px-4 md:px-8 lg:px-16 xl:px-24 border-4 border-[#EE3A24]'>
            <div className='flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0 pt-6'>
                
                <div className='flex flex-col items-center md:items-start gap-4'>
                    <Image src="/iit.svg" height={130} width={90} alt="IIT Logo" className="w-40 h-auto md:w-32 md:h-auto lg:w-48 lg:h-auto" />
                    <Image src="/saeimage.svg" width={150} height={60} alt="SAE Logo" className="w-40 h-auto md:w-32 md:h-auto lg:w-48 lg:h-auto" />
                </div>

                <div className='text-center md:text-left md:max-w-xs'>
                    <h2 className='text-orange-600 font-semibold text-xl md:text-2xl mb-2'>
                        <span>SAE</span> <span className='text-white'>Collegiate Club</span>
                    </h2>
                    <p className='text-gray-400 text-sm md:text-base'>
                        TACK &#123;Ka full form&#125; &#123;Or pura tack ka address&#125;
                    </p>
                    <p className='mt-2 text-sm md:text-base'>
                        IIT (BHU), Varanasi, India<br />
                        PIN: 221005
                    </p>
                </div>

                <div className='text-center'>
                    <h2 className='text-xl md:text-2xl font-semibold mb-4'>Socials</h2>
                    <ul className='space-y-2'>
                        <li className='flex items-center justify-center md:justify-start gap-2'><Image src="/insta.svg" alt='Instagram' width={30} height={30} />Instagram</li>
                        <li className='flex items-center justify-center md:justify-start gap-2'><Image src="/facebook.svg" alt='Facebook' width={30} height={30} />Facebook</li>
                        <li className='flex items-center justify-center md:justify-start gap-2'><Image src="/linkedin.svg" alt='LinkedIn' width={30} height={30} />LinkedIn</li>
                        <li className='flex items-center justify-center md:justify-start gap-2'><Image src="/gmail.svg" alt='Email' width={30} height={30} />E-mail</li>
                    </ul>
                </div>

                <div className='text-center'>
                    <h2 className='text-xl md:text-2xl font-semibold mb-4'>Stay up to date</h2>
                    <div className='flex flex-col sm:flex-row items-center border rounded-full p-2 bg-gray-800'>
                        <input type="text" className='bg-transparent outline-none text-white px-2 mb-2 sm:mb-0 sm:mr-2 w-full sm:w-auto' placeholder='Your email address' />
                        <button className='ml-0 sm:ml-2'><Image src="/send.svg" width={26} height={26} alt="Send" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
