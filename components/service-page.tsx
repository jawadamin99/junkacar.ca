import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, BadgeDollarSign, Check, ChevronDown, ChevronRight, MapPin, Menu, Phone, ShieldCheck } from "lucide-react";
import logo from "@/assets/junkacar-logo.png";
import { QuoteForm } from "@/components/quote-form";
import { JsonLd } from "@/components/seo-schema";
import styles from "./service-page.module.css";

const phoneDisplay = "(403) 688-7307";
const phoneHref = "tel:+14036887307";

const serviceLinks = [
  ["Junk Car Removal", "/junk-car-removal-calgary"],
  ["Scrap Car Removal", "/scrap-car-removal-calgary"],
  ["Cash for Scrap Cars", "/cash-for-scrap-cars-calgary"],
  ["Free Towing", "/free-towing-calgary"],
] as const;

const supportLinks = [
  ["About Us", "/about"],
  ["How It Works", "/how-it-works"],
  ["What We Buy", "/what-we-buy"],
  ["FAQ", "/faq"],
] as const;

const locationLinks = [
  ["Airdrie", "/cash-for-cars-airdrie"],
  ["Chestermere", "/cash-for-cars-chestermere"],
  ["Cochrane", "/cash-for-cars-cochrane"],
  ["Okotoks", "/cash-for-cars-okotoks"],
  ["Bragg Creek", "/cash-for-cars-bragg-creek"],
  ["Strathmore", "/cash-for-cars-strathmore"],
  ["High River", "/cash-for-cars-high-river"],
  ["Irricana", "/cash-for-cars-irricana"],
  ["Diamond Valley", "/cash-for-cars-diamond-valley"],
  ["Didsbury", "/cash-for-cars-didsbury"],
  ["Nanton", "/cash-for-cars-nanton"],
  ["Canmore", "/cash-for-cars-canmore"],
  ["Banff", "/cash-for-cars-banff"],
  ["Olds", "/cash-for-cars-olds"],
  ["Red Deer", "/cash-for-cars-red-deer"],
  ["Ponoka", "/cash-for-cars-ponoka"],
  ["Brooks", "/cash-for-cars-brooks"],
  ["Lethbridge", "/cash-for-cars-lethbridge"],
  ["Medicine Hat", "/cash-for-cars-medicine-hat"],
] as const;

export type ContentCard = { title: string; text: ReactNode };
export type ContentTable = { headings: readonly string[]; rows: readonly (readonly string[])[] };
export type ServiceSection = {
  eyebrow?: string;
  title: string;
  intro?: readonly ReactNode[];
  cards?: readonly ContentCard[];
  table?: ContentTable;
  after?: readonly ReactNode[];
  lists?: readonly { title?: string; items: readonly string[] }[];
  image?: StaticImageData;
  imageAlt?: string;
  dark?: boolean;
};

export type ServicePageData = {
  path: string;
  label: string;
  h1: string;
  subhead: string;
  primaryCta: string;
  heroImage: StaticImageData;
  heroAlt: string;
  trustItems: readonly string[];
  sections: readonly ServiceSection[];
  faqs: readonly (readonly [string, string])[];
  finalTitle: string;
  finalText: string;
  finalCta: string;
};

function SiteHeader() {
  return <>
    <div className={styles.utility}><div className={styles.shell}><span><MapPin aria-hidden="true" /> Calgary &amp; communities across Alberta</span><span className={styles.promise}>Same-day pickup · Free towing · Paid at collection</span><a href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a></div></div>
    <header className={styles.header}><div className={styles.shell}>
      <Link className={styles.brand} href="/" aria-label="Junk A Car home"><Image src={logo} alt="Junk A Car" priority sizes="(max-width: 600px) 145px, 180px" /></Link>
      <nav className={styles.desktopNav} aria-label="Main navigation"><Link href="/">Home</Link><div className={styles.dropdown}><span tabIndex={0}>About Us <ChevronDown aria-hidden="true" /></span><div>{supportLinks.map(([name, href]) => <Link href={href} key={href}>{name}</Link>)}</div></div><div className={styles.dropdown}><span tabIndex={0}>Services <ChevronDown aria-hidden="true" /></span><div>{serviceLinks.map(([name, href]) => <Link href={href} key={href}>{name}</Link>)}</div></div><div className={styles.dropdown}><span tabIndex={0}>Locations <ChevronDown aria-hidden="true" /></span><div>{locationLinks.map(([name, href]) => <Link href={href} key={href}>{name}</Link>)}</div></div><Link href="/contact">Contact</Link></nav>
      <a className={styles.offerButton} href="#quote">Get a Quote</a>
      <details className={styles.mobileMenu}><summary aria-label="Open main menu"><Menu aria-hidden="true" /></summary><nav aria-label="Mobile navigation"><Link href="/">Home</Link><details><summary>About Us <ChevronDown aria-hidden="true" /></summary><div>{supportLinks.map(([name, href]) => <Link href={href} key={href}>{name}</Link>)}</div></details><details><summary>Services <ChevronDown aria-hidden="true" /></summary><div>{serviceLinks.map(([name, href]) => <Link href={href} key={href}>{name}</Link>)}</div></details><details><summary>Locations <ChevronDown aria-hidden="true" /></summary><div>{locationLinks.map(([name, href]) => <Link href={href} key={href}>{name}</Link>)}</div></details><Link href="/contact">Contact</Link><a className={styles.mobileOffer} href="#quote">Get a Quote</a></nav></details>
    </div></header>
  </>;
}

function SiteFooter() {
  return <footer className={styles.footer}><div className={`${styles.shell} ${styles.footerGrid}`}><div className={styles.footerBrand}><Image src={logo} alt="Junk A Car" sizes="190px" /><p>Fair cash offers, free towing, and same-day pickup across Calgary and Alberta.</p><a href={phoneHref}><Phone aria-hidden="true" /> {phoneDisplay}</a><a href="mailto:info@junkacar.ca">info@junkacar.ca</a><p>AMVIC licensed company</p></div><div><h3>Services</h3>{serviceLinks.map(([name, href]) => <Link href={href} key={href}>{name}</Link>)}</div><div className={styles.footerLocations}><h3>Top Locations</h3>{locationLinks.slice(0,8).map(([name, href]) => <Link href={href} key={href}>{name}</Link>)}</div><div><h3>Visit or contact</h3><p>6915 40 St NE<br />Calgary, AB T3J 4H2</p><p>Daily: 7:00 am–11:00 pm</p><Link href="/contact">Contact us</Link><a className={styles.footerQuote} href="#quote">Request a quote <ArrowRight aria-hidden="true" /></a></div></div><div className={`${styles.shell} ${styles.footerBottom}`}><span>© {new Date().getFullYear()} Junk A Car</span><span>AMVIC licensed company · Serving Calgary &amp; Alberta</span></div></footer>;
}

export function ServicePage({ data }: { data: ServicePageData }) {
  const areaName = data.path.startsWith("/cash-for-cars-") ? data.label.replace("Cash for Cars ", "") : "Calgary";
  const isLocationPage = data.path.startsWith("/cash-for-cars-");
  const isSupportPage = ["/about", "/how-it-works", "/what-we-buy", "/faq", "/contact"].includes(data.path);
  const breadcrumbName = isLocationPage ? areaName : data.label.replace(/ Calgary$/, "");
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: data.faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "@id": `https://www.junkacar.ca${data.path}#service`, name: data.label, serviceType: data.label, provider: { "@id": "https://www.junkacar.ca/#business" }, areaServed: isLocationPage ? { "@id": `https://www.junkacar.ca${data.path}#area` } : { "@type": "City", name: "Calgary" }, url: `https://www.junkacar.ca${data.path}` };
  const supportPageSchema = { "@context": "https://schema.org", "@type": data.path === "/about" ? "AboutPage" : data.path === "/contact" ? "ContactPage" : "WebPage", "@id": `https://www.junkacar.ca${data.path}#webpage`, name: data.label, url: `https://www.junkacar.ca${data.path}`, isPartOf: { "@id": "https://www.junkacar.ca/#website" }, about: { "@id": "https://www.junkacar.ca/#business" }, inLanguage: "en-CA" };
  const locationSchema = { "@context": "https://schema.org", "@type": "Place", "@id": `https://www.junkacar.ca${data.path}#area`, name: areaName, containedInPlace: { "@type": "AdministrativeArea", name: "Alberta" }, url: `https://www.junkacar.ca${data.path}` };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.junkacar.ca/" }, { "@type": "ListItem", position: 2, name: breadcrumbName, item: `https://www.junkacar.ca${data.path}` }] };

  return <>
    <a className={styles.skipLink} href="#main">Skip to main content</a>
    <SiteHeader />
    <main id="main">
      <section className={styles.hero}><div className={styles.orbit} /><div className={`${styles.shell} ${styles.heroGrid}`}><div className={styles.heroCopy}><nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><ChevronRight aria-hidden="true" /><span>{data.label}</span></nav><div className={styles.location}><MapPin aria-hidden="true" /> {areaName}, Alberta</div><h1>{data.h1}</h1><p>{data.subhead}</p><div className={styles.heroActions}><a className="button button-primary" href="#quote">{data.primaryCta} <ArrowRight aria-hidden="true" /></a><a className="button button-outline" href={phoneHref}><Phone aria-hidden="true" /> Call {phoneDisplay}</a></div></div><div className={styles.heroMedia}><Image src={data.heroImage} alt={data.heroAlt} fill priority sizes="(max-width: 820px) 100vw, 48vw" /><div className={styles.heroBadge}><ShieldCheck aria-hidden="true" /><span><strong>Free pickup</strong>Payment at collection</span></div></div></div><div id="quote" className={`${styles.shell} ${styles.heroForm}`}><QuoteForm /></div><div className={styles.trustBar}><div>{data.trustItems.map((item) => <span key={item}><Check aria-hidden="true" />{item}</span>)}</div></div></section>

      {data.sections.map((section, index) => <section className={`${styles.contentSection} ${section.dark ? styles.dark : ""} ${index % 2 ? styles.paper : ""}`} key={section.title}><div className={styles.shell}><header className={styles.sectionHeading}>{section.eyebrow ? <span>{section.eyebrow}</span> : null}<h2>{section.title}</h2></header>{section.image ? <div className={styles.imageSplit}><div className={styles.sectionImage}><Image src={section.image} alt={section.imageAlt ?? ""} fill sizes="(max-width: 820px) 100vw, 43vw" /></div><div className={styles.prose}>{section.intro?.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}</div></div> : <div className={styles.prose}>{section.intro?.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}</div>}{section.lists ? <div className={styles.contentLists}>{section.lists.map((list) => <div key={list.title ?? list.items[0]}>{list.title ? <h3>{list.title}</h3> : null}<ul>{list.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div> : null}{section.cards ? <div className={styles.cardGrid}>{section.cards.map((card, cardIndex) => <article key={card.title}><span>{String(cardIndex + 1).padStart(2, "0")}</span><h3>{card.title}</h3><p>{card.text}</p></article>)}</div> : null}{section.table ? <div className={styles.tableWrap}><table><thead><tr>{section.table.headings.map((heading) => <th key={heading}>{heading}</th>)}</tr></thead><tbody>{section.table.rows.map((row) => <tr key={row[0]}>{row.map((cell, cellIndex) => cellIndex === 0 ? <th key={cell}>{cell}</th> : <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div> : null}{section.after ? <div className={`${styles.prose} ${styles.after}`}>{section.after.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}</div> : null}</div></section>)}

      {data.faqs.length ? <section className={styles.faq}><div className={`${styles.shell} ${styles.faqGrid}`}><div><span className={styles.eyebrow}>Straight answers</span><h2>Frequently Asked Questions</h2><p>Still wondering about your vehicle? Call and talk to a real person.</p><a className="text-link" href={phoneHref}><Phone aria-hidden="true" />{phoneDisplay}</a></div><div className={styles.faqList}>{data.faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<i><ChevronRight aria-hidden="true" /></i></summary><p>{answer}</p></details>)}</div></div></section> : null}
      <section className={styles.finalCta}><div className={styles.finalOrbit} /><div className={styles.shell}><span>Ready when you are</span><h2>{data.finalTitle}</h2><p>{data.finalText}</p><div><a className="button button-white" href={phoneHref}><Phone aria-hidden="true" /> Call {phoneDisplay}</a><a className="button button-dark" href="#quote">{data.finalCta} <ArrowRight aria-hidden="true" /></a></div></div></section>
    </main>
    <SiteFooter />
    <div className={styles.mobileActions}><a href={phoneHref}><Phone aria-hidden="true" />Call now</a><a href="#quote"><BadgeDollarSign aria-hidden="true" />Get offer</a></div>
    {isSupportPage ? <JsonLd data={supportPageSchema} /> : <JsonLd data={serviceSchema} />}{isLocationPage ? <JsonLd data={locationSchema} /> : null}<JsonLd data={breadcrumbSchema} />{data.faqs.length ? <JsonLd data={faqSchema} /> : null}
  </>;
}
