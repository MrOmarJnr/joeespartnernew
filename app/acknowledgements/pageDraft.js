import React from 'react';
import Header from "@/components/navigation/header";
import Footer from "@/components/navigation/footer";
import {pagePath} from "@/components/navigation/pagePath";
import JsonLd from "@/components/metaTools/json-ld";

export default function Acknowledgements() {
    const jsonLdWebpage = {
        "@context": "https://schema.org/",
        "@type": "WebPage",
        "name": pagePath.acknowledgements.title,
        "description": pagePath.acknowledgements.description,
        "url": `https://www.ngicgh.com/${pagePath.acknowledgements.src}`,
        "publisher": {
            "@type": "WebSite",
            "name": "Next Gen Infraco"
        }
    }
    return (
        <>
            <JsonLd schema={jsonLdWebpage}/>
            <Header/>
            <main className='min-h-screen'>
                <section>
                    <div className="container">
                        <h1 className='text-10'>Hello World</h1>
                        <p className='text-20'>continue to Acknowledgements page here</p>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}