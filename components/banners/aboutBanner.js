import CustomTypingAnimation from "@/components/animations/customTypingAnimation";

export default function AboutBanner() {
    return (
        <>
            <section className={`bg-cover bg-center bg-no-repeat lg:bg-[url(/about/about_us_desk.png)] md:bg-[url(/about/about_us_mob.jpg)]`}>
                <div className="container">
                    <div className="w-full min-h-[65vh] xs:min-h-[90vh] flex justify-start items-center md:items-start md:py-10">
                        <div className="flex flex-col w-3/5 md:w-full">

                            <div className="md:w-full md:hidden">
                            <div className="2xl:min-h-[88px] xl:min-h-[78px] min-h-[74px] ml:min-h-[68px]">
                                <CustomTypingAnimation seq={['About  JP Advisory Group']} clsName={'2xl:text-40 xl:text-35 text-33 ml:text-30 mp:text-23 xs:text-20 font-bold mb-2 text-white'} wrap={'h1'} speed={30}/>
                            </div>
                            <div className="2xl:min-h-[120px] xl:min-h-[102px] min-h-[96px] ml:min-h-[90px]">
                                <CustomTypingAnimation seq={['Enhancing digital inclusivity and innovation with a resilient, high-capacity network that bridges the digital divide and drives unrestricted growth']} speed={90} clsName={'2xl:text-20 xl:text-17 text-16 ml:text-15 mp:text-14 xs:text-p text-white'} wrap={'h2'} />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}