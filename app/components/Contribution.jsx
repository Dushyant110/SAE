import React from 'react'
import Image from 'next/image';

const Contribution = () => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-md max-w-4xl mx-auto text-[#02033B]">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Image src="/img1.svg" alt="Exposure" width={64} height={64} />
        </div>
        <h3 className="text-xl font-bold mb-2">Exposure</h3>
        <p>Our advanced spyware detection engine can identify if a device contains spyware or bugging software.</p>
      </div>

      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Image src="/img2.svg" alt="R&D and Innovation" width={64} height={64} />
        </div>
        <h3 className="text-xl font-bold mb-2">R&D and Innovation</h3>
        <p>Find malicious keyboards installed on your device that could allow someone to record things you type (e.g. passwords).</p>
      </div>

      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Image src="/img3.svg" alt="Networking" width={64} height={64} />
        </div>
        <h3 className="text-xl font-bold mb-2">Networking</h3>
        <p>Check which apps can access your location, microphone, or camera. Get alerted if a known tracking app is installed.</p>
      </div>

      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Image src="/img4.svg" alt="Enhancing Projects and Education" width={64} height={64} />
        </div>
        <h3 className="text-xl font-bold mb-2">Enhancing Projects and Education</h3>
        <p>Analyze your operating system for signs of tampering that could compromise security, such as Jailbreaking.</p>
      </div>

      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Image src="/img5.svg" alt="Opportunities" width={64} height={64} />
        </div>
        <h3 className="text-xl font-bold mb-2">Opportunities</h3>
        <p>Our intelligent scan will either safely remove threats for you or provide easy-to-follow instructions.</p>
      </div>

      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Image src="/img6.svg" alt="Practical Applications" width={64} height={64} />
        </div>
        <h3 className="text-xl font-bold mb-2">Practical Applications</h3>
        <p>We create easy-to-use apps that can check your device for vulnerabilities in a matter of minutes.</p>
      </div>
    </div>
  </div>
);
};

export default Contribution
