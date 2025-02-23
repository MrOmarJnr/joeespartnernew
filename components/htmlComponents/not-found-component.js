import React from 'react';
import NotFoundAnimation from "@/components/animations/notFoundAnimation";
import Link from "next/link";
import {pagePath} from "@/components/navigation/pagePath";

export default function NotFoundComponent() {
    return (
        <>
            <section className="">
                <div className="container">
                    <div className="w-full flex flex-col justify-center items-center py-20 min-h-[85vh]">
                        <NotFoundAnimation/>
                        <Link href={pagePath.home.src}
                              className="px-10 py-4 border border-blue-5E82B9 hover:bg-blue-5E82B9 rounded-md">Home</Link>
                    </div>
                </div>
            </section>
        </>
    );
}