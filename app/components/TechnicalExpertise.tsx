import React from "react";

const TechnicalExpertise: React.FC = () => {
  return (
    <section className="">
      <section className="flex items-center bg-[#00091f] py-20">
        <div className="flex flex-col md:flex-row text-white max-w-7xl mx-auto px-6">
          <div className="md:w-1/3 font-sans font-medium flex justify-center md:justify-start mb-6 md:mb-0">
            <h4 className="text-blue-400 text-sm uppercase tracking-wider">TECHNICAL EXPERTISE</h4>
          </div>
          <div className="md:w-2/3 flex justify-center md:justify-start">
            <p className="text-xl md:text-2xl font-sans leading-relaxed">
              We specialize in AI, cloud engineering, blockchain, IoT, data
              analytics, and automation — building scalable, secure, and
              high-performance digital systems. Our expertise helps businesses
              accelerate innovation, optimize operations, and stay competitive
              in a rapidly evolving technological landscape.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col">
        <img
          src="/award__2.png"
          alt="Award recognition"
          className="w-full h-full object-cover"
        />
      </section>
      <section className="relative flex flex-col bg-[#00091f] py-20 font-sans text-white">
        <div className="flex flex-col justify-center items-center">
          <div className="font-sans flex justify-start font-medium text-3xl md:text-4xl my-12 md:my-20 w-11/12 md:w-9/12 px-5">
            <h4 className="capitalize">FLOWGRAMER AI SUCCESS STATS</h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 w-11/12 md:w-9/12 px-5 gap-4 md:gap-0">
            {[
              { header: "FOUNDED", value: "2023" },
              { header: "LOCATIONS", value: "03" },
              { header: "ACTIVE CLIENTS", value: "50+" },
              { header: "PROJECTS DELIVERED", value: "100+" },
            ].map((v, idx) => (
              <div
                key={idx}
                className="px-4 md:px-5 flex flex-col justify-around h-40 md:h-52 border border-gray-700 hover:bg-blue-800 transition-colors duration-150 ease-in-out"
              >
                <p className="py-2 font-medium text-xs md:text-sm text-gray-400">{v.header}</p>
                <h1 className="text-4xl md:text-[70px] font-sans font-bold text-blue-400">{v.value}</h1>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default TechnicalExpertise;
