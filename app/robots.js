import {pagePath} from "@/components/navigation/pagePath";

export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            // disallow: '/private/',
        },
        sitemap: `${pagePath.website.url}/sitemap.xml`,
    }
}