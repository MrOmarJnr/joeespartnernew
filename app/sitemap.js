import { pagePath } from "@/components/navigation/pagePath";

export default function Sitemap() {
    return [
        {
            url: `${pagePath.website.url}${pagePath.home.src}`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${pagePath.website.url}${pagePath.aboutUs.src}`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        }, 
        {
            url: `${pagePath.website.url}${pagePath.contactUs.src}`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${pagePath.website.url}${pagePath.ourProjects.src}`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];
}
