"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { useEffect } from 'react';

const Navbar = () => {
    const [barUnder, setbarUnder] = useState('/');

    useEffect(() => {
        const savedTab = localStorage.getItem('barUnder');
        if (savedTab) {
            setbarUnder(savedTab);
        }
    }, []);

    const handleClick = (href) => {
        setbarUnder(href);
        localStorage.setItem('barUnder', href);
    };

    return (
        <div className='px-4 md:px-8 lg:px-16 mt-5'>
            <div className='flex flex-col md:flex-row justify-between items-center h-full'>

                <div className='flex items-center gap-12 mb-4 md:mb-0 justify-between md:justify-start'>
                    <Link href="/">
                        <Image src="/sae.svg" alt="SAE Logo" height={78.45} width={219} />
                    </Link>
                    <div className='md:hidden'>
                        <button className='w-[141px] bg-[#E25420] h-[52px] rounded-full text-md'>Trident</button>
                    </div>
                </div>

                <div className='flex gap-4 text-lg font-semibold lg:gap-6 xl:gap-16 justify-center order-2 md:order-none'>
                    <Link href="/" onClick={() => handleClick('/')} className={`${barUnder === '/' ? 'border-b-4 border-[#EE3A24]' : ''}`}>Home</Link>
                    <Link href="/about" onClick={() => handleClick('/about')} className={`${barUnder === '/about' ? 'border-b-4 border-[#EE3A24]' : ''}`}>About</Link>
                    <Link href="/events" onClick={() => handleClick('/events')} className={`${barUnder === '/events' ? 'border-b-4 border-[#EE3A24]' : ''}`}>Events</Link>
                    <Link href="/blogs" onClick={() => handleClick('/blogs')} className={`${barUnder === '/blogs' ? 'border-b-4 border-[#EE3A24]' : ''}`}>Blogs</Link>
                    <Link href="/projects" onClick={() => handleClick('/projects')} className={`${barUnder === '/projects' ? 'border-b-4 border-[#EE3A24]' : ''}`}>Projects</Link>
                </div>

                <div className='hidden md:block'>
                    <button className='w-[141px] bg-[#E25420] h-[52px] rounded-full text-md'>Trident</button>
                </div>
            </div>
        </div>


    );
}

export default Navbar;
