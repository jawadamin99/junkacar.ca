import type { Metadata } from "next";
import { ServicePage, type ServicePageData } from "@/components/service-page";
import heroImage from "@/assets/images/white-hyundai-sale-paperwork-calgary.jpeg";
import pickupImage from "@/assets/images/silver-saturn-used-car-calgary.jpeg";

export const metadata: Metadata = {
  title: "Free Car Towing Calgary | No-Cost Vehicle Pickup",
  description: "Free towing on every vehicle we buy in Calgary and across Alberta. No fee, nothing deducted from your offer, and no charge for acreage or county pickups.",
  alternates: { canonical: "https://www.junkacar.ca/free-towing-calgary" },
  openGraph: { title: "Free Car Towing Calgary | No-Cost Vehicle Pickup", description: "Free towing on every vehicle we buy in Calgary and across Alberta. No fee, nothing deducted from your offer, and no charge for acreage or county pickups.", url: "https://www.junkacar.ca/free-towing-calgary", type: "website", images: [{ url: heroImage.src, alt: "Vehicle owner arranging free towing in Calgary" }] },
};

const data: ServicePageData = {
  path: "/free-towing-calgary",
  label: "Free Towing Calgary",
  h1: "Free Towing in Calgary — Included in Every Offer We Make",
  subhead: "The tow is the part people expect to get caught on. It's the line item at the bottom of the invoice, or the reason a quote quietly shrinks by two hundred dollars when the truck arrives. So let's deal with it directly: we don't charge for it, we don't deduct it, and it doesn't matter where the vehicle is sitting.",
  primaryCta: "Book a Free Pickup",
  heroImage,
  heroAlt: "Calgary vehicle owner completing paperwork for free car towing",
  trustItems: ["No towing fee", "No mileage charge", "No rural surcharge", "Nothing deducted"],
  sections: [
    {
      eyebrow: "Included in the offer",
      title: "Why There's No Charge",
      image: pickupImage,
      imageAlt: "Silver Saturn ready for free vehicle pickup in Calgary",
      intro: ["Because it isn't a service we sell. It's how we collect something we've already bought.", "We're not a towing company. If you've broken down on Deerfoot at nine at night, we're the wrong number — call a recovery service. What we are is a vehicle buyer, and the tow is simply the mechanism that moves a vehicle we've purchased from your property to ours.", "That distinction matters, because it means the cost is already built into the offer. There's no second transaction. The figure we quote is the figure you're handed, and the truck showing up is part of it."],
    },
    {
      eyebrow: "Coverage",
      title: "What “Anywhere in Calgary” Actually Means",
      intro: ["Every address in the city, across all four quadrants. Residential driveways, back alleys, street parking, visitor stalls, condo and townhouse lots, underground parkades, commercial yards and industrial addresses in Foothills Industrial Park, Manchester, Shepard, Great Plains and Balzac.", "Acreages and country residential throughout Rocky View County, Springbank and the land around the city — including long gravel approaches and properties well off the pavement.", "And free collection in nineteen communities beyond the city: Chestermere, Airdrie, Cochrane, Bragg Creek, Okotoks, Irricana, Strathmore, High River, Diamond Valley, Didsbury, Nanton, Olds, Canmore, Banff, Red Deer, Ponoka, Brooks, Lethbridge and Medicine Hat.", "There's no mileage charge, no rural surcharge, and no minimum vehicle value required to get us out to you. A $250 scrap car on an acreage past Cochrane costs you exactly the same to have collected as a $6,000 truck in Mahogany: nothing."],
    },
    {
      eyebrow: "Access",
      title: "Awkward Situations We Handle Routinely",
      intro: ["This is the list people actually want before they call."],
      cards: [
        { title: "It won't start.", text: "Expected. Almost nothing we collect does." },
        { title: "No keys.", text: "Not a problem." },
        { title: "Flat tires, or no tires at all.", text: "We bring skates. A vehicle sitting on its rotors is slower to load, not impossible — mention it so we send the right truck." },
        { title: "On blocks or jack stands.", text: "Fine. Tell us in advance." },
        { title: "Inside a garage.", text: "We'll winch it out. Tight single stalls with a post in the wrong place are the tricky ones, so a quick photo helps." },
        { title: "In an underground parkade.", text: "Clearance is the limiting factor. Tell us the posted height and which level it's on, and whether the building needs notice." },
        { title: "In a back alley.", text: "Inner-city lanes in Hillhurst, Inglewood, Ramsay and Bridgeland are tight but workable. Worth mentioning when you book." },
        { title: "Snowed in.", text: "Through a Calgary winter this is half our calls. If it's genuinely buried, clearing a rough path to the front of the vehicle speeds things up." },
        { title: "Buried in mud or a soft field.", text: "Usually manageable. If the ground is bad enough that we'd tear up your property getting to it, we'll say so honestly and come back when it firms up." },
        { title: "Blocked in.", text: "Another vehicle, a fence, a trailer, a woodpile. Describe what's in the way and we'll plan around it." },
        { title: "At a body shop, compound or impound.", text: "We collect from third-party locations regularly. We'll need the address and whatever authorisation is required to release it." },
        { title: "Several at once.", text: "Better for everyone. Shops, farms and acreages with three or four to clear get done in one visit, and that improves the per-vehicle offer." },
      ],
    },
    {
      eyebrow: "Before we arrive",
      title: "What to Do Before Pickup",
      intro: ["Very little, but these four save time."],
      cards: [
        { title: "Empty it.", text: "Glovebox, console, under the seats, door pockets, trunk, spare wheel well. People forget garage remotes, documents, tools and — more than once — cash. Nothing can be returned once a vehicle is processed." },
        { title: "Take the plate off.", text: "In Alberta it belongs to you, not the car. We'll remind you, but doing it ahead is one less thing." },
        { title: "Have your ID and ownership documentation ready.", text: "Photo ID matching the registered owner, plus the registration or equivalent." },
        { title: "Clear a path if you easily can.", text: "Not essential. Helpful in February." },
      ],
      after: ["You don't need to wash it, start it, inflate the tires or move it to the street."],
    },
    {
      eyebrow: "Timing",
      title: "How Soon",
      intro: ["Call in the morning and same-day pickup is usually available. Call in the afternoon and it's typically next day. Communities further out — Canmore, Banff, Red Deer, Lethbridge, Medicine Hat — are generally scheduled for the next day.", "You get a window rather than a vague “sometime Thursday,” and the appointment itself takes about twenty minutes: a look at the vehicle, the bill of sale, payment, and loading."],
    },
    {
      eyebrow: "Clear boundaries",
      title: "What We Can't Do",
      dark: true,
      intro: ["Worth being clear so nobody wastes a phone call.", "We don't do roadside assistance, breakdown recovery, boosts, lockouts or tows to a repair shop. We're not a tow company and we don't run a call-out service.", "We don't tow vehicles we aren't buying. The free tow exists because we've purchased the vehicle. If you want something moved from A to B and kept, you need an actual towing company.", "And we can't collect a vehicle you can't demonstrate ownership of. That one's firm."],
    },
  ],
  faqs: [
    ["Is it genuinely free, or taken off the offer?", "Genuinely free. Nothing is deducted at pickup. The number quoted on the phone is the number handed to you."],
    ["Do you charge extra for acreage or county pickups?", "No. Rocky View County acreages and all nineteen surrounding communities are covered at no cost, including the far ones."],
    ["What if the vehicle is worth almost nothing?", "The tow is still free. There's no minimum value and no scenario where you end up owing us money."],
    ["Can you tow it if it's been sitting for years?", "Yes. Seized brakes, flat tires, rodent damage, a tree growing through the engine bay — all normal."],
    ["Do I need to be there?", "Someone authorised to sign the bill of sale and accept payment does. It doesn't have to be you if arrangements are made beforehand."],
    ["Can you get into an underground parkade?", "Usually. Tell us the posted clearance height and the level when you book."],
  ],
  finalTitle: "Book a Pickup",
  finalText: "Tell us where it is and what's in the way. We'll handle the rest.",
  finalCta: "Get a Free Offer",
};

export default function FreeTowingPage() { return <ServicePage data={data} />; }
