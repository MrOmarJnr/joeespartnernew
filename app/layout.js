export const  dynamic = 'force-dynamic'

import { Roboto_Condensed } from "next/font/google";
import localFont from 'next/font/local'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google'
import {pagePath} from "@/components/navigation/pagePath";
import "./globals.css";
import JsonLd from "@/components/metaTools/json-ld";


const microsoft_tai_lue = localFont({
  src: [
    {
      path: '../public/font/microsoft_new_tai_lue.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/font/microsoft_new_tai_lue_bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-microsoft-new-tai-lue',
  display: 'swap',
})
const roboto_condensed = Roboto_Condensed({ subsets: ['latin'], display: 'swap', weight: ['400', '500', '600', '700', '800', '900'], style: ['normal', 'italic'], variable: '--font-roboto-condensed'})

const googleSiteVerification = 'aBd_5Al615CCvIpCSZK1FqyJviiE2q2QWzGTw4uY7js'
const facebookDomainVerification = 'random_string_oqv7hi8dol14iac97fp'


export const metadata = {
  title: pagePath.home.title,
  description: pagePath.home.description,
  keywords: pagePath.home.keyword,
  authors: [{ name: pagePath.website.name, url: pagePath.website.url}],
  metadataBase: new URL(pagePath.website.url),
  openGraph: {
    title: pagePath.home.title,
    description: pagePath.home.description,
    url: pagePath.website.url,
    siteName: pagePath.website.name,
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: '/',
  },
  verification: {
    google: googleSiteVerification,
    other: {
      'facebook-domain-verification': facebookDomainVerification,
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  const jsonLdOrg = {
    "@context": "https://www.schema.org",
    "@type": "Organization",
    "name": pagePath.website.name,
    "url": pagePath.website.url,
    "logo": "https://www.ngicgh.com/icon.svg",
    "image": "https://www.ngicgh.com/apple-icon.png",
    "description": "Next Gen Infraco (NGIC) is a 4G and 5G Network as a Service (NaaS) operator, revolutionizing connectivity in Ghana and beyond. The Government of Ghana has awarded Next Gen Infraco access to deploy 5G across the country, bringing more equality to the data services market, lowering prices, and creating a level playing field for ecosystem players. Our high-speed, high-capacity, and low-latency shared data network empowers MNOs, OTTs and ISPs to drive Ghana’s digitalization goals over the next 10 years. In addition to reducing capex and opex, it will democratize broadband access, usher innovation, and serve as a backbone for content access, security and digital inclusivity.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No. 12 Nii Amaah Ollenu Street, Airport-West, Accra, Ghana",
      "addressLocality": "Airport Residential Area",
      "addressRegion": "Accra",
      "postalCode": "G4-192-5563",
      "addressCountry": "GH"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": pagePath.mailAndContact.info.mail
    },
    "sameAs": [
      pagePath.socialLinks.linkedin,
      pagePath.website.url
    ]
  }
  const jsonLdWebsite = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": pagePath.website.name,
    "url": pagePath.website.url,
    "sameAs": [
      pagePath.socialLinks.linkedin,
    ]
  }
  return (
    <html lang="en">
      <body className={`${microsoft_tai_lue.variable} ${roboto_condensed.variable} text-p leading-tight font-normal font-microsoftNewTaiLue text-white bg-white scroll-smooth`}>
      <JsonLd schema={jsonLdOrg}/>
      <JsonLd schema={jsonLdWebsite}/>
      {children}
        <SpeedInsights/>
      </body>
      <GoogleAnalytics gaId="G-7MELRQMQ80" />
    </html>
  );
}
