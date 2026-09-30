import type { Metadata } from "next";
import Link from "next/link";
import { ServicePage, type ServicePageData } from "@/components/service-page";
import heroImage from "@/assets/images/blue-acura-garage-calgary.jpeg";
import valueImage from "@/assets/images/black-chevrolet-cash-car-sale-calgary.jpeg";

export const metadata: Metadata = {
  title: "Cash for Scrap Cars Calgary | What Yours Is Actually Worth",
  description: "How scrap car prices work in Calgary — weight, parts, catalytic converter and metal markets. Get a real number, free towing, cash paid at collection.",
  alternates: { canonical: "https://www.junkacar.ca/cash-for-scrap-cars-calgary" },
  openGraph: { title: "Cash for Scrap Cars Calgary | What Yours Is Actually Worth", description: "How scrap car prices work in Calgary — weight, parts, catalytic converter and metal markets. Get a real number, free towing, cash paid at collection.", url: "https://www.junkacar.ca/cash-for-scrap-cars-calgary", type: "website", images: [{ url: heroImage.src, alt: "Scrap car evaluated for cash in Calgary" }] },
};

const data: ServicePageData = {
  path: "/cash-for-scrap-cars-calgary",
  label: "Cash for Scrap Cars Calgary",
  h1: "Cash for Scrap Cars in Calgary — What Yours Is Actually Worth",
  subhead: "“Scrap” isn't a verdict on your car. It's a pricing method. When a vehicle is past the point where anyone wants to drive it, it still has a specific dollar value — and you should be the one collecting it, not a yard hoping you won't ask how the number was reached.",
  primaryCta: "What's Mine Worth?",
  heroImage,
  heroAlt: "Blue Acura evaluated for scrap car value in a Calgary garage",
  trustItems: ["Real market pricing", "Free towing", "Cash at collection", "No hidden deductions"],
  sections: [
    {
      eyebrow: "The pricing explained",
      title: "How a Scrap Car Is Actually Priced",
      image: valueImage,
      imageAlt: "Black Chevrolet being assessed for a cash car offer in Calgary",
      intro: ["Most people have never been told this, and the ones who have usually heard it from someone with an interest in keeping it vague. Here's the honest version."],
      cards: [
        { title: "Curb weight is the floor", text: "A vehicle body is mostly steel, and steel is bought and sold by the tonne on a commodity market that moves weekly. Weight alone creates hundreds of dollars of difference between vehicle classes before anything else is considered." },
        { title: "Non-ferrous metal is where the margin sits", text: "Aluminium wheels, aluminium blocks and cylinder heads, copper in the wiring harness and starter, the radiator, the alternator. These are worth several times what plain steel is per kilo. A car with alloy wheels and an aluminium block is worth meaningfully more than an identical car with steel wheels and a cast-iron block." },
        { title: "The catalytic converter is its own line item", text: "It contains platinum, palladium and rhodium, and the value varies enormously by vehicle. A converter off a large truck can be worth more than the rest of the car. This is also, bluntly, the number a lot of buyers hope you don't know about. Converter theft is widespread in Calgary — if yours has been cut off, that lowers your number, and we'll say so rather than quietly adjusting the payment when we arrive." },
        { title: "Reusable parts come off the top", text: "Even on a car headed for scrap, there might be a good alternator, a working window regulator, a clean set of doors, or a rear differential that somebody in Okotoks needs next Tuesday. Anything with a second life is worth more as a part than as metal, and that's reflected in what we can pay." },
        { title: "Completeness matters more than people expect", text: "A vehicle that's already been picked over is worth less. If you've pulled the engine, sold the wheels and taken the seats out, you've removed most of what we were paying for. We'll still take it — the number just won't be the same." },
      ],
      table: { headings: ["Vehicle class", "Approximate curb weight"], rows: [["Compact car", "1,200 – 1,400 kg"], ["Mid-size sedan", "1,400 – 1,700 kg"], ["Crossover / small SUV", "1,600 – 2,000 kg"], ["Half-ton pickup", "2,000 – 2,500 kg"], ["Full-size SUV", "2,300 – 2,800 kg"], ["3/4-ton or one-ton diesel", "2,900 – 3,600 kg"]] },
    },
    {
      eyebrow: "Real numbers",
      title: "Scrap Car Prices in Calgary",
      table: { headings: ["Vehicle", "Typical scrap offer"], rows: [["Compact car, complete, no converter", "$200 – $450"], ["Compact or mid-size car, complete with converter", "$400 – $800"], ["Full-size sedan or small SUV, complete", "$500 – $1,100"], ["Half-ton pickup or full-size SUV", "$700 – $1,700"], ["3/4-ton, one-ton, diesel or commercial", "$1,100 – $3,000+"]] },
      after: ["These are scrap-basis figures. If the vehicle still has value beyond its material — a decent drivetrain, clean panels, strong parts demand — the offer moves up from here, sometimes considerably. That isn't generosity. It's what the vehicle is worth, and there's no reason to pretend otherwise."],
    },
    {
      eyebrow: "Comparing quotes",
      title: "Why Two Quotes on the Same Car Can Be $400 Apart",
      intro: ["Because they're not measuring the same thing. If you're phoning around Calgary — and you should — here's what to listen for."],
      cards: [
        { title: "The weight-only quote", text: "Given in four seconds over the phone, based purely on vehicle class. It ignores the converter, the wheels and anything salvageable. It's fast and it's low, and some yards do it deliberately because most people accept the first number they hear." },
        { title: "The quote that's netted after towing", text: "Looks higher until the invoice appears. This one catches people constantly — the tow gets deducted at pickup and the number you were told isn't the number you're handed. Ask directly: is the towing already included, and is this the final figure?" },
        { title: "The stale quote", text: "Steel and non-ferrous prices move. A number quoted six weeks ago isn't binding on anyone today, and a buyer quoting from an old sheet will revise it when they see the car." },
        { title: "What ours is", text: "A single figure that accounts for parts and non-ferrous content as well as weight, with the tow already inside it, holding for the pickup window we agree on. If the vehicle turns out to be materially different from what you described, we'll have a conversation — short of that, the number stands." },
      ],
    },
    {
      eyebrow: "Getting the most",
      title: "How to Get the Best Price for a Scrap Car",
      cards: [
        { title: "Describe it accurately", text: "Counterintuitive, but true. Overstating condition produces a high phone quote and an awkward conversation in your driveway. Understating it costs you money. The converter, the engine, missing wheels — mention all of it and the first number is the right one." },
        { title: "Don't strip it first", text: "People pull the battery, the wheels and the stereo thinking they'll make more. Almost nobody does. You'll lose more from the offer than you'll make selling the parts individually, and you'll spend a weekend doing it." },
        { title: "Don't leave it another winter", text: "A scrap car doesn't hold value sitting outside in Calgary. Rust accelerates, rodents get into the harness, and salvageable parts stop being salvageable. The same car is worth measurably less in April than it was in September." },
        { title: "Clear several at once if you have them", text: "Shops, farms and acreages with three or four vehicles get collected in one trip. That's efficient for us and the per-vehicle offer reflects it." },
        { title: "Ask what's included", text: "Towing, paperwork, and whether the quoted figure is final. Any buyer who won't answer those three questions plainly is telling you something." },
      ],
    },
    {
      eyebrow: "All vehicle classes",
      title: "Vehicles We Pay Scrap Value For",
      intro: [<>Collection is free across every Calgary quadrant and nineteen Alberta communities, and it&apos;s covered in full on our <Link href="/scrap-car-removal-calgary">scrap car removal page</Link>.</>],
      lists: [
        { title: "Vehicle types", items: ["Cars and hatchbacks", "SUVs and crossovers", "Half-tons, three-quarter-tons and one-tons", "Diesel pickups", "Minivans and cargo vans", "Box trucks", "Work and fleet vehicles"] },
        { title: "Conditions we buy", items: ["Seized engines", "Blown transmissions", "Rusted-through frames", "Hail and collision damage", "Salvage and non-repairable write-offs", "Fire and flood damage", "Failed out-of-province inspections", "Partly dismantled vehicles"] },
      ],
    },
  ],
  faqs: [
    ["How much is my scrap car worth in Calgary?", "Between roughly $200 and $3,000 depending on weight, completeness and what's salvageable. Give us the year, make and model and we'll give you a real figure rather than a range."],
    ["Do you pay by weight?", "Weight sets the baseline but it isn't the whole calculation. Non-ferrous content, the converter and reusable parts all move the number. Pricing on weight alone would be simpler for us and worse for you."],
    ["Are scrap car prices going up or down?", "They move with global steel and non-ferrous markets, week to week. Any buyer quoting you a fixed rate that never changes isn't pricing accurately."],
    ["Can I remove parts before you collect it?", "You can, and some people do. Understand it lowers the offer, usually by more than you'll make selling the parts. If you want to keep something specific, tell us and we'll quote around it."],
    ["Is there a fee if the car is worth very little?", "Never. If scrap value is low, the offer is low. It doesn't go negative and you're not charged for the tow."],
    ["Do you pay cash or e-transfer?", "Either, your choice, before the vehicle moves."],
    ["What paperwork do I need?", "Photo ID matching the registered owner and proof of ownership. We complete the bill of sale on site. Keep your plate."],
  ],
  finalTitle: "Find Out What Yours Is Worth",
  finalText: "Year, make and model is enough to start. It takes about ninety seconds.",
  finalCta: "Get My Scrap Quote",
};

export default function CashForScrapCarsPage() { return <ServicePage data={data} />; }
