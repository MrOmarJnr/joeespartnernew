'use client'
import {pagePath} from "@/components/navigation/pagePath";
import Link from "next/link";
import {usePathname} from "next/navigation";
import Image from "next/image";
export default function Footer() {
    const pathname = usePathname()
    const year = new Date().getFullYear();
    return (
        <footer className=' bg-[#444444] py-10'>
            <nav className="container flex justify-between items-start md:flex-col md:items-center ">
                <div className="flex flex-col justify-start items-start md:items-center">
                    <Link href={pagePath.home.src} className='mb-16' aria-label={'Homepage'}>
                        {/* <Logo className={'text-white w-full max-w-[18.5rem] md:max-w-[12.5rem]'}/> */}
                        <Image width={356} height={260} src='/home/Group 2.png' alt="logo"  className={'text-white w-full max-w-[16rem] md:max-w-[10rem]'}/>
                    </Link>
                    <Link href={pagePath.mailAndContact.info.link} className='mb-9 font-medium'>
                        {pagePath.mailAndContact.info.mail}
                    </Link>
                    <div className="mb-16 flex justify-start items-center flex-wrap gap-4">
                        {pagePath.socialLinks.facebook ?
                            <Link href={pagePath.socialLinks.facebook} className='rounded-[50%] border-2 border-white p-2 hover:text-blue-182146 hover:bg-white' target={'_blank'}>
                                <svg className='w-5' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path></svg>
                            </Link>
                            :
                            <></>
                        }
                        {pagePath.socialLinks.twitter ?
                            <Link href={pagePath.socialLinks.twitter} className='rounded-[50%] border-2 border-white p-2 hover:text-blue-182146 hover:bg-white' target={'_blank'}>
                                <svg className='w-5' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z"></path></svg>
                            </Link>
                            :
                            <></>
                        }
                        {pagePath.socialLinks.instagram ?
                            <Link href={pagePath.socialLinks.instagram} className='rounded-[50%] border-2 border-white p-2 hover:text-blue-182146 hover:bg-white' target={'_blank'}>
                                <svg className='w-5' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path></svg>
                            </Link>
                            :
                            <></>
                        }
                        {pagePath.socialLinks.youtube ?
                            <Link href={pagePath.socialLinks.youtube} className='rounded-[50%] border-2 border-white p-2 hover:text-blue-182146 hover:bg-white' target={'_blank'}>
                                <svg className='w-5' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Youtube</title><path d="M12.2439 4C12.778 4.00294 14.1143 4.01586 15.5341 4.07273L16.0375 4.09468C17.467 4.16236 18.8953 4.27798 19.6037 4.4755C20.5486 4.74095 21.2913 5.5155 21.5423 6.49732C21.942 8.05641 21.992 11.0994 21.9982 11.8358L21.9991 11.9884L21.9991 11.9991C21.9991 11.9991 21.9991 12.0028 21.9991 12.0099L21.9982 12.1625C21.992 12.8989 21.942 15.9419 21.5423 17.501C21.2878 18.4864 20.5451 19.261 19.6037 19.5228C18.8953 19.7203 17.467 19.8359 16.0375 19.9036L15.5341 19.9255C14.1143 19.9824 12.778 19.9953 12.2439 19.9983L12.0095 19.9991L11.9991 19.9991C11.9991 19.9991 11.9956 19.9991 11.9887 19.9991L11.7545 19.9983C10.6241 19.9921 5.89772 19.941 4.39451 19.5228C3.4496 19.2573 2.70692 18.4828 2.45587 17.501C2.0562 15.9419 2.00624 12.8989 2 12.1625V11.8358C2.00624 11.0994 2.0562 8.05641 2.45587 6.49732C2.7104 5.51186 3.45308 4.73732 4.39451 4.4755C5.89772 4.05723 10.6241 4.00622 11.7545 4H12.2439ZM9.99911 8.49914V15.4991L15.9991 11.9991L9.99911 8.49914Z"></path></svg>
                            </Link>
                            :
                            <></>
                        }
                        {pagePath.socialLinks.linkedin ?
                            <Link href={pagePath.socialLinks.linkedin} className='rounded-[50%] border-2 border-white p-2 hover:text-blue-182146 hover:bg-white' target={'_blank'}>
                                <svg className='w-5' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg>
                            </Link>
                            :
                            <></>
                        }
                    </div>

                </div>

                <div className="flex mb-4 md:flex-col justify-start items-start gap-x-5 gap-y-4 md:items-center">
                    <div className="flex mb-4 flex-col justify-start items-start gap-y-4 md:items-center">
                        <p className="py-2 border-b">Quick Links</p>
                        <Link href={pagePath.home.src}
                              className={`py-2 font-medium rounded-md hover:text-[#dedede] ${pagePath.home.src === pathname ? 'text-[#ffffff]' : 'bg-transparent'}`}>
                            Home
                        </Link>
                        <Link href={pagePath.aboutUs.src}
                              className={`py-2 font-medium rounded-md hover:text-[#dedede] ${pagePath.aboutUs.src === pathname ? 'text-[#161616]' : 'bg-transparent'}`}>
                            About us
                        </Link>
                        <Link href={pagePath.contactUs.src}
                              className={`py-2 font-medium rounded-md hover:text-[#dedede] ${pagePath.contactUs.src === pathname ? 'text-[#3a3a3a]' : 'bg-transparent'}`}>
                            Contact us
                        </Link>
                        <Link href={pagePath.Services.src}
                              className={`py-2 font-medium rounded-md hover:text-[#dedede] ${pagePath.Services.src === pathname ? 'text-[#3a3a3a]' : 'bg-transparent'}`}>
                            Services
                        </Link>
                        <Link href={pagePath.ourProjects.src}
                              className={`py-2 font-medium rounded-md hover:text-[#dedede] ${pagePath.ourProjects.src === pathname ? 'text-[#3a3a3a]' : 'bg-transparent'}`}>
                            Projects
                        </Link>
                       
                       
                    </div>
                    
                </div>
            </nav>
            <div className="container">
                <div className="border-t border-dashed border-white"></div>
            </div>
            <nav className="container">
                <div className="text-sm flex pt-7 pb-10 justify-end md:justify-center items-center gap-2 flex-wrap">
                    <div className={`px-1 py-2`}>
                        Copyright © {year} {pagePath.website.name}
                    </div>
                    <div className='inline xs:hidden'>|</div>
                    <div className={`px-1 py-2`}>
                        All Rights Reserved
                    </div>
                    <div className='inline ml:hidden'>|</div>
                    <div className={'px-1 py-2'}>
                        Developed By: 360 Global.
                    </div>
                </div>
            </nav>
        </footer>
    );
}