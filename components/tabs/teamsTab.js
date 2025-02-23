'use client'
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import Image from "next/image";
import joephoto from "@/public/team/Ohemeng.jpg";
import Essien from "@/public/team/Essien.jpg";
import reggie from "@/public/team/Reginald.jpg";
import Reveal from "@/components/animations/reveal";
import Link from "next/link";

export default function TeamsTab() {
    return (
        <>
            <section className="xl:py-32 py-24 ml:py-12 bg-black">
                <div className="container">
                    <Reveal>
                        <h2 className="mb-4 text-white">The Team</h2>
                    </Reveal>
                    <Reveal delayTime={0.15}>
                        <Tabs className="teams_tab">
                            <TabList className="flex flex-wrap w-full justify-center items-center pb-10 gap-4">
                                {/* <Tab className="px-5 py-2 border-2 border-green-157F70 outline-0 rounded-md max-w-full min-w-fit cursor-pointer">Executive Team</Tab> */}
                                {/* <Tab className="px-5 py-2 border-2 border-green-157F70 outline-0 rounded-md max-w-full min-w-fit cursor-pointer">Advisory Board</Tab> */}
                            </TabList>
                            <TabPanel className="w-full">
                                <p className="2xl:text-15 text-p  mb-12 ml:mb-8">We are an experienced team with a successful track record in Africa and the telecom industry,  
                                    pioneering force in the Ghanaian business landscape. We offer a comprehensive suite of logistics, project management, and business support services, empowering businesses to thrive in today&aposs dynamic environment.</p>
                                <div className="w-full flex flex-wrap justify-between gap-x-[1%] gap-y-8">
                                    {ExecutiveTeam.map((item, index) => (
                                        <div key={index}
                                             className="flex ml:flex-col p-5 rounded-md hover:bg-white-E8E8E8 hover:text-blue-0B112B hover:-translate-y-2 ease-linear transition duration-500 w-[49%] md:w-full bg-blue-0B112B text-white-E8E8E8">
                                            <div className="flex flex-col w-1/3 ml:w-full items-center pr-4">
                                                <Image
                                                    src={item.photo}
                                                    alt={item.name}
                                                    width={155}
                                                    height={165}
                                                    className="aspect-auto mb-4 rounded-[28px]"
                                                />
                                                <h3 className="mb-1 text-p text-center font-bold uppercase">{item.name}</h3>
                                                <p className="mb-3 text-10 text-center">{item.designation}</p>
                                                {item.social.linkedin ?
                                                    <Link href={item.social.linkedin}
                                                          className='rounded-[50%] border-2 p-2 ml:mb-4' target={'_blank'}>
                                                        <svg className='w-3' stroke="currentColor" fill="currentColor"
                                                             strokeWidth="0" viewBox="0 0 24 24"
                                                             xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title>
                                                            <path
                                                                d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
                                                        </svg>
                                                    </Link>
                                                    :
                                                    <></>
                                                }
                                            </div>
                                            <div className="flex flex-col w-2/3 ml:w-full">
                                                <div
                                                    className="2xl:text-10 text-sm ml:text-center flex flex-col gap-y-2 w-full">{item.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </TabPanel>
                            {/* <TabPanel className="w-full">
                                <p className="2xl:text-15 text-p  mb-12 ml:mb-8">JP Advisory&rsquo;s management is bolstered by the expertise of three seasoned professionals in technology, finance, and HR sectors.</p>
                                <div className="w-full flex flex-wrap justify-between gap-x-[1%] gap-y-8">
                                    {AdvisoryBoard.map((item, index) => (
                                        <div key={index} className="flex ml:flex-col p-5 rounded-md hover:bg-white-E8E8E8 hover:text-blue-0B112B hover:-translate-y-2 ease-linear transition duration-500 w-[49%] md:w-full bg-blue-0B112B text-white-E8E8E8">
                                            <div className="flex flex-col w-1/3 ml:w-full items-center pr-4">
                                                <Image
                                                    src={item.photo}
                                                    alt={item.name}
                                                    width={155}
                                                    height={165}
                                                    className="aspect-auto mb-4 rounded-[28px]"
                                                />
                                                <h3 className="mb-1 text-p text-center font-bold uppercase">{item.name}</h3>
                                                <p className="mb-3 text-10 text-center">{item.designation}</p>
                                                {item.social.linkedin ?
                                                    <Link href={item.social.linkedin} className='rounded-[50%] border-2 p-2 ml:mb-4' target={'_blank'}>
                                                        <svg className='w-3' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg>
                                                    </Link>
                                                    :
                                                    <></>
                                                }
                                            </div>
                                            <div className="flex flex-col w-2/3 ml:w-full">
                                                <div className="2xl:text-10 text-sm ml:text-center flex flex-col gap-y-2 w-full">{item.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </TabPanel> */}
                        </Tabs>
                    </Reveal>
                </div>
            </section>
        </>
    );
}

export const ExecutiveTeam = [
    {
        name: 'Joseph Mfransi Essien',
        designation: 'President',
        desc: <p>Joseph brings over 35 years of 
        experience to his role as President 
        of Joees & Partners. He boasts a 
        proven track record of success in 
        freight clearance, forwarding, and 
        general logistics, having expertly 
        led operations at Samelott Limited. 
        He possesses deep expertise in 
        port services and the entire 
        shipping industry, ensuring 
        unparalleled insight and informed 
        leadership. 
        Joseph&apos;s extensive network 
        cultivated through affiliations with 
        international funding agencies and 
        brokerage institutions provides 
        Joees & Partners with access to a 
        diverse pool of resources for 
        project financing and growth.
        .</p>,
        photo: Essien,
        social: {
            linkedin: '',
        }
    },
    {
        name: 'JOE OHEMENG',
        designation: 'Vice President',
        desc: <p>Joe brings to Joees & Partners 
        Limited, years of experience in 
        diverse industries, specializing in 
        financial advisory, corporate 
        governance, regulatory 
        compliance, technology assurance, 
        forensics, strategic management 
        and data analytics. 
        Joe previously worked with Deloitte 
        and Touche for 38 years until he 
        retired as the Partner in charge of 
        Risk Advisory in 2019 .
         He later took up a 2-year contract 
        with Chemico Limited as the 
        Managing Director . Chemico is one 
        of the leading Agro Chemical 
        distribution companies in Ghana 
        and has been in the business since 
        1976.
         He&apos;s had the privilege of working 
        closely with numerous corporate 
        clients helping them deliver 
        customized solutions and navigate 
        through complex challenges. 
        </p>,
        photo: joephoto,
        social: {
            linkedin: '',
        }
    },
    {
        name: 'REGINALD ARYITEY',
        designation: 'General Manager',
        desc: <p>Leading operational excellence, 
        Reginald brings over 9 years of 
        experience to his role as General 
        Manager at Joees & Partners. 
        His strong business acumen and 
        broad understanding of diverse 
        functions –encompassing finance, 
        marketing, procurement, and 
        logistics –enable him to effectively 
        oversee operations and manage 
        resources to drive the company&apos;s 
        success.
        </p>,
        photo: reggie,
        social: {
            linkedin: '',
        }
    },
    
];

