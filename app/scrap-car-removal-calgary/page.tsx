import type { Metadata } from "next";
import Link from "next/link";
import { ServicePage, type ServicePageData } from "@/components/service-page";
import heroImage from "@/assets/images/white-ford-escape-junk-car-calgary.jpeg";
import recyclingImage from "@/assets/images/lifted-white-suv-junk-car-calgary.jpeg";

export const metadata: Metadata = {
  title: "Scrap Car Removal Calgary | Free Pickup, Recycled Properly",
  description: "Scrap car removal across Calgary with free pickup and cash on collection. End-of-life vehicles drained, dismantled and recycled to Alberta standards.",
  alternates: { canonical: "https://www.junkacar.ca/scrap-car-removal-calgary" },
  openGraph: { title: "Scrap Car Removal Calgary | Free Pickup, Recycled Properly", description: "Scrap car removal across Calgary with free pickup and cash on collection. End-of-life vehicles drained, dismantled and recycled to Alberta standards.", url: "https://www.junkacar.ca/scrap-car-removal-calgary", type: "website", images: [{ url: heroImage.src, alt: "Scrap vehicle ready for free pickup in Calgary" }] },
};

const data: ServicePageData = {
  path: "/scrap-car-removal-calgary",
  label: "Scrap Car Removal Calgary",
  h1: "Scrap Car Removal in Calgary — Collected Free, Recycled Properly",
  subhead: "When a vehicle has reached the end of the road, it can't simply be dumped, parted out in a back lane, or left to rot on an acreage. We collect it free, pay you for it, and put it through proper end-of-life processing.",
  primaryCta: "Book Free Pickup",
  heroImage,
  heroAlt: "White Ford Escape ready for scrap car removal in Calgary",
  trustItems: ["Free collection", "Cash at pickup", "Proper recycling", "All conditions accepted"],
  sections: [
    {
      eyebrow: "Definition",
      title: "When a Car Becomes a Scrap Car",
      intro: ["There's a line, and most people cross it without noticing.", "A used car is worth what someone will pay to drive it. A junk car is worth what someone will pay to fix it or part it out. A scrap car is worth what the material is worth once nobody wants to do either.", "In Calgary the crossover usually happens for one of a handful of reasons, and they're all local."],
      cards: [
        { title: "Rust has gone past the point of a safe repair", text: "Five months of brine on Deerfoot, Stoney and Glenmore, combined with Chinooks that thaw and refreeze a vehicle repeatedly in the same week, corrode rockers, brake lines and frames faster than most of the country sees. Once the structure is compromised, no amount of mechanical work brings it back." },
        { title: "The drivetrain has gone and the vehicle is too old to justify it", text: "A seized engine or failed transmission in a twenty-year-old car is the end. Nobody is putting a used unit in, and the repair quote exceeds what the finished vehicle would sell for." },
        { title: "It failed an out-of-province inspection", text: "The list of required work comes back longer than the value of the car. Very common on vehicles brought in from BC and Ontario." },
        { title: "It's simply finished", text: "Two decades of Calgary winters, 380,000 km, and no more road left in it. Complete, tired, and done." },
      ],
      after: [<>None of this makes a vehicle worthless. It changes how it gets valued — and that&apos;s a separate conversation, covered in full on our <Link href="/cash-for-scrap-cars-calgary">cash for scrap cars page</Link>.</>],
    },
    {
      eyebrow: "Responsible recycling",
      title: "What Proper End-of-Life Processing Involves",
      image: recyclingImage,
      imageAlt: "End-of-life SUV entering proper vehicle recycling in Calgary",
      intro: ["This is the part of the industry nobody advertises, and it's the part that separates a legitimate operation from someone crushing cars behind a shop.", "A vehicle contains several litres of material that should never reach groundwater, and in Calgary that matters more than most places — a great deal of the city drains toward the Bow and Elbow, and the acreage land around Rocky View sits on shallow water tables."],
      cards: [
        { title: "Step one — depollution", text: "Engine oil, coolant, brake fluid, transmission fluid, gear oil, power steering fluid and remaining fuel are all drained and captured before anything else happens. Air conditioning refrigerant is recovered rather than vented, which is both a legal requirement and the difference between recycling a car and releasing a greenhouse gas into the air above your neighbourhood." },
        { title: "Step two — hazardous component removal", text: "The battery comes out for lead recovery. Tires come off and go to a tire recycling stream rather than a pile. On older vehicles, mercury switches in the hood and trunk lighting are pulled and handled separately." },
        { title: "Step three — parts recovery", text: "Anything with resale life is removed and inventoried. A working alternator, a good transmission, clean doors, glass, a rear differential — these go back into circulation through repair shops across Calgary rather than into a shredder. It's the single most environmentally useful part of the process and it's also why a complete vehicle is worth more than a stripped one." },
        { title: "Step four — material separation", text: "What's left is separated into ferrous and non-ferrous metal and sent for recycling, where it becomes rebar, structural steel, or the body panels of something being built right now." },
      ],
    },
    {
      eyebrow: "Choose carefully",
      title: "Why the Buyer You Choose Actually Matters",
      intro: ["It's tempting to treat scrap car removal as a commodity — whoever shows up first with a number. There are two reasons that's not quite true.", "The first is liability. A vehicle registered in your name that ends up abandoned, dumped, or improperly dismantled is a problem that traces back to the last registered owner. This is exactly why the bill of sale matters and why you should cancel the registration afterward at a registry agent. Any legitimate operator will complete that paperwork with you on site without being asked.", "The second is what you're actually paid for. An operator who only recycles metal can only pay you for metal. One who dismantles properly can pay for metal plus everything worth recovering. On a vehicle with a usable drivetrain, that difference runs into hundreds of dollars."],
    },
    {
      eyebrow: "Running or not",
      title: "Vehicles We Collect for Scrap",
      intro: ["Condition genuinely doesn't matter, and the only firm requirement is ownership. Bring photo ID matching the registered owner and proof of ownership or documentation giving you the right to sell."],
      lists: [
        { title: "Vehicle types", items: ["Cars, hatchbacks and coupes", "SUVs and crossovers", "Half-tons, three-quarter-tons and one-tons", "Diesel pickups", "Minivans and cargo vans", "Box trucks", "Work and fleet vehicles"] },
        { title: "Conditions we collect", items: ["Seized engines", "Blown transmissions", "Hail and collision damage", "Salvage and non-repairable write-offs", "Fire and flood damage", "Rusted-through frames", "Partly stripped vehicles", "Long-parked vehicles"] },
      ],
    },
    {
      eyebrow: "Collection",
      title: "Free Scrap Vehicle Pickup Across Calgary",
      intro: ["We collect from every quadrant — residential driveways, back alleys in Inglewood, Ramsay and Hillhurst, condo and townhouse stalls, parkades with clearance limits, commercial yards and industrial addresses in Foothills Industrial Park, Manchester, Shepard, Great Plains and Balzac.", "Non-running is expected. Flat tires, no tires, seized brakes, no keys, sitting on blocks — all routine. We bring winches, flat decks and skates.", "Outside the city, free collection runs to Chestermere, Airdrie, Cochrane, Bragg Creek, Okotoks, Irricana, Strathmore, High River, Diamond Valley, Didsbury, Nanton, Olds, Canmore, Banff, Red Deer, Ponoka, Brooks, Lethbridge and Medicine Hat."],
    },
    {
      eyebrow: "Five clear steps",
      title: "How the Removal Works",
      cards: [
        { title: "Describe the vehicle.", text: "Year, make, model, condition, and anything missing — the converter, the engine, the wheels. Accuracy here gets you an accurate number." },
        { title: "Get a figure the same day.", text: "One number, with the tow already inside it." },
        { title: "Book a window.", text: "Same day or next, and you get a time window rather than a vague day." },
        { title: "Sign, get paid, and it's gone.", text: "We complete the bill of sale with you, pay by cash or e-transfer, and load it. About twenty minutes." },
        { title: "Cancel your registration.", text: "Take your plate and your copy of the bill of sale to any Alberta registry agent. Then call your insurer about a refund on unused prepaid coverage." },
      ],
    },
  ],
  faqs: [
    ["Is there a charge to scrap my car in Calgary?", "No. Collection is free and you're paid rather than charged. Nothing is deducted at pickup."],
    ["Does the vehicle need to be complete?", "No. We collect stripped shells, cars missing engines, and vehicles already partly dismantled. The offer reflects what's actually there."],
    ["Should I drain the fluids or remove the battery first?", "No — leave everything. Depollution is part of proper processing and doing it yourself lowers what we can pay rather than raising it."],
    ["What happens to my registration?", "You cancel or transfer it at an Alberta registry agent using the bill of sale we give you. Your licence plate stays with you, not the vehicle."],
    ["Can I scrap a vehicle that isn't in my name?", "Only with documentation giving you the right to sell it. Estate vehicles, liens and tenant-abandoned vehicles all have a route — call and describe the situation first."],
    ["Do you scrap motorhomes or trailers?", "Depends on size, condition and access. Describe it and we'll give you a straight answer rather than sending a truck to look."],
    ["How is a scrap car valued?", "Curb weight sets the floor, and salvageable parts, non-ferrous content and the catalytic converter set the ceiling. The full breakdown is on our cash for scrap cars page."],
  ],
  finalTitle: "Book a Free Scrap Pickup",
  finalText: "Tell us what it is and where it's sitting. We'll handle everything after that.",
  finalCta: "Book Free Pickup",
};

export default function ScrapCarRemovalPage() { return <ServicePage data={data} />; }
