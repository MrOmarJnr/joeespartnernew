import React from 'react';
import Reveal from "@/components/animations/reveal";

export default function ContactBanner() {
    return (
        <>
            <section className={`relative overflow-hidden`}>
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat bg-[url(/contact/contact_us_desk.webp)] md:bg-[url(/contact/contact_us_mob.webp)] hover:scale-110 transition-transform duration-[10s] ease-linear"></div>
                <div className="container">
                    <div className="relative z-10 w-full min-h-[65vh] xs:min-h-[90vh] flex justify-start items-center md:py-10">
                        <div className="flex flex-col w-3/5 md:w-full">
                            {/*<h2 className="2xl:text-30 xl:text-27 text-25 ml:text-23 mp:text-17 xs:text-14">From Ghana to Africa</h2>*/}
                            <Reveal>
                                <h1 className="2xl:text-40 xl:text-35 text-33 ml:text-30 mp:text-23 xs:text-20 font-bold mb-2 text-white">Contact us</h1>
                            </Reveal>
                            {/*<h2 className="2xl:text-20 xl:text-17 text-16 ml:text-15 mp:text-14 xs:text-p text-blue-182146">Enhancing digital inclusivity and innovation with a resilient, high-capacity network that bridges the digital divide and drives unrestricted growth</h2>*/}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}