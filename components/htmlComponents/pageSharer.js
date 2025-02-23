'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";
import Reveal from "@/components/animations/reveal";
import {pagePath} from "@/components/navigation/pagePath";

export default function PageSharer({title}) {
    const path = usePathname()
    return (
        <>
            <Reveal name={'fadeInLeft'} className="flex flex-wrap gap-3">
                <Link className='group border-2 rounded-[50%] w-8 h-8' href={`https://www.facebook.com/sharer/sharer.php?u=${pagePath.website.url}${path}`} target='_blank'>
                    <svg id='facebook' className='w-full h-full' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle className='text-white group-hover:text-blue-020A29' cx="50" cy="50" r="50" fill="currentColor"/>
                        <path className='text-blue-020A29 group-hover:text-white' d="M80 50C80 33.4297 66.5703 20 50 20C33.4297 20 20 33.4297 20 50C20 64.0625 29.6914 75.875 42.7578 79.1211V59.1641H36.5703V50H42.7578V46.0508C42.7578 35.8438 47.375 31.1094 57.4063 31.1094C59.3047 31.1094 62.5859 31.4844 63.9336 31.8594V40.1562C63.2305 40.0859 62 40.0391 60.4648 40.0391C55.543 40.0391 53.6445 41.9023 53.6445 46.7422V50H63.4414L61.7539 59.1641H53.6328V79.7773C68.4922 77.9844 80 65.3398 80 50Z" fill="currentColor"/>
                    </svg>
                </Link>
                <Link className='group border-2 rounded-[50%] w-8 h-8' href={`https://twitter.com/intent/tweet?text=${title} via=${pagePath.website.url}${path}`} target='_blank'>
                    <svg id='twitter' className='w-full h-full' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle className='text-white group-hover:text-black' cx="50" cy="50" r="50" fill="currentColor"/>
                        <path className='text-black group-hover:text-white' d="M65.6094 25.625H73.8828L55.8125 46.2734L77.0703 74.375H60.4297L47.3867 57.3359L32.4805 74.375H24.1953L43.5195 52.2852L23.1406 25.625H40.2031L51.9805 41.1992L65.6094 25.625ZM62.7031 69.4297H67.2852L37.707 30.3125H32.7852L62.7031 69.4297Z" fill="currentColor"/>
                    </svg>
                </Link>
                <Link className='group border-2 rounded-[50%] w-8 h-8' href={`https://www.linkedin.com/sharing/share-offsite/?url=${pagePath.website.url}${path}`} target='_blank'>
                    <svg id='linkedin' className='w-full h-full' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle className='text-white group-hover:text-blue-182146' cx="50" cy="50" r="50" fill="currentColor"/>
                        <path className='text-blue-182146 group-hover:text-white' d="M72.75 23.75H27.7383C25.6758 23.75 24 25.4492 24 27.5352V72.4648C24 74.5508 25.6758 76.25 27.7383 76.25H72.75C74.8125 76.25 76.5 74.5508 76.5 72.4648V27.5352C76.5 25.4492 74.8125 23.75 72.75 23.75ZM39.8672 68.75H32.0859V43.6953H39.8789V68.75H39.8672ZM35.9766 40.2734C33.4805 40.2734 31.4648 38.2461 31.4648 35.7617C31.4648 33.2773 33.4805 31.25 35.9766 31.25C38.4609 31.25 40.4883 33.2773 40.4883 35.7617C40.4883 38.2578 38.4727 40.2734 35.9766 40.2734ZM69.0352 68.75H61.2539V56.5625C61.2539 53.6563 61.1953 49.918 57.2109 49.918C53.1562 49.918 52.5352 53.082 52.5352 56.3516V68.75H44.7539V43.6953H52.2188V47.1172H52.3242C53.3672 45.1484 55.9102 43.0742 59.6953 43.0742C67.5703 43.0742 69.0352 48.2656 69.0352 55.0156V68.75Z" fill="currentColor"/>
                    </svg>
                </Link>
            </Reveal>
        </>
    );
}