// app/projects/page.js

import ProjectsClient from "@/components/projectClient";
import { pagePath } from "@/components/navigation/pagePath";
import JsonLd from "@/components/metaTools/json-ld";
import Header from "@/components/navigation/header";
import ProjectBanner from "@/components/banners/projectBanner";
import Footer from "@/components/navigation/footer";

// Export metadata from this Server Component
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
};

// Main component for the Projects page
export default function ProjectsPage() {
    const jsonLdWebpage = {
        "@context": "https://schema.org/",
        "@type": "WebPage",
        "name": pagePath.ourProjects.title,
        "description": pagePath.ourProjects.description,
        "url": `${pagePath.website.url}${pagePath.ourProjects.src}`,
        "publisher": {
            "@type": "WebSite",
            "name": pagePath.website.name
        }
    };

    return (
        <>
            <JsonLd schema={jsonLdWebpage} />
            <Header />
            <ProjectBanner/>
            <ProjectsClient /> {/* Render the Client Component */}
            <Footer/>
        </>
    );
}