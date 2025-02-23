export default function manifest() {
    return {
        name: 'Joees & Partners Limitedo',
        short_name: 'Joees & Partners Limitedo',
        description: 'Explore Joees & Partners Limited is project management, and business support services, empowering businesses to thrive in today&apos;s dynamic environment.',
        start_url: '/',
        display: 'standalone',
        background_color: '#020A29',
        theme_color: '#020A29',
        icons: [
            {
                src: '/favicon.ico',
                sizes: '48x48',
                type: 'image/x-icon',
            },
            {
                src: '/icon.svg',
                sizes: 'any',
                type: 'image/svg+xml',
            },
            {
                src: '/apple-icon.png',
                sizes: '180x180',
                type: 'image/png',
            },
        ],
    }
}