import React from 'react';
import Link from "next/link";

export default function ButtonCustom({name, link, target}) {
    return (
        <>
            <Link href={link} target={target? target : '_self'} className="px-5 py-2 relative border-b border-transparent transition-all duration-500 text-center before:absolute before:top-0 before:bottom-0 before:left-0 before:right-auto before:z-[1] before:transition-all before:border-b before:border-white-DBDBDB before:duration-500 before:w-0 hover:before:w-full ">{name}</Link>
        </>
    );
}