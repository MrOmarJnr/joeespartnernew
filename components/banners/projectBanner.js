import CustomTypingAnimation from "@/components/animations/customTypingAnimation";

export default function ProjectBanner() {
    return (
        <>
            <section className="relative bg-cover bg-center bg-no-repeat bg-blue-0B112B/20 lg:bg-[url(/about/discussing-blueprint.jpg)] md:bg-[url(/projects/project-moible.png)]">
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-black/50"></div> {/* Semi-transparent black overlay */}

                <div className="container relative z-10"> {/* Ensure content is above the overlay */}
                    <div className="w-full min-h-[65vh] xs:min-h-[90vh] flex justify-start items-center md:items-start md:py-10">
                        <div className="flex flex-col w-3/5 md:w-full">
                        <div className="md:hidden">

                            <div className="2xl:min-h-[88px] xl:min-h-[78px] min-h-[74px] ml:min-h-[68px]">
                                <CustomTypingAnimation
                                    seq={['Projects Page']}
                                    clsName={'2xl:text-40 xl:text-35 text-33 ml:text-30 mp:text-23 xs:text-20 font-bold mb-2 text-yellow-100'}
                                    wrap={'h1'}
                                    speed={30}
                                    />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}