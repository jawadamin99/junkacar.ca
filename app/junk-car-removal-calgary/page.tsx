import type { Metadata } from "next";
import Link from "next/link";
import { ServicePage, type ServicePageData } from "@/components/service-page";
import heroImage from "@/assets/images/damaged-ford-fiesta-trailer-pickup-calgary.jpeg";
import garageImage from "@/assets/images/silver-mercedes-garage-junk-car-sale-calgary.jpeg";

export const metadata: Metadata = {
  title: "Junk Car Removal Calgary | Free Towing & Cash Paid",
  description: "Free junk car removal anywhere in Calgary. We haul away non-running, wrecked and end-of-life vehicles, handle the paperwork, and pay cash at pickup.",
  alternates: { canonical: "https://www.junkacar.ca/junk-car-removal-calgary" },
  openGraph: { title: "Junk Car Removal Calgary | Free Towing & Cash Paid", description: "Free junk car removal anywhere in Calgary. We haul away non-running, wrecked and end-of-life vehicles, handle the paperwork, and pay cash at pickup.", url: "https://www.junkacar.ca/junk-car-removal-calgary", type: "website", images: [{ url: heroImage.src, alt: "Damaged vehicle collected during junk car removal in Calgary" }] },
};

const data: ServicePageData = {
  path: "/junk-car-removal-calgary",
  label: "Junk Car Removal Calgary",
  h1: "Junk Car Removal in Calgary — We Haul It, You Get Paid",
  subhead: "Some vehicles stop being transportation and become furniture. If one is parked beside your garage, in a condo stall you're still paying for, or behind a shop in Foothills Industrial Park, we'll take it away free and put cash in your hand for it.",
  primaryCta: "Book Free Removal",
  heroImage,
  heroAlt: "Damaged black Ford Fiesta loaded for junk car removal in Calgary",
  trustItems: ["Free removal", "Cash paid at pickup", "Running or not", "Same-day service"],
  sections: [
    {
      eyebrow: "What counts",
      title: "You Probably Know Exactly Which Car We Mean",
      image: garageImage,
      imageAlt: "Non-running silver Mercedes awaiting removal from a Calgary garage",
      intro: [
        "A junk car doesn't have to be a rusted shell sitting in a field. Most of what we remove looks perfectly ordinary from ten feet away.",
        "A Grand Caravan that stopped being worth fixing when the sliding door and the transmission went in the same year. A Civic that hasn't turned over since a −32 morning in January. A work truck that failed its out-of-province inspection with a repair list longer than its value. Somebody's first car, parked in the back lane in Ramsay with every intention of dealing with it in the spring.",
        "If you're not driving it and you're not realistically going to, that's a junk car. Sedans, SUVs, half-tons, one-tons, diesel pickups, minivans, cargo vans, fleet units — we remove all of it, running or not.",
      ],
    },
    {
      eyebrow: "The hidden bill",
      title: "What That Vehicle Is Costing You Right Now",
      intro: ["Most people underestimate this, so it's worth setting out plainly."],
      cards: [
        { title: "You may still be insuring it", text: "Plenty of people keep minimum coverage on a vehicle “just in case” and then forget about it. Check your last statement. That's real money leaving your account every month for something with four flat tires." },
        { title: "It's losing value faster parked than it ever did driving", text: "Brake rotors seize to the pads. Fuel goes stale and gums the lines. Rodents find the wiring harness, which on anything near Nose Hill, Fish Creek or a Rocky View acreage is closer to a certainty than a risk. Seals dry out, tires flat-spot, and the interior takes on a smell that never comes out. A car worth $1,400 to us in September can be worth $600 by May." },
        { title: "It may be a bylaw problem", text: "The City of Calgary's community standards rules cover derelict and inoperable vehicles stored in view on residential property. One neighbour complaint is usually all it takes to start that conversation. In a condo or a rented stall, the board or the landlord gets there faster." },
        { title: "And it's occupying something you pay for", text: "A Beltline parking stall, a garage space through a Calgary winter, a driveway spot your working vehicle should have. These are worth more than most people give them credit for." },
      ],
    },
    {
      eyebrow: "The extraction",
      title: "Getting It Out Is Our Problem, Not Yours",
      intro: ["This is the part that stops people calling, and it's the part that separates actual removal from a scrap yard that will happily buy your car if you can somehow deliver it. Here's what we deal with in Calgary every week."],
      cards: [
        { title: "It won't start", text: "Expected. Almost nothing we collect does. We winch it onto a flat deck. You don't boost it, roll it, or hunt for the key to release the steering lock." },
        { title: "Flat tires, no tires, or sitting on blocks", text: "We bring skates. A vehicle with no wheels at all is a slower job rather than an impossible one — just tell us in advance so the right truck comes out." },
        { title: "It's inside a garage", text: "We'll pull it out. Tight single-car garages with a support post in exactly the wrong place are the awkward ones, and a photo before we arrive saves everybody time." },
        { title: "It's in a parkade or condo stall", text: "Beltline, Mission and downtown parkades have clearance limits, and plenty of buildings want notice before a flat deck arrives. Tell us the level, the clearance height and whether the property manager needs a heads-up, and we'll arrange around it." },
        { title: "It's in a back alley", text: "Inner-city lanes in Hillhurst, Inglewood, Ramsay and Bridgeland were laid out long before flat decks existed. Doable, and much easier if you mention it when you book." },
        { title: "It's blocked in or snowed under", text: "Another vehicle, a fence line, a trailer, a woodpile, or eight weeks of Calgary snow. Describe what's in the way. Nine times out of ten we can work around it, and if it's genuinely buried, clearing a rough path to the front of the vehicle speeds things up." },
        { title: "It's on an acreage or down a long approach", text: "Rocky View County, Springbank, out past Tuscany or Balzac — routine for us. Gravel, mud, ruts and half a kilometre of driveway are normal. If the ground is genuinely too soft, we'll say so honestly and come back when it firms up rather than tearing up your property." },
      ],
    },
    {
      eyebrow: "No fee, no deductions",
      title: "Free Removal, and You Still Get Paid",
      intro: ["Junk vehicles in Calgary generally land between $200 and $3,500, with most falling in the $400 to $1,500 range. Newer vehicles, damaged write-offs and heavy trucks go higher."],
      table: { headings: ["Vehicle", "Typical offer"], rows: [["Older car, complete, non-running", "$300 – $900"], ["Newer non-runner with parts demand", "$700 – $2,000"], ["Non-running truck, SUV or diesel", "$900 – $3,500"], ["Stripped or rusted-through shell", "$200 – $500"]] },
      after: [<>The number comes from four things: curb weight, what&apos;s still salvageable as a part, whether the catalytic converter is still attached, and current scrap metal prices. If you want that arithmetic explained properly, our <Link href="/cash-for-scrap-cars-calgary">cash for scrap cars page</Link> breaks it down.</>, "Whatever we quote includes the tow. There's no removal fee, no disposal fee, no fuel surcharge for county pickups, and nothing deducted when the truck arrives."],
    },
    {
      eyebrow: "Paperwork",
      title: "What to Have Ready",
      intro: [
        "Very little. Photo ID matching the registered owner, proof of ownership — the registration is usually enough — and your licence plate off the vehicle before we load.",
        "We complete the bill of sale with you on site and leave you a copy. Afterward, take that copy and your plate to any Alberta registry agent to cancel or transfer the registration, then call your insurer about a refund on unused prepaid coverage.",
        "If the vehicle has a lien on it, belonged to someone who has passed away, or came with a property you bought and you've never had paperwork for it, say so upfront. These come up constantly and most are solvable — they're just easier solved before a truck is dispatched.",
      ],
    },
    {
      eyebrow: "Coverage",
      title: "Free Junk Car Removal Across Calgary",
      cards: [
        { title: "Every quadrant — NW", text: "Tuscany, Bowness, Brentwood, Varsity, Arbour Lake, Royal Oak, Country Hills, Evanston, Sage Hill, Ranchlands, Dalhousie, Kensington, Hillhurst." },
        { title: "Every quadrant — NE", text: "Bridgeland, Renfrew, Marlborough, Rundle, Pineridge, Temple, Whitehorn, Saddle Ridge, Martindale, Falconridge, Taradale, Coral Springs, Skyview Ranch, Cornerstone." },
        { title: "Every quadrant — SW", text: "Beltline, Mission, Marda Loop, Altadore, Killarney, Glamorgan, Signal Hill, Aspen Woods, West Springs, Woodbine, Evergreen, Bridlewood, Oakridge, Lakeview." },
        { title: "Every quadrant — SE", text: "Forest Lawn, Dover, Ogden, Douglasdale, McKenzie Towne, New Brighton, Copperfield, Mahogany, Auburn Bay, Cranston, Seton, Legacy, Acadia, Inglewood." },
        { title: "Commercial and industrial", text: "Foothills Industrial Park, Manchester, Highfield, Shepard, Great Plains, Franklin, Starfield, Eastfield, Balzac and Rocky View County. If you're a shop sitting on three abandoned customer vehicles, or a contractor clearing retired work trucks, that's a call we're glad to take — and multiple units in one visit improves the per-vehicle offer." },
        { title: "Beyond the city", text: "Free removal also runs to Chestermere, Airdrie, Cochrane, Bragg Creek, Okotoks, Irricana, Strathmore, High River, Diamond Valley, Didsbury, Nanton, Olds, Canmore, Banff, Red Deer, Ponoka, Brooks, Lethbridge and Medicine Hat." },
      ],
    },
    {
      eyebrow: "Timing",
      title: "How Fast",
      intro: ["Same-day removal is normal if you call in the morning. Next day is normal if you call in the afternoon. If you're genuinely up against something — a possession date, a moving truck, a notice from the landlord — say so and we'll build the schedule around it.", "The appointment itself takes about twenty minutes. We confirm the vehicle, sign the paperwork with you, pay you, and load it."],
    },
  ],
  faqs: [
    ["Do I pay anything for the removal?", "No. Money moves in one direction only, and that direction is toward you. No towing fee, no disposal fee, no charge for county or acreage pickups."],
    ["What if the car is worth almost nothing?", "Then the offer is small, and we'll tell you that honestly on the phone rather than wasting your afternoon. But “almost nothing” still beats the zero dollars it's earning in your driveway, and the removal is still free."],
    ["Do I need to clean it out?", "Take anything you want to keep — glovebox, console, under the seats, spare wheel well. People forget garage remotes, documents and cash. Nothing can be retrieved once a vehicle is processed. Beyond that, we don't care about the garbage."],
    ["Can you remove it if it's not in my name?", "We need the registered owner, or documentation giving you the right to sell it. Estate vehicles, liens, inherited cars and tenant-abandoned vehicles all have a route. Call and we'll walk through yours."],
    ["Should I remove the tires, battery or fluids first?", "No. They're handled properly during processing, and pulling them yourself lowers what we can pay rather than raising it."],
    ["Do you take more than one at a time?", "Yes, and we'd rather. Shops, farms and acreages with three or four sitting around are efficient for us, and that efficiency shows up in the offer."],
    ["Can you get into an underground parkade?", "Usually. Clearance height is the limiting factor. Tell us the level and the posted clearance when you book."],
  ],
  finalTitle: "Get It Off Your Property",
  finalText: "One call, one visit, and the space is yours again.",
  finalCta: "Book Free Removal",
};

export default function JunkCarRemovalPage() { return <ServicePage data={data} />; }
