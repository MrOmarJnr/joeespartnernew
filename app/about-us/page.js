import Header from "@/components/navigation/header";
import Footer from "@/components/navigation/footer";
import AboutBanner from "@/components/banners/aboutBanner";
import Reveal from "@/components/animations/reveal";
import React from "react";
import {pagePath} from "@/components/navigation/pagePath";
import TeamsTab from "@/components/tabs/teamsTab";
import JsonLd from "@/components/metaTools/json-ld";
import Image from "next/image";

export const metadata = {
    title: pagePath.aboutUs.title,
    description: pagePath.aboutUs.description,
    keywords: pagePath.aboutUs.keyword,
    openGraph: {
        title: pagePath.aboutUs.title,
        description: pagePath.aboutUs.description,
    },
    alternates: {
        canonical: pagePath.aboutUs.src,
    },
}

export default function AboutUs() {
    const jsonLdWebpage = {
        "@context": "https://schema.org/",
        "@type": "WebPage",
        "name": pagePath.aboutUs.title,
        "description": pagePath.aboutUs.description,
        "url": `${pagePath.website.url}${pagePath.aboutUs.src}`,
        "publisher": {
            "@type": "WebSite",
            "name": pagePath.website.name
        }
    }
    const jsonLdTenu = {
        "@context": "https://schema.org/",
        "@type": "Person",
        "name": "TENU AWOONOR",
        "url": "",
        "image": "https://www.ngicgh.com/team/tenu_awoonor.webp",
        "jobTitle": "CEO",
        "worksFor": {
            "@type": "Organization",
            "name": pagePath.website.name
        }
    }
    const jsonLdMike = {
        "@context": "https://schema.org/",
        "@type": "Person",
        "name": "MIKE TSEYTLIN",
        "url": "",
        "image": "https://www.ngicgh.com/team/mike_tseytlin.webp",
        "jobTitle": "CTO",
        "worksFor": {
            "@type": "Organization",
            "name": pagePath.website.name
        }
    }
    const jsonLdPierre = {
        "@context": "https://schema.org/",
        "@type": "Person",
        "name": "PIERRE LIAUTAUD",
        "url": "",
        "image": "https://www.ngicgh.com/team/pierre_liautaud.webp",
        "jobTitle": "COO",
        "worksFor": {
            "@type": "Organization",
            "name": pagePath.website.name
        }
    }
    const jsonLdHarkirit = {
        "@context": "https://schema.org/",
        "@type": "Person",
        "name": "HARKIRIT SINGH",
        "url": "",
        "image": "https://www.ngicgh.com/team/harkirit_singh.webp",
        "jobTitle": "Executive Director, Advisor - Technology and Strategy",
        "worksFor": {
            "@type": "Organization",
            "name": pagePath.website.name
        }
    }
    const jsonLdAdemola = {
        "@context": "https://schema.org/",
        "@type": "Person",
        "name": "ADEMOLA ADEFARASIN",
        "url": "",
        "image": "https://www.ngicgh.com/team/ademola_adefarasin.webp",
        "jobTitle": "External advisor, Investments",
        "worksFor": {
            "@type": "Organization",
            "name": pagePath.website.name
        }
    }
    const jsonLdManmohan = {
        "@context": "https://schema.org/",
        "@type": "Person",
        "name": "MANMOHAN S. KALSY",
        "url": "",
        "image": "https://www.ngicgh.com/team/manmohan_kalsy.webp",
        "jobTitle": "External advisor, Corporate Governance",
        "worksFor": {
            "@type": "Organization",
            "name": pagePath.website.name
        }
    }
    return (
        <>
            <JsonLd schema={jsonLdWebpage}/>
            <JsonLd schema={jsonLdTenu}/>
            <JsonLd schema={jsonLdMike}/>
            <JsonLd schema={jsonLdPierre}/>
            <JsonLd schema={jsonLdHarkirit}/>
            <JsonLd schema={jsonLdAdemola}/>
            <JsonLd schema={jsonLdManmohan}/>
            <Header/>
            <main className=" bg-[#383838]">
                <AboutBanner/>
                <section className="py-24 bg-[#7e7d7d] xl:py-40 md:py-20">
                <div className="container mx-auto max-w-7xl px-6">
                  <Reveal>
                    <h2 className="text-5xl md:text-3xl font-bold text-white text-center leading-tight">
                      Welcome to Joees and Partners Limited
                    </h2>
                  </Reveal>
                  
                  <div className="mt-12 flex md:flex-col justify-between items-start gap-12">
                    {/* Left Column */}
                    <Reveal className="w-1/2 md:w-full space-y-6">
                      <p className="text-xl leading-relaxed text-gray-700">
                        At <strong>Joees and Partners</strong>, we are a dynamic company with diversified divisions dedicated to delivering 
                        exceptional services across multiple industries. Our strong presence in <span className="text-[#292828] font-semibold">logistics, real estate, project consultancy, and supplies</span> 
                        enables us to be the trusted partner of choice for businesses and individuals seeking expert solutions.
                      </p>
                      <p className="text-xl leading-relaxed text-gray-700">
                        As a pioneering force in the <strong>Ghanaian business landscape</strong>, we offer a comprehensive suite of 
                        logistics, project management, and business support services, empowering businesses to thrive in today&apos;s 
                        dynamic environment.
                      </p>
                    </Reveal>

                    {/* Right Column */}
                    <Reveal delayTime={0.2} className="w-1/2 md:w-full space-y-6">
                      <p className="text-xl leading-relaxed text-gray-700">
                        Driven by a clear vision and a commitment to <span className="text-[#292828] font-semibold">excellence</span>, 
                        we continually redefine industry standards through <strong>innovation, reliability, and client-centric solutions</strong>.
                      </p>
                      <p className="text-xl leading-relaxed text-gray-700">
                        We believe in forging long-term partnerships built on <span className="font-semibold text-[#292828]">trust, integrity, and success</span>.  
                        Our approach blends strategic insight with hands-on execution, ensuring that every project and partnership achieves outstanding results.
                      </p>
                    </Reveal>
                  </div>
                </div>
    </section>


                {/* Vision and Mission */}

                <section className="relative overflow-hidden 2xl:py-64 xl:py-48 py-40 md:py-32">
                    <div
                        className="absolute top-0 left-0 right-0 bottom-0 bg-[url(/about/working-housing-project.jpg)] bg-cover bg-center bg-no-repeat animate-[scaleUpDown3_30s_infinite_linear]"></div>
                    <div className="container">
                        <div className="flex justify-between">

                            <div
                                className="flex flex-col p-10 mp:p-5 bg-black bg-opacity-70 drop-shadow-[0px_3px_6px_#00000029] xl:w-[42%] w-[45%] md:w-3/4 ml:w-full">
                                
                                <Reveal delayTime={0.15}>
                                <h2 className="2xl:mb-5 mb-3 text-white">Mission</h2>
                                    <p className="2xl:text-15 text-p">To be the leading logistics and project company, 
                                        delivering innovative and reliable solutions that exceed client expectations, 
                                        while fostering sustainable growth and contributing to the development of communities.</p>
                                </Reveal>
                            </div>
                            <div
                                className="flex flex-col p-10 mp:p-5 bg-black bg-opacity-70 drop-shadow-[0px_3px_6px_#00000029] xl:w-[42%] w-[45%] md:w-3/4 ml:w-full">
                                <Reveal>
                                <h2 className="2xl:mb-5 mb-3 text-white">Vision</h2>
                                </Reveal>
                                <Reveal delayTime={0.15}>
                                    <p className="2xl:text-15 text-p">To be the leading logistics and project company, 
                                        delivering innovative and reliable solutions that exceed client expectations, 
                                        while fostering sustainable growth and contributing to the development of communities.</p>
                                </Reveal>
                            </div>

                        </div>
                    </div>
                  </section>

                  {/* Values */}

                  <section className="bg-[#7e7d7d] py-12 sm:py-16 px-2 sm:px-6 lg:px-8 relative overflow-hidden">
                  {/* Animated background elements */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute w-48 sm:w-64 h-48 sm:h-64 bg-[#ff0000]/10 rounded-full -top-24 sm:-top-32 -left-24 sm:-left-32 mix-blend-overlay"></div>
                    <div className="absolute w-48 sm:w-64 h-48 sm:h-64 bg-white rounded-full -bottom-24 sm:-bottom-32 -right-24 sm:-right-32 mix-blend-overlay"></div>
                  </div>

                  <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-10 sm:mb-16">
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Our Core Values
                        <span className="block w-12 sm:w-16 h-1 sm:h-2 bg-[#5a5959] mx-auto mt-3 sm:mt-4 rounded-full"></span>
                      </h2>
                      <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto px-2">
                        The foundation of our success lies in these fundamental principles that guide every decision and action
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                      {/* Value Card - Customer Focus */}
                      <div className="group bg-[#5a5959]/5 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl border border-white/10 hover:border-[#ff0000]/30 transition-all duration-300 hover:-translate-y-2">
                        <div className="w-12 sm:w-16 h-12 sm:h-16 bg-[#ff0000]/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                          <svg className="w-6 sm:w-8 h-6 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                          </svg>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Customer Centricity</h3>
                        <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                          Clients are our compass. We tailor solutions through active listening and anticipate needs before they arise.
                        </p>
                      </div>

                      {/* Value Card - Integrity */}
                      <div className="group bg-white/5 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl border border-white/10 hover:border-[#ff0000]/30 transition-all duration-300 hover:-translate-y-2">
                        <div className="w-12 sm:w-16 h-12 sm:h-16 bg-[#ff0000]/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                          <svg className="w-6 sm:w-8 h-6 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Uncompromised Integrity</h3>
                        <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                          We maintain ethical rigor through transparent operations and accountability at all levels.
                        </p>
                      </div>

                      {/* Value Card - Innovation */}
                      <div className="group bg-white/5 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl border border-white/10 hover:border-[#ff0000]/30 transition-all duration-300 hover:-translate-y-2">
                        <div className="w-12 sm:w-16 h-12 sm:h-16 bg-[#ff0000]/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                          <svg className="w-6 sm:w-8 h-6 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                          </svg>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Bold Innovation</h3>
                        <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                          We foster creative disruption through continuous learning and calculated risk-taking.
                        </p>
                      </div>

                      {/* Value Card - Collaboration */}
                      <div className="group bg-white/5 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl border border-white/10 hover:border-[#ff0000]/30 transition-all duration-300 hover:-translate-y-2">
                        <div className="w-12 sm:w-16 h-12 sm:h-16 bg-[#ff0000]/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                          <svg className="w-6 sm:w-8 h-6 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                          </svg>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Synergistic Collaboration</h3>
                        <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                          Cross-functional teamwork powered by mutual respect and shared vision drives extraordinary outcomes.
                        </p>
                      </div>

                      {/* Value Card - Excellence */}
                      <div className="group bg-white/5 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl border border-white/10 hover:border-[#ff0000]/30 transition-all duration-300 hover:-translate-y-2 sm:col-span-2 lg:col-span-2">
                        <div className="w-12 sm:w-16 h-12 sm:h-16 bg-[#ff0000]/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                          <svg className="w-6 sm:w-8 h-6 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                          </svg>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Operational Excellence</h3>
                        <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                          We implement rigorous quality controls and continuous improvement processes to deliver world-class standards.
                        </p>
                      </div>
                    </div>
                  </div>
        </section>
                            
                {/* Divisions */}

                <section className="py-6 sm:py-12 md:py-16 lg:py-24 xl:py-48 bg-[#aca9a9] bg-opacity-10">
      <div className="container mx-auto px-4 sm:px-6">
        <Reveal>
          <h2 className="mb-4 sm:mb-6 md:mb-9 text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#333333]">
            Our Divisions
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Joees Logistics */}
          <Reveal>
            <div className="bg-blue-182146/20 rounded-lg shadow-lg overflow-hidden flex flex-col">
              <div className="relative w-full h-40 sm:h-48 md:h-56">
                <Image
                  src="/about/1.jpg"
                  alt="Joees Logistics"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6 flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-600 mb-3">
                  Joees Logistics
                </h3>
                <p className="text-gray-800 text-sm sm:text-base md:text-lg line-clamp-3">
                  Providing tailored logistics solutions for businesses of all
                  sizes, from transportation and warehousing to supply chain
                  management services.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Joees Real Estate */}
          <Reveal>
            <div className="bg-blue-182146/20 rounded-lg shadow-lg overflow-hidden flex flex-col">
              <div className="relative w-full h-40 sm:h-48 md:h-56">
                <Image
                  src="/about/2.jpg"
                  alt="Joees Real Estate"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6 flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-600 mb-3">
                  Joees Real Estate
                </h3>
                <p className="text-gray-800 text-sm sm:text-base md:text-lg line-clamp-3">
                  Offering a comprehensive range of real estate services,
                  including property development, sales, and rentals...
                </p>
              </div>
            </div>
          </Reveal>

          {/* Joees Project Consultancy */}
          <Reveal>
            <div className="bg-blue-182146/20 rounded-lg shadow-lg overflow-hidden flex flex-col">
              <div className="relative w-full h-40 sm:h-48 md:h-56">
                <Image
                  src="/about/3.jpg"
                  alt="Joees Project Consultancy"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6 flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-600 mb-3">
                  Joees Project Consultancy
                </h3>
                <p className="text-gray-800 text-sm sm:text-base md:text-lg line-clamp-3">
                  Delivering expert project management and consultancy services
                  to help clients achieve their goals...
                </p>
              </div>
            </div>
          </Reveal>

          {/* Joees Supplies */}
          <Reveal>
            <div className="bg-blue-182146/20 rounded-lg shadow-lg overflow-hidden flex flex-col">
              <div className="relative w-full h-40 sm:h-48 md:h-56">
                <Image
                  src="/about/4.png"
                  alt="Joees Supplies"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6 flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-600 mb-3">
                  Joees Supplies
                </h3>
                <p className="text-gray-800 text-sm sm:text-base md:text-lg line-clamp-3">
                  Supplying a wide range of products and materials to support
                  businesses and industries across various sectors.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
                
 

   



                {/*<section className="bg-[url(/about/ribbon.webp)] bg-center bg-no-repeat bg-cover md:bg-bottom">*/}
                {/*    <div className="container">*/}
                {/*        <Reveal name={'scaleUp'} className="flex justify-center items-center py-24">*/}
                {/*            <h2 className="2xl:text-30 xl:text-27 text-25 ml:text-23 mp:text-17 xs:text-14 drop-shadow-[0px_3px_11px_#000000] text-center w-3/5 md:w-full">Next*/}
                {/*                Gen Infraco is a subsidiary of Ascend Digital Solutions, Ghana.</h2>*/}
                {/*        </Reveal>*/}
                {/*    </div>*/}
                {/*</section>*/}
                <TeamsTab/>
            </main>
            <Footer/>
        </>
    );
}


export const CredibilitySection = [
  {
    title: 'Procurement and Logistics Expertise',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.934 80.316">
        <path
          id="Emerging_market_leader"
          d="M21.3,66.425H12.7a1.279,1.279,0,0,1-1.272-1.416,26.466,26.466,0,0,1,19.6-22.736,14,14,0,1,1,13.369,0A26.469,26.469,0,0,1,63.531,62.189h2.32l2.47-7.6a2.055,2.055,0,0,1,3.91,0l2.47,7.6h7.992A2.055,2.055,0,0,1,83.9,65.907l-6.466,4.7,2.47,7.6a2.055,2.055,0,0,1-3.163,2.3l-6.466-4.7L63.81,80.5a2.055,2.055,0,0,1-3.163-2.3l2.47-7.6-5.752-4.179H54.119a1.279,1.279,0,0,1,.425.952v4.209a1.279,1.279,0,0,1-.82,1.194l-1.967.757a14.627,14.627,0,0,1-1.247,3.007l.855,1.93A1.279,1.279,0,0,1,51.1,79.9l-2.976,2.976a1.279,1.279,0,0,1-1.423.265l-1.928-.854a14.475,14.475,0,0,1-3.009,1.247L41.008,85.5a1.279,1.279,0,0,1-1.194.82H35.605a1.279,1.279,0,0,1-1.194-.82l-.757-1.966a14.594,14.594,0,0,1-3.011-1.248l-1.93.855a1.279,1.279,0,0,1-1.423-.265L24.315,79.9a1.279,1.279,0,0,1-.264-1.424l.857-1.927a14.591,14.591,0,0,1-1.248-3.007l-1.968-.757a1.279,1.279,0,0,1-.82-1.194V67.378a1.279,1.279,0,0,1,.425-.952ZM37.708,43.98A23.884,23.884,0,0,0,14.166,63.867H24.207a14.521,14.521,0,0,1,.7-1.451l-.857-1.928a1.279,1.279,0,0,1,.264-1.424l2.976-2.976a1.279,1.279,0,0,1,1.424-.264l1.928.857a14.519,14.519,0,0,1,3.008-1.246l.761-1.971a1.28,1.28,0,0,1,1.194-.819h4.209a1.279,1.279,0,0,1,1.194.821l.757,1.97a14.514,14.514,0,0,1,3.007,1.246l1.928-.857a1.279,1.279,0,0,1,1.424.264L51.1,59.064a1.279,1.279,0,0,1,.265,1.423l-.854,1.928a14.467,14.467,0,0,1,.7,1.452h4.627a2.056,2.056,0,0,1,2.02-1.678h3.046a23.879,23.879,0,0,0-23.2-18.209Zm21.7,20.768,5.509,4a2.055,2.055,0,0,1,.747,2.3l-2.1,6.476,5.509-4a2.056,2.056,0,0,1,2.416,0l5.509,4-2.1-6.476a2.055,2.055,0,0,1,.747-2.3l5.509-4H74.335a2.055,2.055,0,0,1-1.955-1.42l-2.1-6.476-2.1,6.476a2.055,2.055,0,0,1-1.955,1.42Zm-21.7-23.326A11.439,11.439,0,1,0,26.275,29.982,11.46,11.46,0,0,0,37.708,41.421Zm1.9,15.543L38.935,55.2H36.483l-.68,1.763a1.28,1.28,0,0,1-.9.784A11.96,11.96,0,0,0,31.393,59.2a1.279,1.279,0,0,1-1.191.08l-1.723-.766-1.733,1.733.766,1.723a1.279,1.279,0,0,1-.08,1.191,12.056,12.056,0,0,0-1.46,3.519,1.28,1.28,0,0,1-.785.9l-1.757.676v2.452l1.757.676a1.279,1.279,0,0,1,.784.895,12.036,12.036,0,0,0,1.459,3.514,1.279,1.279,0,0,1,.081,1.192l-.766,1.724,1.734,1.734,1.724-.764a1.279,1.279,0,0,1,1.186.079,12.052,12.052,0,0,0,3.518,1.457,1.279,1.279,0,0,1,.9.785l.676,1.757h2.452L39.612,82a1.279,1.279,0,0,1,.9-.785,11.909,11.909,0,0,0,3.51-1.454,1.279,1.279,0,0,1,1.191-.082l1.724.764,1.735-1.735-.764-1.724a1.279,1.279,0,0,1,.079-1.186,12.068,12.068,0,0,0,1.457-3.515,1.28,1.28,0,0,1,.785-.9l1.757-.676V68.256l-1.757-.676a1.28,1.28,0,0,1-.785-.9,11.939,11.939,0,0,0-1.455-3.515,1.279,1.279,0,0,1-.081-1.189l.764-1.724-1.734-1.734-1.723.766a1.279,1.279,0,0,1-1.191-.08A11.96,11.96,0,0,0,40.51,57.75a1.279,1.279,0,0,1-.9-.786Zm-1.9,3.9a8.623,8.623,0,1,1-8.621,8.621A8.622,8.622,0,0,1,37.708,60.859Zm0,2.559a6.065,6.065,0,1,0,6.067,6.062A6.06,6.06,0,0,0,37.708,63.418ZM86,18.366,78.83,9.916l-7.173,8.45h2.58a1.279,1.279,0,0,1,1.279,1.279V42.216a1.279,1.279,0,1,1-2.559,0V20.924H70.24a1.9,1.9,0,0,1-1.447-3.138L77.378,7.673a1.9,1.9,0,0,1,2.9-.009l.006.007L88.87,17.79a1.9,1.9,0,0,1-1.45,3.135H84.7V35.13a1.279,1.279,0,0,1-2.559,0V19.645a1.279,1.279,0,0,1,1.279-1.279ZM82.14,38.673a1.279,1.279,0,1,1,2.559,0v3.543a1.279,1.279,0,0,1-2.559,0Zm0,7.086a1.279,1.279,0,0,1,2.559,0v3.456a1.279,1.279,0,0,1-2.559,0Zm-6.623,3.456a1.279,1.279,0,0,1-2.559,0V45.759a1.279,1.279,0,0,1,2.559,0ZM67.47,32.229l-5.769-6.8-5.769,6.8h1.825a1.279,1.279,0,0,1,1.279,1.279V45.089a1.279,1.279,0,1,1-2.559,0v-10.3H54.324a1.814,1.814,0,0,1-1.38-2.993l7.371-8.684a1.815,1.815,0,0,1,2.763-.009l.006.007L70.46,31.8a1.816,1.816,0,0,1-1.382,2.99H66.921V52.693a1.279,1.279,0,1,1-2.559,0V33.508a1.279,1.279,0,0,1,1.279-1.279Z"
          transform="translate(-10.919 -6.5)"
          fill="currentColor"
          stroke="rgba(0,0,0,0)"
          strokeMiterlimit="10"
          strokeWidth="1"
          fillRule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: 'Innovative Financial Solutions',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79.316 79.317">
        <g id="Rapid_pace_of_growth" transform="translate(-25.001 -25)">
          <path
            id="Path_5745"
            d="M98.1,94.84a1.362,1.362,0,0,1-.963-2.324l22.5-22.5a1.361,1.361,0,0,1,1.925,0l9.762,9.761L145.313,28.3,93.839,42.282l9.762,9.762a1.361,1.361,0,0,1,0,1.925l-22.5,22.5a1.361,1.361,0,0,1-1.925-1.925l21.541-21.542-10.46-10.46a1.361,1.361,0,0,1,.606-2.276l56.034-15.221a1.361,1.361,0,0,1,1.671,1.671L133.342,82.754a1.361,1.361,0,0,1-2.276.605L120.606,72.9,99.065,94.441A1.358,1.358,0,0,1,98.1,94.84Z"
            transform="translate(-44.294 0)"
            fill="currentColor"
          />
          <path
            id="Path_5746"
            d="M109.385,171.768a1.362,1.362,0,0,1-.963-2.324L136.3,141.566a1.361,1.361,0,0,1,1.925,0l2.968,2.967,4.929-18.144-18.144,4.929,2.967,2.967a1.361,1.361,0,0,1,0,1.925l-27.878,27.877a1.361,1.361,0,0,1-1.925-1.925l26.915-26.915-3.665-3.666a1.361,1.361,0,0,1,.606-2.276l22.7-6.167a1.361,1.361,0,0,1,1.67,1.67l-6.167,22.7a1.361,1.361,0,0,1-2.276.605l-3.666-3.666-26.915,26.915A1.358,1.358,0,0,1,109.385,171.768Z"
            transform="translate(-62.392 -80.801)"
            fill="currentColor"
          />
          <path
            id="Path_5747"
            d="M109.972,159.778a1.362,1.362,0,0,1-.963-2.324l11.8-11.8a1.361,1.361,0,0,1,1.925,1.925l-11.8,11.8A1.356,1.356,0,0,1,109.972,159.778Z"
            transform="translate(-68.872 -99.062)"
            fill="currentColor"
          />
          <path
            id="Path_5748"
            d="M26.363,188.02A1.362,1.362,0,0,1,25.4,185.7L38.591,172.5a1.361,1.361,0,0,1,1.925,1.925L27.325,187.621A1.357,1.357,0,0,1,26.363,188.02Z"
            transform="translate(0 -121.176)"
            fill="currentColor"
          />
          <path
            id="Path_5749"
            d="M64.878,249.169a1.361,1.361,0,0,1-.963-2.324l2.318-2.318a1.361,1.361,0,0,1,1.925,1.925l-2.318,2.318A1.357,1.357,0,0,1,64.878,249.169Z"
            transform="translate(-31.727 -180.505)"
            fill="currentColor"
          />
          <path
            id="Path_5750"
            d="M273.73,323.538a1.362,1.362,0,0,1-.963-2.324l11.8-11.8a1.361,1.361,0,0,1,1.925,1.925l-11.8,11.8A1.358,1.358,0,0,1,273.73,323.538Z"
            transform="translate(-203.767 -233.957)"
            fill="currentColor"
          />
          <path
            id="Path_5751"
            d="M238.971,400.63a1.362,1.362,0,0,1-.963-2.324l13.191-13.19a1.361,1.361,0,1,1,1.925,1.925l-13.191,13.19A1.358,1.358,0,0,1,238.971,400.63Z"
            transform="translate(-175.134 -296.313)"
            fill="currentColor"
          />
          <path
            id="Path_5752"
            d="M228.637,412.929a1.362,1.362,0,0,1-.963-2.324l2.318-2.318a1.361,1.361,0,0,1,1.925,1.925L229.6,412.53A1.356,1.356,0,0,1,228.637,412.929Z"
            transform="translate(-166.621 -315.401)"
            fill="currentColor"
          />
        </g>
      </svg>
    ),
  },
  {
    title: 'Comprehensive Project Management',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.042 85.042">
        <defs>
          <clipPath id="clip-path">
            <path
              id="path924"
              d="M0-682.665H85.042v85.042H0Z"
              transform="translate(0 682.665)"
              fill="currentColor"
            />
          </clipPath>
        </defs>
        <g id="_1.3_billion_people" transform="translate(-1400.479 -2923.958)">
          <g id="g918" transform="translate(1400.479 2923.958)">
            <g id="g920" transform="translate(0 0)">
              <g id="g922" transform="translate(0 0)" clipPath="url(#clip-path)">
                <g id="g928" transform="translate(2.649 -0.006)">
                  <path
                    id="path930"
                    d="M-220.093-420.657a5.343,5.343,0,0,1-1.57-.232c-3.008-.919-3.7-2.049-3.968-3.944a3.587,3.587,0,0,0-.6-1.719,8.718,8.718,0,0,1-1.641-4.357,9.155,9.155,0,0,0-1.755-4.451,11.231,11.231,0,0,1-1.673-7.666,1.661,1.661,0,0,1,1.948-1.312,1.661,1.661,0,0,1,1.312,1.948,8.01,8.01,0,0,0,1.225,5.263,12.328,12.328,0,0,1,2.239,5.809,5.479,5.479,0,0,0,1.11,2.926,6.832,6.832,0,0,1,1.119,3.088,2.974,2.974,0,0,0,.105.544s.194.282,1.544.695c1.933.59,4.966-1.888,7.4-3.879a31.192,31.192,0,0,1,3.245-2.442,5.936,5.936,0,0,0,2.092-2.62,9.172,9.172,0,0,0,.324-2.78c-1.133-4.56,1.755-5.964,3.481-6.8,1.4-.679,1.894-1,2-1.883a7.4,7.4,0,0,0-.087-2.381,18.394,18.394,0,0,1-.255-3.07c0-8.324.676-9.654,3.827-12.2a28.351,28.351,0,0,0,4.7-4.644l.192-.235c2.387-2.926,2.925-3.585,3.382-6.934-.23.07-.466.147-.663.211-1.922.626-5.139,1.675-7.227-.794l-.443-.525c-1.063-1.261-1.063-1.261-1.511-1.5-.39-.206-.981-.517-2.029-1.182-1.835-1.164-2.377-3.632-2.812-5.615a11.029,11.029,0,0,0-.507-1.872,3.035,3.035,0,0,0-.921-1.008,10.872,10.872,0,0,1-2.741-3.264,6.808,6.808,0,0,1-.567-4.445,5.108,5.108,0,0,0-.014-2.134c-.392.03-.9.086-1.316.131-2.234.244-5.013.547-6.978-.194a18.26,18.26,0,0,0-2.724-.74,2.33,2.33,0,0,1-.905,2.718c-2,1.352-3.836.32-4.936-.3a4.874,4.874,0,0,0-.99-.475c-1.632-.373-4.237-2.012-4.681-4l-.063-.284c-.378-1.709-.436-1.972-1.653-2.633a5.188,5.188,0,0,0-4.438-.082c-.116.06-.261.165-.437.284A9.588,9.588,0,0,1-242-500.128a6.891,6.891,0,0,1-2.321.069,4.541,4.541,0,0,0-1.486.012c-1.947.559-3.3,1.645-3.3,2.271,0,3.6-1.9,4.363-3.431,4.973a6.868,6.868,0,0,0-3.612,2.758c-.157.224-.3.423-.438.607-.769,1.049-.976,1.33-.976,4.263a12.5,12.5,0,0,1-.8,4.044c-.7,2.156-1.311,4.018.885,8.119.637,1.1,5.661,5.3,7.2,5.678-2.115,1.513-1.966,2.66-2.268,2.66-3.355,0-7.205-5.543-7.862-6.77-2.865-5.351-1.935-8.2-1.114-10.717a9.412,9.412,0,0,0,.635-3.014c0-3.691.42-4.593,1.619-6.228.122-.166.254-.346.4-.549a10.169,10.169,0,0,1,5.1-3.937c1.264-.5,1.34-.535,1.34-1.888,0-2.821,2.949-4.672,5.709-5.464a7.215,7.215,0,0,1,2.7-.127,4.615,4.615,0,0,0,1.224.016,6.622,6.622,0,0,0,2-1.033,8.3,8.3,0,0,1,.793-.494,8.428,8.428,0,0,1,7.529.125c2.547,1.384,2.884,2.907,3.311,4.834l.061.277a4.238,4.238,0,0,0,2.18,1.485,7.1,7.1,0,0,1,1.874.816c.3.169.53.29.708.373a2.751,2.751,0,0,1,.524-2.452c1.3-1.606,4.87-.572,6.882.187,1.221.461,3.763.184,5.445,0,2.233-.244,3.354-.366,4.083.658a6.579,6.579,0,0,1,.906,5.039,3.853,3.853,0,0,0,.159,2.416,7.633,7.633,0,0,0,2,2.364,6.133,6.133,0,0,1,1.763,2.092,12.265,12.265,0,0,1,.765,2.613c.271,1.234.681,3.1,1.347,3.522.936.594,1.456.868,1.8,1.05,1.02.538,1.189.738,2.5,2.294l.44.521c.6.707,1.952.337,3.661-.219,1.491-.486,3.033-.988,4.21-.019a2.886,2.886,0,0,1,.859,2.757c-.6,4.846-1.5,5.954-4.184,9.243l-.191.234a31.672,31.672,0,0,1-5.186,5.129c-2.145,1.732-2.592,2.093-2.592,9.614a15.091,15.091,0,0,0,.217,2.568,10.7,10.7,0,0,1,.1,3.289c-.339,2.76-2.451,3.786-3.848,4.465-1.687.82-2.2,1.068-1.69,3.113a11.16,11.16,0,0,1-.485,4.72,9.167,9.167,0,0,1-3.451,4.222,29.282,29.282,0,0,0-2.867,2.175C-213.8-423.239-216.959-420.657-220.093-420.657Z"
                    transform="translate(262.349 505.705)"
                    fill="currentColor"
                  />
                </g>
                <g id="g932" transform="translate(68.197 55.765)">
                  <path
                    id="path934"
                    d="M-73.592-13.436a3.024,3.024,0,0,1,.412.028,3.512,3.512,0,0,1,2.419,1.5A7.877,7.877,0,0,1-69.786-6.4a13.12,13.12,0,0,1-3.1,6.51,9.086,9.086,0,0,0-1.138,2.063c-.929,2.029-2.333,5.1-5.821,5.1a6.152,6.152,0,0,1-.734-.045A3.481,3.481,0,0,1-83.3,5.416c-1.089-1.99-.4-4.929.608-7.016a11.187,11.187,0,0,0,.747-3.069c.265-1.788.539-3.637,2.263-4.233l.455-.154c.974-.325,1.149-.384,1.551-1.022l.146-.234C-76.7-11.63-75.571-13.436-73.592-13.436ZM-79.846,3.947c1.221,0,1.818-1.011,2.8-3.157a11.042,11.042,0,0,1,1.722-2.938,9.877,9.877,0,0,0,2.279-4.9,4.841,4.841,0,0,0-.419-2.932.539.539,0,0,0-.1-.116,7.386,7.386,0,0,0-1.141,1.54l-.153.244a5.246,5.246,0,0,1-3.31,2.4l-.163.055a11.955,11.955,0,0,0-.321,1.668A13.87,13.87,0,0,1-79.7-.155c-.828,1.716-1,3.4-.685,3.977.034.061.047.087.2.1A2.834,2.834,0,0,0-79.846,3.947Z"
                    transform="translate(83.849 13.436)"
                    fill="currentColor"
                  />
                </g>
                <g id="g936" transform="translate(35.899 55.539)">
                  <path id="path938" transform="translate(0 0)" fill="currentColor" />
                </g>
              </g>
            </g>
          </g>
          <path
            id="group_1_"
            d="M49.241,35a5.585,5.585,0,0,0-3.193-9.634,7.342,7.342,0,0,0-5.3-5.282,5.6,5.6,0,1,0-7.661,0A7.342,7.342,0,0,0,28.4,23.761a7.342,7.342,0,0,0-4.68-3.679,5.588,5.588,0,1,0-7.656,0,7.35,7.35,0,0,0-5.309,5.3A5.578,5.578,0,0,0,7.57,35,7.418,7.418,0,0,0,2,42.169v5.357a.88.88,0,0,0,.88.88H53.928a.88.88,0,0,0,.88-.88V42.169A7.418,7.418,0,0,0,49.241,35Zm.014-4.077a3.835,3.835,0,1,1-3.835-3.834A3.84,3.84,0,0,1,49.255,30.922ZM36.912,12.181a3.833,3.833,0,0,1,.034,7.666h-.068a3.833,3.833,0,0,1,.034-7.666Zm-1.977,9.426h1.909c.023,0,.045,0,.068,0s.045,0,.068,0h1.907a5.6,5.6,0,0,1,5.347,3.849A5.584,5.584,0,0,0,41.6,35a7.436,7.436,0,0,0-4.688,3.672A7.435,7.435,0,0,0,32.223,35a5.578,5.578,0,0,0-2.636-9.528,5.605,5.605,0,0,1,5.348-3.862ZM24.576,30.93A3.828,3.828,0,1,1,28.4,34.757,3.832,3.832,0,0,1,24.576,30.93ZM19.9,12.195a3.826,3.826,0,0,1,.034,7.652h-.068a3.826,3.826,0,0,1,.034-7.652Zm-1.975,9.413h1.907c.023,0,.045,0,.068,0s.045,0,.068,0h1.909a5.605,5.605,0,0,1,5.348,3.862A5.578,5.578,0,0,0,24.586,35,7.434,7.434,0,0,0,19.9,38.671,7.435,7.435,0,0,0,15.207,35a5.577,5.577,0,0,0-2.633-9.528,5.606,5.606,0,0,1,5.348-3.863ZM11.388,27.1A3.828,3.828,0,1,1,7.561,30.93,3.832,3.832,0,0,1,11.388,27.1ZM3.76,42.169a5.658,5.658,0,0,1,5.651-5.651h3.954a5.658,5.658,0,0,1,5.651,5.651v4.477H3.76Zm17.016,0a5.658,5.658,0,0,1,5.651-5.651h3.954a5.658,5.658,0,0,1,5.651,5.651v4.477H20.777Zm32.272,4.477H37.792V42.169a5.658,5.658,0,0,1,5.651-5.651H47.4a5.658,5.658,0,0,1,5.651,5.651Z"
            transform="translate(1407.473 2936.678)"
            fill="currentColor"
          />
        </g>
      </svg>
    ),
  },
  {
    title: 'Real Estate Expertise',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96.943 79.887">
        <defs>
          <clipPath id="clip-path">
            <path
              id="path141"
              d="M0-682.665H27.538v27.538H0Z"
              transform="translate(0 682.665)"
              fill="currentColor"
            />
          </clipPath>
        </defs>
        <g id="Youthful_demographics" transform="translate(-448.723 -3631.851)">
          <g id="g6027" transform="translate(448.723 3631.851)">
            <g id="g6029" transform="translate(40.053 39.835)">
              <path
                id="path6031"
                d="M-222.057-119.25l-34.119-18.323"
                transform="translate(256.177 137.573)"
                fill="none"
              />
            </g>
            <g id="g6033" transform="translate(0 0)">
              <g id="Group_730">
                <g id="g6041" transform="translate(0 11.126)">
                  <path
                    id="path6043"
                    d="M30.052-185.518H-8.668A1.332,1.332,0,0,1-10-186.85a1.332,1.332,0,0,1,1.332-1.332H29.5l26.99-26.988a1.332,1.332,0,0,1,1.884,0,1.332,1.332,0,0,1,0,1.884l-26.23,26.229c-.26.26,16.32,33.564,16.125,33.9-4,3.523-2.642,1.6-2.642,1.6C45.376-151.3,30.405-185.518,30.052-185.518Z"
                    transform="translate(10 215.559)"
                    fill="currentColor"
                  />
                </g>
                <g id="g6045" transform="translate(19.626 72.194)">
                  <path
                    id="path6047"
                    d="M10.426-2.309a40.047,40.047,0,0,1-19.753-5.2,1.332,1.332,0,0,1-.5-1.816,1.332,1.332,0,0,1,1.816-.5A37.378,37.378,0,0,0,10.426-4.972c1.226,0,2.477-.062,3.718-.184a1.332,1.332,0,0,1,1.456,1.2A1.332,1.332,0,0,1,14.4-2.5C13.077-2.375,11.738-2.309,10.426-2.309Z"
                    transform="translate(10.002 10.002)"
                    fill="currentColor"
                  />
                </g>
                <g id="g6049" transform="translate(0.001 30.949)">
                  <path
                    id="path6051"
                    d="M-59.289-208.022a1.33,1.33,0,0,1-1.065-.53A39.7,39.7,0,0,1-68.4-232.635a40.24,40.24,0,0,1,.764-7.814A1.332,1.332,0,0,1-66.07-241.5a1.332,1.332,0,0,1,1.047,1.566,37.571,37.571,0,0,0-.713,7.3,37.061,37.061,0,0,0,7.51,22.479,1.332,1.332,0,0,1-.262,1.865A1.326,1.326,0,0,1-59.289-208.022Z"
                    transform="translate(68.4 241.521)"
                    fill="currentColor"
                  />
                </g>
                <g id="g6053" transform="translate(46.856 0.641)">
                  <path
                    id="path6055"
                    d="M16.678,11.063a1.331,1.331,0,0,1-1.152-.662A37.463,37.463,0,0,0-8.948-7.367,1.332,1.332,0,0,1-9.972-8.948,1.332,1.332,0,0,1-8.392-9.972,40.132,40.132,0,0,1,17.827,9.061a1.332,1.332,0,0,1-1.15,2Z"
                    transform="translate(10.002 10.002)"
                    fill="currentColor"
                  />
                </g>
                <g id="g6057" transform="translate(2.471)">
                  <path
                    id="path6059"
                    d="M-8.671-169.212a1.329,1.329,0,0,1-.469-.086,1.332,1.332,0,0,1-.778-1.715,40.335,40.335,0,0,1,33.236-25.728,1.332,1.332,0,0,1,1.465,1.184,1.332,1.332,0,0,1-1.184,1.465A37.65,37.65,0,0,0-7.424-170.075,1.332,1.332,0,0,1-8.671-169.212Z"
                    transform="translate(10.003 196.748)"
                    fill="currentColor"
                  />
                </g>
                <g id="g6061" transform="translate(48.737 50.206)">
                  <path
                    id="path6063"
                    d="M-8.671-174.644a1.332,1.332,0,0,1-1.286-.989,1.332,1.332,0,0,1,.943-1.63,37.892,37.892,0,0,0,22.24-16.663c1.478-2.361,4.093-1.659,2.393,1.19A40.233,40.233,0,0,1-8.327-174.69,1.334,1.334,0,0,1-8.671-174.644Z"
                    transform="translate(10.002 203.015)"
                    fill="currentColor"
                  />
                </g>
                <g id="Group_732" transform="translate(-5 4.403)">
                  <g id="g6081" transform="translate(70.799 17.682)">
                    <path
                      id="path6083"
                      d="M-70.684-45.416A10.159,10.159,0,0,1-60.536-35.269,10.159,10.159,0,0,1-70.684-25.122,10.158,10.158,0,0,1-80.83-35.269,10.158,10.158,0,0,1-70.684-45.416Zm0,15.826A5.685,5.685,0,0,0-65-35.269a5.685,5.685,0,0,0-5.679-5.679,5.685,5.685,0,0,0-5.678,5.679A5.685,5.685,0,0,0-70.684-29.59Z"
                      transform="translate(86.732 36.495)"
                      fill="currentColor"
                    />
                  </g>
                  <g id="g6085" transform="translate(67.85 27.116)">
                    <path
                      id="path6087"
                      d="M-114-96.482h8A9.979,9.979,0,0,1-96-87.34l1.088,12.217a3.8,3.8,0,0,1-.98,2.9,3.8,3.8,0,0,1-2.8,1.233h-1.468v12.363a5.359,5.359,0,0,1-5.353,5.354h-8.959a5.359,5.359,0,0,1-5.353-5.354V-70.994H-121.3a3.8,3.8,0,0,1-2.8-1.233,3.8,3.8,0,0,1-.98-2.9l1.088-12.216A9.979,9.979,0,0,1-114-96.482Zm14.563,21.02-1.022-11.482A5.534,5.534,0,0,0-106-92.014h-8a5.534,5.534,0,0,0-5.541,5.07l-1.022,11.482h2.965a2.234,2.234,0,0,1,2.234,2.234v14.6a.886.886,0,0,0,.884.885h8.959a.886.886,0,0,0,.885-.885v-14.6a2.234,2.234,0,0,1,2.234-2.234Z"
                      transform="translate(128.994 93.953)"
                      fill="currentColor"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
          <g id="g135" transform="translate(458.832 3643.224)">
            <g id="g137" transform="translate(0 0)">
              <g id="g139" clipPath="url(#clip-path)">
                <g id="g145" transform="translate(14.854 0)">
                  <path
                    id="path147"
                    d="M-7.038-23.218a.4.4,0,0,1-.3-.139.4.4,0,0,1,.04-.569,2.465,2.465,0,0,0,.859-1.765,2.438,2.438,0,0,0-.749-1.819.4.4,0,0,1-.108-.379.4.4,0,0,1,.266-.29c.461-.152.747-.484.644-1.513l-1.172.586a.4.4,0,0,1-.18.043H-9.6a.4.4,0,0,1-.4-.4.4.4,0,0,1,.4-.4h1.757l1.586-.793a.4.4,0,0,1,.36,0,.4.4,0,0,1,.217.288c.107.583.368,2.007-.592,2.7a3.183,3.183,0,0,1,.632,2.007,3.274,3.274,0,0,1-1.137,2.347A.4.4,0,0,1-7.038-23.218Z"
                    transform="translate(10 30.707)"
                    fill="currentColor"
                  />
                </g>
                <g id="g149" transform="translate(8.359 0.835)">
                  <path
                    id="path151"
                    d="M-32.409-148.28a.4.4,0,0,1-.312-.147,4.191,4.191,0,0,1-1-3.227,2.191,2.191,0,0,1,.926-1.436,2.059,2.059,0,0,1,.595-1.235,2.06,2.06,0,0,1,1.466-.608h2.107a.4.4,0,0,1,.4.4.4.4,0,0,1-.4.4h-2.107a1.259,1.259,0,0,0-.9.371,1.259,1.259,0,0,0-.371.9.4.4,0,0,1-.206.352,1.4,1.4,0,0,0-.721,1,3.414,3.414,0,0,0,.835,2.565.4.4,0,0,1-.056.568A.4.4,0,0,1-32.409-148.28Z"
                    transform="translate(33.771 154.933)"
                    fill="currentColor"
                  />
                </g>
                <g id="g153" transform="translate(4.717 16.673)">
                  <path
                    id="path155"
                    d="M-93.667.862H-99.73a.4.4,0,0,1-.4-.4V-5.708a4.107,4.107,0,0,1,2.778-3.886l1.131-.387a.4.4,0,0,1,.512.251.4.4,0,0,1-.251.512l-1.131.387a3.3,3.3,0,0,0-2.232,3.123V.056h5.659a.4.4,0,0,1,.4.4A.4.4,0,0,1-93.667.862Z"
                    transform="translate(100.133 10.003)"
                    fill="currentColor"
                  />
                </g>
                <g id="g157" transform="translate(12.538 18.657)">
                  <path
                    id="path159"
                    d="M-221.907-1.12h-9.475a.4.4,0,0,1-.4-.4.4.4,0,0,1,.4-.4h9.072V-7.691a3.3,3.3,0,0,0-.471-1.7.4.4,0,0,1,.138-.554.4.4,0,0,1,.554.138,4.108,4.108,0,0,1,.586,2.115v6.167A.4.4,0,0,1-221.907-1.12Z"
                    transform="translate(231.786 10.001)"
                    fill="currentColor"
                  />
                </g>
                <g id="g161" transform="translate(18.377 16.672)">
                  <path
                    id="path163"
                    d="M-7.729-8.461a.4.4,0,0,1-.211-.06A3.312,3.312,0,0,0-8.6-8.83L-9.73-9.218a.4.4,0,0,1-.251-.512.4.4,0,0,1,.512-.251l1.132.387a4.12,4.12,0,0,1,.819.386.4.4,0,0,1,.133.555A.4.4,0,0,1-7.729-8.461Z"
                    transform="translate(10.003 10.003)"
                    fill="currentColor"
                  />
                </g>
                <g id="g165" transform="translate(8.353 13.511)">
                  <path
                    id="path167"
                    d="M-72.74-65.864a.4.4,0,0,1,.27.1.4.4,0,0,1,.133.3v2.15l2.309,4.192a.4.4,0,0,1-.006.4.4.4,0,0,1-.347.2,5.3,5.3,0,0,1-5.387-3.63a.4.4,0,0,1-.029-.143c-.034-2.126,1.008-3.36,3.015-3.569Zm1.657,6.5-2.011-3.651a.4.4,0,0,1-.05-.195V-64.99c-1.262.272-1.852,1.112-1.847,2.61A4.423,4.423,0,0,0-71.083-59.361Z"
                    transform="translate(75.797 65.864)"
                    fill="currentColor"
                  />
                </g>
                <g id="g169" transform="translate(11.695 19.846)">
                  <path
                    id="path171"
                    d="M-9.6-93.5a.4.4,0,0,1-.4-.4v-3.544a.4.4,0,0,1,.4-.4.4.4,0,0,1,.4.4V-93.9A.4.4,0,0,1-9.6-93.5Z"
                    transform="translate(10 97.846)"
                    fill="currentColor"
                  />
                </g>
                <g id="g173" transform="translate(13.365 13.511)">
                  <path
                    id="path175"
                    d="M-65.708-65.864l.042,0c2.007.209,3.049,1.443,3.015,3.569a.4.4,0,0,1-.029.143,5.3,5.3,0,0,1-5.387,3.63.4.4,0,0,1-.347-.2.4.4,0,0,1-.006-.4l2.309-4.192v-2.15a.4.4,0,0,1,.133-.3A.4.4,0,0,1-65.708-65.864Zm2.251,3.484c.005-1.5-.586-2.338-1.847-2.61v1.783a.4.4,0,0,1-.05.195l-2.011,3.651A4.423,4.423,0,0,0-63.458-62.38Z"
                    transform="translate(68.47 65.864)"
                    fill="currentColor"
                  />
                </g>
                <g id="g177" transform="translate(15.036 19.846)">
                  <path
                    id="path179"
                    d="M-9.6-93.5a.4.4,0,0,1-.4-.4v-3.544a.4.4,0,0,1,.4-.4.4.4,0,0,1,.4.4V-93.9A.4.4,0,0,1-9.6-93.5Z"
                    transform="translate(10 97.846)"
                    fill="currentColor"
                  />
                </g>
                <g id="g181" transform="translate(7.518 6.89)">
                  <path
                    id="path183"
                    d="M-53.177-10h.754a.4.4,0,0,1,.4.4V-6.72a.4.4,0,0,1-.4.4h-.754a1.451,1.451,0,0,1-1.45-1.45V-8.55A1.451,1.451,0,0,1-53.177-10Zm.351.807h-.351a.644.644,0,0,0-.643.643v.784a.644.644,0,0,0,.643.643h.351Z"
                    transform="translate(54.627 10)"
                    fill="currentColor"
                  />
                </g>
                <g id="g185" transform="translate(17.413 6.89)">
                  <path
                    id="path187"
                    d="M-9.6-10h.754a1.451,1.451,0,0,1,1.45,1.45v.784a1.451,1.451,0,0,1-1.45,1.45H-9.6a.4.4,0,0,1-.4-.4V-9.6A.4.4,0,0,1-9.6-10Zm.754,2.876A.644.644,0,0,0-8.2-7.766V-8.55a.644.644,0,0,0-.643-.643h-.351v2.07Z"
                    transform="translate(10 10)"
                    fill="currentColor"
                  />
                </g>
                <g id="g189" transform="translate(9.318 4.176)">
                  <path
                    id="path191"
                    d="M-8.056-72.124h5.012a.4.4,0,0,1,.394.318c.032.148.059.291.085.431.161.855.258,1.371,1.223,1.79a.4.4,0,0,1,.243.37v3.541a4.456,4.456,0,0,1-4.451,4.451A4.456,4.456,0,0,1-10-65.674v-3.541a.4.4,0,0,1,.265-.379c.811-.3.919-.742,1.136-1.633.046-.189.095-.389.154-.6A.4.4,0,0,1-8.056-72.124Zm4.682.807H-7.745c-.024.1-.047.19-.069.281a2.569,2.569,0,0,1-1.379,2.091v3.271A3.648,3.648,0,0,0-5.549-62.03a3.648,3.648,0,0,0,3.644-3.644v-3.286a2.658,2.658,0,0,1-1.451-2.266Z"
                    transform="translate(10 72.124)"
                    fill="currentColor"
                  />
                </g>
                <g id="g193" transform="translate(12.354 11.147)">
                  <path
                    id="path195"
                    d="M-8.585-8.182A1.417,1.417,0,0,1-10-9.6a.4.4,0,0,1,.4-.4.4.4,0,0,1,.4.4.609.609,0,0,0,.608.608A.609.609,0,0,0-7.977-9.6a.4.4,0,0,1,.4-.4.4.4,0,0,1,.4.4A1.417,1.417,0,0,1-8.585-8.182Z"
                    transform="translate(10 10)"
                    fill="currentColor"
                  />
                </g>
                <g id="g197" transform="translate(11.659 8.638)">
                  <path
                    id="path199"
                    d="M-9.6-8.664a.4.4,0,0,1-.4-.4V-9.6a.4.4,0,0,1,.4-.4.4.4,0,0,1,.4.4v.529A.4.4,0,0,1-9.6-8.664Z"
                    transform="translate(10 10)"
                    fill="currentColor"
                  />
                </g>
                <g id="g201" transform="translate(15.135 8.638)">
                  <path
                    id="path203"
                    d="M-9.6-8.664a.4.4,0,0,1-.4-.4V-9.6a.4.4,0,0,1,.4-.4.4.4,0,0,1,.4.4v.529A.4.4,0,0,1-9.6-8.664Z"
                    transform="translate(10 10)"
                    fill="currentColor"
                  />
                </g>
                <g id="g205" transform="translate(11.242 7.216)">
                  <path
                    id="path207"
                    d="M-8.761-9.193H-9.6a.4.4,0,0,1-.4-.4.4.4,0,0,1,.4-.4h.835a.4.4,0,0,1,.4.4A.4.4,0,0,1-8.761-9.193Z"
                    transform="translate(10 10)"
                    fill="currentColor"
                  />
                </g>
                <g id="g209" transform="translate(14.654 7.216)">
                  <path
                    id="path211"
                    d="M-8.761-9.193H-9.6a.4.4,0,0,1-.4-.4.4.4,0,0,1,.4-.4h.835a.4.4,0,0,1,.4.4A.4.4,0,0,1-8.761-9.193Z"
                    transform="translate(10 10)"
                    fill="currentColor"
                  />
                </g>
              </g>
            </g>
          </g>
          <g id="people" transform="translate(474.199 3680.458)">
            <path
              id="Path_5753"
              d="M15.965,21.26l-.025.024,0,0c-.027.025-.053.047-.086.081A6.684,6.684,0,0,0,13.892,26.1v3.815a.473.473,0,0,0,.473.473H30.557a.473.473,0,0,0,.473-.473V26.1a6.806,6.806,0,0,0-.221-1.715,6.691,6.691,0,0,0-1.824-3.1h0l-.005-.005a6.645,6.645,0,0,0-4.171-1.856v-.3h3.908a2.017,2.017,0,0,0,2.015-2.015V11.67a1.836,1.836,0,0,0,0-1.161v-.366a8.15,8.15,0,1,0-16.3,0v.365a1.831,1.831,0,0,0,0,1.171v5.429a2.017,2.017,0,0,0,2.015,2.015h3.668v.3a6.614,6.614,0,0,0-4.15,1.837Zm12.477.833a5.746,5.746,0,0,1,1.251,1.945H27.4a.473.473,0,0,0-.473.473v.71H17.95v-.7a.473.473,0,0,0-.473-.473H15.221a5.8,5.8,0,0,1,1.249-1.958Zm-10.7,7.351-.2-.615a2.619,2.619,0,0,1-.077-.362h9.941a2.658,2.658,0,0,1-.074.349l-.2.628Zm-.263-1.921a2.792,2.792,0,0,1,.259-.789,1.893,1.893,0,0,0,.186-.564h9.036a2.025,2.025,0,0,0,.2.584,2.681,2.681,0,0,1,.248.769ZM14.838,26.1A5.77,5.77,0,0,1,14.956,25H17v.858a1,1,0,0,1-.125.473,3.647,3.647,0,0,0-.406,1.656.089.089,0,0,0,0,.011V28a3.62,3.62,0,0,0,.17,1.117l.1.324H14.838Zm15.246,3.341H28.125l.108-.337a3.578,3.578,0,0,0,.169-1.1.09.09,0,0,0,0-.011c0-.006,0-.01,0-.017a3.733,3.733,0,0,0-.423-1.7.958.958,0,0,1-.108-.441v-.858h2.092a5.852,5.852,0,0,1,.121,1.119Zm-2.843-8.3H17.682a5.716,5.716,0,0,1,2.907-.793a.473.473,0,0,0,.473-.473V17.187a5.926,5.926,0,0,0,2.8.057V19.88a.473.473,0,0,0,.473.473,5.719,5.719,0,0,1,2.908.794ZM15.281,11.09a1.062,1.062,0,0,1,.323-.765,1.051,1.051,0,0,1,.619-.3q-.021.276-.021.557a7.245,7.245,0,0,0,.178,1.592h-.017A1.084,1.084,0,0,1,15.281,11.09ZM17.445,12.5a.071.071,0,0,0-.005-.019c0-.006,0-.015-.006-.022a6.208,6.208,0,0,1-.287-1.879,6.531,6.531,0,0,1,.072-.973,6.181,6.181,0,0,1,.671-1.991.663.663,0,0,1,.576-.326H26.7a.648.648,0,0,1,.568.324,6.094,6.094,0,0,1,.672,1.993.485.485,0,0,0,.013.058,6.578,6.578,0,0,1,.062.915,6.212,6.212,0,0,1-.3,1.923,5.657,5.657,0,0,1-3.53,3.677,5.118,5.118,0,0,1-3.426-.081A5.723,5.723,0,0,1,17.445,12.5ZM29.876,11.09a1.073,1.073,0,0,1-.316.765,1.058,1.058,0,0,1-.757.318h-.018a7.244,7.244,0,0,0,.178-1.593q0-.281-.02-.557a1.079,1.079,0,0,1,.936,1.069Zm-1.16,7.086H24.808v-1.23a6.592,6.592,0,0,0,3.682-3.826H28.8a1.993,1.993,0,0,0,.984-.266v4.254a1.07,1.07,0,0,1-1.071,1.068ZM22.58,2.943A7.193,7.193,0,0,1,29.729,9.3a2,2,0,0,0-.929-.237h-.007a7,7,0,0,0-.7-1.9a1.584,1.584,0,0,0-1.4-.818H18.467a1.6,1.6,0,0,0-1.406.819,7.156,7.156,0,0,0-.7,1.9h0a1.994,1.994,0,0,0-.933.237A7.209,7.209,0,0,1,22.58,2.943ZM16.447,18.176a1.07,1.07,0,0,1-1.069-1.069V12.853a2,2,0,0,0,.985.266h.308a6.568,6.568,0,0,0,3.443,3.726v1.331Z"
              transform="translate(-13.892 -1.993)"
              fill="currentColor"
            />
            <path
              id="Path_5754"
              d="M25.776,16.454a.7.7,0,1,0,.7.7a.7.7,0,0,0-.7-.7Zm0,.946a.248.248,0,1,1,.248-.248A.248.248,0,0,1,25.776,17.4Z"
              transform="translate(-19.784 -9.611)"
              fill="currentColor"
            />
            <path
              id="Path_5755"
              d="M37.391,16.454a.7.7,0,1,0,.7.7A.7.7,0,0,0,37.391,16.454Zm0,.946a.248.248,0,1,1,.248-.248.248.248,0,0,1-.248.248Z"
              transform="translate(-25.903 -9.611)"
              fill="currentColor"
            />
            <path id="Path_5756" d="M25.9,14.612a.473.473,0,0,0,0-.946H23.735a.473.473,0,0,0,0,.946Z" transform="translate(-18.828 -8.142)" fill="currentColor" />
            <path id="Path_5757" d="M35.35,14.612h2.17a.473.473,0,1,0,0-.946H35.35a.473.473,0,1,0,0,.946Z" transform="translate(-24.946 -8.142)" fill="currentColor" />
            <path
              id="Path_5758"
              d="M29.278,25.534a1.831,1.831,0,0,0,1.368.724h.061a1.83,1.83,0,0,0,1.388-.669A.473.473,0,0,0,31.353,25a.823.823,0,0,1-1.312-.026.473.473,0,1,0-.762.56Z"
              transform="translate(-21.945 -13.992)"
              fill="currentColor"
            />
          </g>
        </g>
      </svg>
    ),
  },
]


//     < div
// className = "flex justify-center items-center" >
//     < Image
// src = {item.photo}
// alt = {item.name}
// width = {160}
// height = {160}
// className = "aspect-square rounded-[50%] lg:w-40 md:w-24 xs:w-20"
//     / >
//     < /div>
// <div className="flex flex-col">
//     <h3 className="mb-1 2xl:text-15 text-p mp:text-10 font-bold">{item.name}</h3>
//     <p className="mb-4 2xl:text-15 text-p md:text-10 mp:text-sm">{item.designation}</p>
//     <div className="flex gap-x-5">
//         {item.social.twitter ?
//             <Link href={item.social.twitter} className='rounded-[50%] border p-2 hover:text-black hover:bg-white'
//                   target={'_blank'}>
//                 <svg className='w-5 md:w-3 mp:w-2' stroke="currentColor" fill="currentColor" strokeWidth="0"
//                      viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title>
//                     <path
//                         d="M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z"></path>
//                 </svg>
//             </Link>
//             : <></>
//         }
//         {item.social.linkedin ?
//             <Link href={item.social.linkedin} className='rounded-[50%] border p-2 hover:text-black hover:bg-white'
//                   target={'_blank'}>
//                 <svg className='w-5 md:w-3 mp:w-2' stroke="currentColor" fill="currentColor" strokeWidth="0"
//                      viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title>
//                     <path
//                         d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
//                 </svg>
//             </Link>
//             : <></>
//         }
//     </div>
// </div>

