"use client"

import Image from "next/image";

import Contribution from "./components/Contribution"
import MeetTeam from "./components/MeetTeam";
import Innovation from "./components/Innovation"

export default function Home() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <div className="flex justify-center items-center flex-col m-4 sm:m-6 md:m-8 lg:m-10 xl:m-12 min-h-[695px]">
        <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Team Trident</h1>
        <p className="flex text-center text-base sm:text-lg md:text-xl lg:text-2xl mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-36 my-6 sm:my-8 md:my-10 lg:my-12 xl:my-14">
          SAE (Society of Automotive Engineers) aims to give a platform to people who wish to learn about and build automobiles. Our teams take part in various RC and automotive events all around the year....
        </p>
      </div>


      <div className="min-h-[650px] bg-white">

      </div>

      <div className="min-h-[781px]  relative p-4">
        <div className="absolute top-20 right-20 -z-10">
          <Image
            src="/image 1072.png"
            alt=""
            height={321}
            width={421}
            className="max-w-full h-auto"
          />
        </div>
        <div className="absolute bottom-20 left-20 -z-10">
          <Image
            src="/image 1073.png"
            alt=""
            height={237}
            width={411}
            className="max-w-full h-auto"
          />
        </div>
        <div className="absolute bottom-20 right-20 -z-10">
          <Image
            src="/image 1074.png"
            alt=""
            height={283}
            width={432}
            className="max-w-full h-auto"
          />
        </div>

        <div className=" right-0 top-1/2 transform -translate-y-1/2 max-w-[1400px]  absolute w-auto z-0">
          <Innovation />
        </div>
      </div>

      <div className="h-[200px] bg-white"></div>


      <div class="bg-gradient-to-b from-white via-gray-300 to-black">
        <div className="text-[#02033B] flex flex-col items-center p-3 sm:p-20 md:p-24 lg:p-28 xl:p-32">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl pb-10 sm:pb-12 md:pb-14 lg:pb-16 xl:pb-20">
            Benefits of Contribution
          </h1>
          <Contribution />
        </div>
      </div>









      <div className="text-center p">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold mb-8">
          Our Sponsors
        </h1>
        <div className="flex flex-wrap justify-center gap-8 items-center pb-32">
          <div className="sm:w-1/2 md:w-1/3 lg:w-1/4">
            <Image
              src="/image 1064.png"
              alt="Sponsor 1"
              layout="responsive"
              width={616}
              height={175}
              className="object-contain"
            />
          </div>
          <div className=" sm:w-1/2 md:w-1/3 lg:w-1/4">
            <Image
              src="/image 1070.png"
              alt="Sponsor 2"
              layout="responsive"
              width={522}
              height={208}
              className="object-contain"
            />
          </div>
          <div className="sm:w-1/2 md:w-1/3 lg:w-1/4">
            <Image
              src="/image 1079.png"
              alt="Sponsor 3"
              layout="responsive"
              width={566}
              height={361}
              className="object-contain"
            />
          </div>
        </div>
      </div>


      <div className="min-h-[450px] bg-white relative">
        <div className="z-10 p-4" style={{ transform: 'translateY(-50px)' }}>
          <MeetTeam />
        </div>
      </div>

      <div className='fixed bottom-6 right-5'>
        <button onClick={scrollToTop} className='p-3 rounded-full'>
          <Image src="/up.svg" width={50} height={50} alt="Scroll to top" />
        </button>
      </div>
    </div>
  );
}
