"use client"
import Image from "next/image";

const PromoBanner = () => {
  return (
    <section className="relative w-[50%] items-center bg-white/10">
      <div className="grid md:grid-cols-2 items-center w-full">
        {/* Left Text Section */}
        {/* <div className="bg-gray-700 text-white flex flex-col justify-center items-center py-12 px-6">
          <h2 className="text-xl md:text-3xl font-light">NOW ON</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold italic">SALE</h1>
        </div> */}

        {/* Right Image Section */}
        <div className="p-4">
          <div className="border-4 border-white">
            <Image 
              src="/promo/sale.png" 
              alt="Promo Sale" 
              width={800} 
              height={400} 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
