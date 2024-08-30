import React from 'react';
import Image from 'next/image';

const MeetTeam = () => {
  return (
    <div className="max-w-4xl p-4 border-2 border-black bg-white rounded-lg mx-auto">
      <h2 className="text-3xl text-black font-bold mb-4">Meet Our Team</h2>
      <div className="flex flex-col lg:flex-row">

        <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
          <div className="space-y-2">
            <button className="flex justify-between items-center w-full p-3 bg-black text-white font-semibold rounded-lg">
              <span>Helm</span>
              <Image
                src="/helm.svg" 
                alt="Star Icon"
                width={20}
                height={20}
              />
            </button>
            <button className="w-full p-3 bg-gray-100 text-black font-semibold rounded-lg ">
              Aerodynamics
            </button>
            <button className="w-full p-3 bg-gray-100 text-black font-semibold rounded-lg ">
              Vehicle Dynamics
            </button>
            <button className="w-full p-3 bg-gray-100 text-black font-semibold rounded-lg ">
              Structures
            </button>
            <button className="w-full p-3 bg-gray-100 text-black font-semibold rounded-lg ">
              Marketing
            </button>
            <button className="w-full p-3 bg-gray-100 text-black font-semibold rounded-lg ">
              Web Team
            </button>
          </div>
        </div>

        <div className="w-full lg:w-2/3 bg-gray-200 rounded-lg lg:ml-4 flex items-center">
          <div className="w-2/3">
            <Image src="/image 1075.png" layout="responsive" width={658} height={448} className="rounded-l-lg" />
          </div>
          <div className="w-1/3">
            <Image src="/image 1076.png" layout="responsive" width={348} height={448} className="rounded-r-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTeam;
