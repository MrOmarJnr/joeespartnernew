/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'joeespartners.com',
                pathname: '/staging/wp-content/uploads/**/**',
            },
        ],
        domains: ['joeespartners.com'],
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: cspHeader.replace(/\n/g, ''),
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=31536000; includeSubdomains; preload',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY'
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin, strict-origin-when-cross-origin'
                    },
                    {
                        key: 'X-Robots-Tag',
                        value: 'index, follow'
                    },
                ],
            },
        ]
    },
};

export default nextConfig;

const cspHeader = `
    font-src 'self' data:;
    object-src 'none';
    base-uri 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
`;
