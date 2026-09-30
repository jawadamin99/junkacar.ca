import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: "https://www.junkacar.ca/", lastModified, changeFrequency: "weekly", priority: 1 },
    { url: "https://www.junkacar.ca/junk-car-removal-calgary", lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.junkacar.ca/scrap-car-removal-calgary", lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.junkacar.ca/cash-for-scrap-cars-calgary", lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.junkacar.ca/free-towing-calgary", lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.junkacar.ca/about", lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: "https://www.junkacar.ca/how-it-works", lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: "https://www.junkacar.ca/what-we-buy", lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: "https://www.junkacar.ca/faq", lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: "https://www.junkacar.ca/contact", lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: "https://www.junkacar.ca/cash-for-cars-airdrie", lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.junkacar.ca/cash-for-cars-chestermere", lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.junkacar.ca/cash-for-cars-cochrane", lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.junkacar.ca/cash-for-cars-okotoks", lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.junkacar.ca/cash-for-cars-bragg-creek", lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.junkacar.ca/cash-for-cars-strathmore", lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.junkacar.ca/cash-for-cars-high-river", lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.junkacar.ca/cash-for-cars-irricana", lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.junkacar.ca/cash-for-cars-diamond-valley", lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.junkacar.ca/cash-for-cars-didsbury", lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.junkacar.ca/cash-for-cars-nanton", lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.junkacar.ca/cash-for-cars-canmore", lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.junkacar.ca/cash-for-cars-banff", lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.junkacar.ca/cash-for-cars-olds", lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.junkacar.ca/cash-for-cars-red-deer", lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.junkacar.ca/cash-for-cars-ponoka", lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.junkacar.ca/cash-for-cars-brooks", lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.junkacar.ca/cash-for-cars-lethbridge", lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.junkacar.ca/cash-for-cars-medicine-hat", lastModified, changeFrequency: "monthly", priority: 0.9 },
  ];
}
