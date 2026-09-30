import type { Metadata } from "next";
import Script from "next/script";
import logo from "@/assets/junkacar-logo.png";
import { Ga4Tracking } from "@/components/ga4-tracking";
import { JsonLd } from "@/components/seo-schema";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.junkacar.ca"),
  applicationName: "Junk A Car",
  title: "Cash for Junk Cars Calgary | Free Towing, Same-Day Pickup",
  description: "Get cash for junk cars in Calgary — running or not. We buy non-running, hail-damaged and scrap vehicles, tow free citywide, and pay on pickup. Call (403) 688-7307.",
  alternates: { canonical: "/" },
  authors: [{ name: "Junk A Car" }],
  creator: "Junk A Car",
  publisher: "Junk A Car",
  category: "Automotive",
  icons: {
    icon: [{ url: "/icon.png", sizes: "512x512", type: "image/png" }],
    shortcut: [{ url: "/icon.png", sizes: "512x512", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  formatDetection: { telephone: false, address: false, email: false },
  openGraph: {
    title: "Cash for Junk Cars Calgary | Free Towing, Paid on Pickup",
    description: "Same-day cash offers on junk, scrap, damaged and non-running vehicles across Calgary and Alberta. Free towing, paid at collection.",
    url: "https://www.junkacar.ca/",
    type: "website",
    siteName: "Junk A Car",
    locale: "en_CA",
    images: [{ url: logo.src, alt: "Junk A Car logo" }],
  },
  twitter: { card: "summary_large_image", title: "Cash for Junk Cars Calgary | Free Towing, Paid on Pickup", description: "Same-day cash offers on junk, scrap, damaged and non-running vehicles across Calgary and Alberta. Free towing, paid at collection.", images: [logo.src] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "AutomotiveBusiness"],
    "@id": "https://www.junkacar.ca/#business",
    name: "Junk A Car",
    url: "https://www.junkacar.ca/",
    logo: `https://www.junkacar.ca${logo.src}`,
    image: `https://www.junkacar.ca${logo.src}`,
    telephone: "+1-403-688-7307",
    email: "info@junkacar.ca",
    priceRange: "$-$$$$",
    description: "Licensed Alberta vehicle buyer offering cash for junk, scrap, damaged and non-running vehicles with free towing.",
    address: { "@type": "PostalAddress", streetAddress: "6915 40 St NE", addressLocality: "Calgary", addressRegion: "AB", postalCode: "T3J 4H2", addressCountry: "CA" },
    openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "07:00", closes: "23:00" }],
    areaServed: { "@type": "AdministrativeArea", name: "Alberta" },
    contactPoint: { "@type": "ContactPoint", telephone: "+1-403-688-7307", email: "info@junkacar.ca", contactType: "sales", areaServed: "CA-AB", availableLanguage: "English" },
  };
  const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", "@id": "https://www.junkacar.ca/#website", url: "https://www.junkacar.ca/", name: "Junk A Car", publisher: { "@id": "https://www.junkacar.ca/#business" }, inLanguage: "en-CA" };
  return <html lang="en-CA"><body>{children}<Ga4Tracking /><JsonLd data={businessSchema} /><JsonLd data={websiteSchema} /><Script async src="https://www.googletagmanager.com/gtag/js?id=G-F5757MZ9RN" strategy="afterInteractive" /><Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', 'G-F5757MZ9RN');`}</Script></body></html>;
}
