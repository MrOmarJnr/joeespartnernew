'use client'
import Link from "next/link";
import {pagePath} from "@/components/navigation/pagePath";
import {usePathname} from "next/navigation";
import {useState} from "react";
import Image from "next/image";

export default function Header() {
    // console.log(pagePath.blogPost.src)
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const toggleMenu = () =>{
        setOpen(!open);
    }
    return (
        <>
            <header className="w-full  bg-white border-b-2 border-blue-main-blue bg-cover bg-center fixed top-0 right-0 left-0 z-[9999]">
                <div className="relative h-[6.5rem] md:h-20 flex items-center">
                    <nav className="container lg:block md:hidden">
                        <div className="w-full flex justify-between items-center">
                            <div>
                                <Link href={pagePath.home.src} aria-label={'Homepage'}>
                                    {/* <Logo className={'text-white w-full max-w-[12rem] md:max-w-[9rem]'} /> */}
                                    <Image src='/home/Group 2.png' width={96} height={64} alt="logo-again" className={'w-full max-w-[6rem] md:max-w-[4rem]'}/>
                                </Link>
                            </div>
                            <ul className="flex items-center justify-between">
                                
                                <li className="pr-24">
                                    <a href={`${pagePath.aboutUs.src}`} className={`py-2 font-medium rounded-t-md border-transparent relative border-b transition-all duration-500 text-blue-131A37  text-center before:absolute before:top-0 before:bottom-0 before:left-0 before:right-auto  before:transition-all before:border-b before:border-yellow-EFA640 before:duration-500 before:w-0 hover:before:w-full `}>
                                        
                                        About us
                                    </a>
                                </li>
                                
                                <li className="pr-24">
                                    <Link href={pagePath.Services.src} className={`py-2 font-medium rounded-t-md ${pathname === pagePath.aboutUs.src ? 'border-white' : 'bg-transparent border-transparent'}  relative border-b transition-all duration-500 text-center text-blue-131A37  before:absolute before:top-0 before:bottom-0 before:left-0 before:right-auto  before:transition-all before:border-b before:border-blue-main-blue before:duration-500 before:w-0 hover:before:w-full `}>
                                         Services
                                    </Link>
                                </li>
                                <li className="pr-24">
                                    <Link href={pagePath.ourProjects.src} className={`py-2 font-medium rounded-t-md ${pathname === pagePath.ourProjects.src ? 'border-white' : 'bg-transparent border-transparent'}  relative border-b text-blue-131A37  transition-all duration-500 text-center before:absolute before:top-0 before:bottom-0 before:left-0 before:right-auto  before:transition-all before:border-b before:border-blue-main-blue before:duration-500 before:w-0 hover:before:w-full `}>
                                         Projects
                                    </Link>
                                </li>
                                <li className="">
                                    <Link href={pagePath.contactUs.src} className={`py-2 font-medium rounded-t-md ${pathname === pagePath.contactUs.src ? 'border-white' : 'bg-transparent border-transparent'} relative border-b transition-all duration-500 text-center text-blue-131A37  before:absolute before:top-0 before:bottom-0 before:left-0 before:right-auto  before:transition-all before:border-b before:border-white before:duration-500 before:w-0 hover:before:w-full `}>
                                        Contact us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="w-full lg:hidden md:block">
                        <div className='container'>
                            <ul className="flex justify-between items-center">
                                <li>
                                <Link href={pagePath.home.src} aria-label={'Homepage'}>
                                        {/* <Logo className={'text-white w-full max-w-[12rem] md:max-w-[9rem]'}/> */}
                                        <Image src='/home/Group 2.png' width={144} height={64} alt="logo-again"  className={'text-blue-131A37  w-full max-w-[9rem] md:max-w-[4rem]'}/>
                                    </Link>
                                </li>
                                <li className={``} onClick={()=>{toggleMenu()}}>
                                    {open ?
                                        <svg className={`w-8 h-8`} stroke="#333333" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
                                    :
                                        <svg className={`w-8 h-8`} stroke="#333333" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M7 8h10"></path><path d="M7 12h10"></path><path d="M7 16h10"></path></svg>
                                    }
                                </li>
                            </ul>
                        </div>
                        <div className={`${open ? 'block min-h-screen opacity-100' : 'hidden opacity-0'} bg-[#575656] absolute top-20 right-0 left-0 z-[9990]`}>
                            <ul className="container flex flex-col items-start justify-stretch gap-y-2 py-4">
                                <li className={`w-full`}>
                                    <a href={`${pagePath.Services.src}`} className={`w-full block px-4 py-2 font-medium rounded-md bg-transparent hover:bg-[#aaaaaa] `}>
                                        Services
                                    </a>
                                </li>
                                <li className={`w-full`}>
                                    <Link href={pagePath.aboutUs.src}
                                          className={`w-full block px-4 py-2 font-medium rounded-md ${pathname === pagePath.aboutUs.src ? 'bg-blue-182146' : 'bg-transparent'} hover:bg-[#aaaaaa] `}>
                                        About us
                                    </Link>
                                </li>
                                <li className={`w-full`}>
                                    <Link href={pagePath.ourProjects.src}
                                          className={`w-full block px-4 py-2 font-medium rounded-md ${pathname === pagePath.ourProjects.src ? 'bg-blue-182146' : 'bg-transparent'} hover:bg-[#aaaaaa] `}>
                                        Projects
                                    </Link>
                                </li>
                                {/* <Dropdown
                                    title={
                                        {
                                            name: 'Media',
                                            src: '#'
                                        }
                                    }
                                    titleClassName='px-4 py-2 font-medium'
                                    items={[
                                        {
                                            name: 'Press Coverage',
                                            src: pagePath.pressCoverage.src
                                        },
                                        {
                                            name: 'Press Release',
                                            src: pagePath.pressRelease.src
                                        },
                                    ]}
                                    itemClassName='px-4 py-2 hover:bg-blue-182146 font-medium rounded-md'
                                    itemClassNameActive='bg-blue-182146'
                                    itemClassNameInActive='bg-transparent'
                                /> */}
                                <li className={`w-full`}>
                                    <Link href={pagePath.contactUs.src}
                                          className={`w-full block px-4 py-2 font-medium rounded-md ${pathname === pagePath.contactUs.src ? 'bg-blue-182146' : 'bg-transparent'} hover:bg-blue-182146 `}>
                                        Contact us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <div className="h-[6.5rem] md:h-20"></div>
        </>
    );
}