import type { Metadata } from "next";
import Link from "next/link";
import { ServicePage, type ServicePageData } from "@/components/service-page";
import heroImage from "@/assets/images/blue-mini-countryman-driveway-calgary.jpeg";
import commuterImage from "@/assets/images/silver-saturn-used-car-calgary.jpeg";

export const metadata: Metadata = {
  title: "Cash for Junk Cars Airdrie | Free Towing, Same-Day Pickup",
  description: "Cash for junk cars in Airdrie, AB. We buy non-running, hail-damaged and scrap vehicles, tow free from any street or driveway, and pay on pickup.",
  alternates: { canonical: "https://www.junkacar.ca/cash-for-cars-airdrie" },
  openGraph: {
    title: "Cash for Junk Cars Airdrie | Free Towing, Same-Day Pickup",
    description: "Cash for junk cars in Airdrie, AB. We buy non-running, hail-damaged and scrap vehicles, tow free from any street or driveway, and pay on pickup.",
    url: "https://www.junkacar.ca/cash-for-cars-airdrie",
    type: "website",
    images: [{ url: heroImage.src, alt: "Vehicle ready for cash pickup from an Airdrie driveway" }],
  },
};

const data: ServicePageData = {
  path: "/cash-for-cars-airdrie",
  label: "Cash for Cars Airdrie",
  h1: "Cash for Junk Cars in Airdrie — Free Towing, Paid on the Spot",
  subhead: "We're twenty-five minutes down the QEII from you. If there's a vehicle on your driveway, parked out front or sitting in the garage that isn't going anywhere under its own power, we'll make you a real offer the same day, tow it away free, and pay you before it leaves your street.",
  primaryCta: "Get My Cash Offer",
  heroImage,
  heroAlt: "Blue Mini Countryman ready for cash car pickup from an Airdrie driveway",
  trustItems: ["Same-day offers", "Free Airdrie towing", "Paid on the spot", "Running or not"],
  sections: [
    {
      eyebrow: "The Airdrie problem",
      title: "A New City With Nowhere to Park a Dead Car",
      intro: ["Airdrie is a young city in the most literal sense. Most of it — Coopers Crossing, Bayside, Ravenswood, Kings Heights, Reunion, Williamstown, Midtown, Cobblestone Creek — has been built in the last two decades. That brings a lot of good things, but it also creates a very specific vehicle problem that older towns simply don't have."],
      cards: [
        { title: "Streets designed for moving cars, not storing them", text: <>Newer Airdrie subdivisions have narrower streets, short driveways and front-attached garages that fit one vehicle comfortably and two if nobody minds shuffling. On-street parking fills up by evening, and through winter the City&apos;s snow-clearing work means vehicles left sitting on the street get noticed quickly.<br /><br />In an older town, a car that stops running can sit beside a detached garage in the back lane for three years and nobody cares. In Airdrie, it&apos;s parked right where every neighbour walks past it twice a day. A vehicle that hasn&apos;t moved in weeks tends to prompt a conversation — with the neighbours, the HOA, or the City — much sooner than people expect.</> },
        { title: "Families outgrow vehicles quickly", text: <>Airdrie has one of the youngest populations in the province, and young families change vehicles fast. The compact that worked for two people doesn&apos;t fit two car seats and a stroller. The sedan gets replaced by a minivan, and a few years later the minivan gets replaced by a three-row SUV.<br /><br />The older vehicle often stays behind “as a spare.” Then one day someone notices it hasn&apos;t been driven since last summer, the battery is flat, and it&apos;s still costing insurance and registration every single month.</> },
        { title: "The QEII commute puts kilometres on fast", text: <>A large share of Airdrie works in Calgary, which means a daily run down Highway 2 past CrossIron Mills and Balzac into the city — sixty kilometres a day before anyone has gone anywhere on the weekend. Over a working year that&apos;s fifteen thousand kilometres of pure commuting.<br /><br />Add five months of brine on the QEII, Yankee Valley Boulevard and 8th Street, and a six-year-old Airdrie vehicle can easily carry 220,000 km with rust already starting in the rockers and brake lines. That combination is precisely where dealers stop offering anything meaningful on trade. It costs you far less with us, because we value a vehicle on weight and parts rather than on how much road life it has left.</> },
        { title: "Hail doesn't stop at the city limits", text: "Airdrie sits in the same hail corridor as north Calgary, and summer storms have written off plenty of perfectly healthy vehicles here. A mechanically sound SUV with a dimpled roof and a cracked windshield is one of the best vehicles we buy, because we're pricing what's underneath rather than the paint." },
      ],
    },
    {
      eyebrow: "Valuation",
      title: "What Airdrie Junk Cars Are Worth",
      table: {
        headings: ["Vehicle", "Typical offer"],
        rows: [
          ["Older compact or sedan, non-running", "$250 – $800"],
          ["Minivan or crossover, non-running but complete", "$500 – $1,800"],
          ["High-kilometre QEII commuter, still running", "$900 – $4,000"],
          ["Hail-damaged, mechanically sound", "$1,500 – $8,000"],
          ["Non-running truck or diesel pickup", "$900 – $3,500"],
          ["Newer running car, SUV or truck", "$4,000 – $20,000"],
        ],
      },
      after: ["Four things set your number. Curb weight sets the floor, because steel trades by the tonne. Salvageable parts — a good transmission, clean doors, glass, alloy wheels — push it up. The catalytic converter is its own line item and can be worth hundreds on its own. And current scrap metal prices move the whole thing week to week.", "Mileage, interestingly, matters very little to us. It's everything to a dealer and almost nothing to weight and parts value, which is why high-kilometre Airdrie commuters usually do better here than on a trade-in at a dealership along the Highway 2 strip."],
    },
    {
      eyebrow: "One call handles it",
      title: "Our Services in Airdrie",
      intro: ["Whatever state your vehicle is in, one of these fits it — and every one includes free towing from anywhere in Airdrie and payment before the vehicle leaves."],
      cards: [
        { title: "Junk Car Removal in Airdrie", text: <>A dead car on a narrow Airdrie street or inside a front-attached garage is the most common job we do here. Our <Link href="/junk-car-removal-calgary">junk car removal service</Link> handles the winch-out, the tow and the paperwork in one visit — especially useful when a neighbour, the HOA or a snow-route notice has already put a deadline on it.</> },
        { title: "Scrap Car Removal in Airdrie", text: <>When years of QEII brine have reached the frame, or the repair list is longer than the car is worth, it&apos;s a scrap vehicle. Our <Link href="/scrap-car-removal-calgary">scrap car removal</Link> covers collection and proper end-of-life processing — fluids drained, usable parts recovered, metal recycled — so nothing ends up leaking into a Rocky View field.</> },
        { title: "Cash for Scrap Cars in Airdrie", text: <>Want to see how the number is built before you commit? Our <Link href="/cash-for-scrap-cars-calgary">cash for scrap cars page</Link> explains how curb weight, aluminium and copper content and the catalytic converter add up — handy if you&apos;re weighing our offer against a trade-in at one of the Highway 2 dealerships.</> },
        { title: "Free Towing in Airdrie", text: <>Coopers Crossing, East Lake Industrial or an acreage off Range Road 11 — the pickup costs you nothing. <Link href="/free-towing-calgary">Free towing</Link> is built into every offer, so there&apos;s no charge for the run up from Calgary and nothing deducted when the truck arrives.</> },
      ],
    },
    {
      eyebrow: "Local calls",
      title: "The Calls We Get From Airdrie Every Week",
      cards: [
        { title: "“It's on the street and I've been asked to move it.”", text: "Tell us when the deadline is and we'll work to it. Same-day pickup from Airdrie is normal for morning calls — we're twenty-five minutes away, and a vehicle that won't start is no obstacle for a flat deck and winch." },
        { title: "“It's in the front garage and the driveway slopes.”", text: "Very common in newer builds. We winch it out, and a sloped driveway just means we set up a little differently. A quick photo of the garage and driveway when you call helps us bring the right truck." },
        { title: "“It's the spare car we never use.”", text: "Then it's costing you insurance, registration and a parking space for nothing. Before you sell, check your policy — once the vehicle is gone, prepaid coverage often comes back as a refund that nobody phones to tell you about." },
        { title: "“There's still financing on it.”", text: "Common with newer family vehicles that got written off after hail or a collision. The lien clears as part of the sale. Mention it upfront so it's arranged properly rather than discovered on the day." },
        { title: "“My HOA or condo board wants it gone.”", text: "Some Airdrie townhome and condo complexes have rules about inoperable vehicles in visitor or assigned stalls. Tell us the complex and any access rules, and we'll schedule the pickup around them." },
      ],
    },
    {
      eyebrow: "The real decision",
      title: "Should You Fix It or Sell It?",
      image: commuterImage,
      imageAlt: "High-kilometre silver commuter car being evaluated for sale in Airdrie",
      intro: ["This is the real decision most Airdrie owners are stuck on, so here's a simple way to think about it.", "Take the repair quote and compare it with what the vehicle would realistically be worth once fixed — not what you paid for it, and not what it was worth five years ago. If the repair costs more than half of that finished value, and the vehicle is more than ten years old or over 200,000 km, selling almost always makes more financial sense. There is usually another repair waiting behind the first one.", "If you're unsure, get our number first. It costs nothing, and it gives you a firm figure to put beside the repair quote so the decision becomes arithmetic instead of guesswork."],
    },
    {
      eyebrow: "Coverage",
      title: "Where We Collect in Airdrie",
      cards: [
        { title: "Residential Airdrie", text: "Every community — Coopers Crossing, Bayside, Ravenswood, Kings Heights, Reunion, Williamstown, Hillcrest, Sagewood, Windsong, Canals, Big Springs, Morningside, Luxstone, Midtown, Southwinds, Cobblestone Creek, Silver Creek, Woodside, Summerhill, and the older streets around Main Street and Nose Creek Park." },
        { title: "Commercial and industrial", text: "East Lake Industrial, the commercial strip along Yankee Valley Boulevard and 8th Street, and businesses out toward Balzac and CrossIron Mills. Shops holding abandoned customer vehicles and contractors retiring work trucks are regular calls, and several units in one visit improves the per-vehicle offer." },
        { title: "Rocky View County around Airdrie", text: "Acreages east and west of the city, along Highway 567, Range Road 11 and the country residential pockets toward Crossfield and Irricana. Long gravel approaches are routine; soft spring ground is the only thing that delays us, and we'll be honest if it does." },
      ],
    },
    {
      eyebrow: "Four simple steps",
      title: "How Selling Your Junk Car Works",
      cards: [
        { title: "Describe it.", text: "Year, make, model, whether it runs, and anything missing — especially the catalytic converter, since converter theft is common across the region." },
        { title: "Get your number.", text: "Usually within a couple of hours, with free towing already built in. No “up to,” no deduction at pickup." },
        { title: "Choose a window.", text: "Same day or next. You get a time window, not a vague day." },
        { title: "Get paid.", text: "We confirm the vehicle, complete the bill of sale with you, pay by cash or e-transfer, and load it. About twenty minutes, most of it paperwork." },
      ],
    },
    {
      eyebrow: "Paperwork",
      title: "Alberta Paperwork, Kept Simple",
      intro: ["Bring photo ID that matches the registered owner and proof of ownership — the registration is usually enough. We write the bill of sale on site and leave you a copy, so there's nothing to print or prepare.", "Your licence plate stays with you, because in Alberta it belongs to the owner, not the car. Take the plate and your copy of the bill of sale to any Airdrie or Alberta registry agent to cancel or transfer the registration, then phone your insurer about unused prepaid coverage."],
    },
    {
      eyebrow: "Nearby",
      title: "Communities Near Airdrie",
      intro: ["Free towing also covers Irricana, Cochrane, Chestermere and Didsbury, plus Calgary itself and the Rocky View County land in between."],
    },
  ],
  faqs: [
    ["How fast can you pick up in Airdrie?", "Same day for most morning calls. We're about twenty-five minutes away on the QEII, so Airdrie is one of our quickest service areas."],
    ["Is there a charge to come up from Calgary?", "No. There's no mileage fee, no trip charge and no minimum vehicle value. The tow sits inside the offer and nothing is deducted when we arrive."],
    ["My car has huge commuting mileage. Is it still worth something?", "Yes. Kilometres matter enormously to a dealer and very little to weight and parts value. High-mileage vehicles often do better with us than on a trade-in."],
    ["Can you get it out of a tight front garage?", "Yes. We winch vehicles out of attached garages every week. A photo of the garage and driveway helps us plan."],
    ["Do you buy hail-damaged vehicles in Airdrie?", "Regularly. Hail write-offs, including salvage and non-repairable status, are among the best vehicles we buy."],
    ["How do you pay?", "Cash on the spot or e-transfer, your choice, before the vehicle moves."],
  ],
  finalTitle: "Get Your Airdrie Junk Car Gone Today",
  finalText: "One call, one visit, and your driveway — or the street out front — is clear again. Tell us what you've got and we'll have a number back to you within a couple of hours.",
  finalCta: "Get a Free Offer",
};

export default function CashForCarsAirdriePage() { return <ServicePage data={data} />; }
