"use client"
import Reveal from "@/components/animations/reveal";
import CustomTypingAnimation from "../animations/customTypingAnimation";
import Image from "next/image";

export default function HomeBanner() {
  return (
    <>
      <section className={`relative overflow-hidden border-b-8 border-white`}>
        <div
          className="animate-[scaleUpDown1_15s_infinite_linear] absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat lg:bg-[url(/home/jp-banner.jpg)] md:bg-[url(/home/jp-banner-mobile.jpg)]"
        ></div>
        <div className="container">
          <div className="relative z-10 w-full min-h-[87vh] flex justify-between items-center md:items-start md:py-10 md:flex-col md:justify-center">
            <div className="flex w-full md:flex-col items-center justify-between gap-x-32 md:justify-center md:gap-6">
              {/* logo */}
              <div className="w-1/2 flex  justify-end md:w-full md:ml-12 md:justify-center">
                <Reveal delayTime={0.15}>
                  <Image
                    src="/home/Group 2.png"
                    width={600}
                    height={335}
                    className="max-w-none md:w-[80%]"
                    alt="homebanner"
                  />
                </Reveal>
              </div>
              {/* text info */}
              <div className="w-1/2 md:w-full md:hidden">
                <Reveal delayTime={0.3}>
                  <CustomTypingAnimation
                    seq={[
                      'From Ghana to Africa, Joees and Partners Limited is connecting communities through strategic project development',
                      'We provide exceptional logistics and project management services tailored to the unique needs of our clients',
                      'We collaborate with government entities and private sector partners, leveraging our expertise in logistics and project management to deliver innovative and reliable infrastructure solutions.'
                    ]}
                    clsName="2xl:text-20 xl:text-15 text-18 ml:text-30 mp:text-23 xs:text-20 font-normal mb-2 text-blue-182146"
                    wrap="h1"
                    speed={30}
                    loop
                  />
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
