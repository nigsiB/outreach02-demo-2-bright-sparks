import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { ServiceCard } from "@/components/ServiceCard";

const heroImg = "https://images.unsplash.com/photo-1682345262055-8f95f3c513ea?auto=format&fit=crop&w=1600&q=80";
const aboutImg = "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1600&q=80";
const galleryImg = "https://images.unsplash.com/photo-1635335874521-7987db781153?auto=format&fit=crop&w=1600&q=80";

const services = [
  { image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=600&q=80", alt: "House electrical rewire", title: "Rewires", desc: "Full and partial house rewires with certification." },
  { image: "https://images.unsplash.com/photo-1635335874521-7987db781153?auto=format&fit=crop&w=600&q=80", alt: "Consumer unit upgrade", title: "Consumer units", desc: "Modern RCBO boards for safer homes." },
  { image: "https://images.unsplash.com/photo-1682345262055-8f95f3c513ea?auto=format&fit=crop&w=600&q=80", alt: "Home lighting installation", title: "Lighting", desc: "Indoor, outdoor, and security lighting." },
  { image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=600&q=80", alt: "EV home charger", title: "EV chargers", desc: "Home charge points installed to spec." },
  { image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80", alt: "Electrical testing and certification", title: "EICR testing", desc: "Landlord and sale-ready electrical reports." },
];

const reviews = [
  { quote: "Finally on HTTPS — site looks professional and loads fast.", name: "Homeowner", detail: "Demo pitch" },
  { quote: "Neat consumer unit upgrade, explained everything clearly.", name: "Julie F.", detail: "Cranleigh" },
  { quote: "Reliable local electrician — would recommend.", name: "Mike S.", detail: "5★ concept" },
];

export default function Page() {
  return (
    <main>
      <section className="bg-[var(--blue)] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-green-500/20 text-green-200 text-xs px-3 py-1 rounded-full mb-4">HTTPS · Mobile-ready demo</span>
            <h1 className="text-4xl font-bold sm:text-5xl">Safe, modern electrical work in Cranleigh.</h1>
            <p className="mt-4 text-white/75 leading-relaxed">
              Demo rebuild for 2 Bright Sparks — secure site replacing legacy HTTP, with clear services and contact flow.
            </p>
            <Link href="/contact" className="mt-6 inline-block bg-white text-[var(--blue)] px-6 py-3 rounded-lg font-semibold">
              Request quote
            </Link>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <Image src={heroImg} alt="Electrician working" fill className="object-cover" priority sizes="50vw" />
          </div>
        </div>
      </section>

      <section className="section-trust border-b">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-8 px-6 py-6 text-center text-sm">
          <p><span className="font-bold text-[var(--blue)]">Cranleigh</span> electrician</p>
          <p>Secure hosting concept</p>
          <p>Quote via contact form</p>
        </div>
      </section>

      <section className="section-services max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-bold text-[var(--blue)]">Domestic services</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} image={s.image} alt={s.alt} title={s.title} desc={s.desc} />
          ))}
        </ul>
      </section>

      <section className="section-about">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image src={aboutImg} alt="Fuse board upgrade" fill className="object-cover" sizes="50vw" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[var(--blue)]">Why upgrade your site &amp; electrics</h2>
            <p className="mt-4 text-sm text-[var(--muted)] leading-relaxed">
              2 Bright Sparks serves Cranleigh homeowners who expect safe certification and a business that looks
              trustworthy online — this demo pairs both messages on a fast, HTTPS-ready layout.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        image={galleryImg}
        imageAlt="Electrical tools"
        title="Get a written quote"
        body="Rewires, boards, and lighting — send your requirements through the contact form."
        primaryHref="/contact"
        primaryLabel="Request quote"
        secondaryHref="/contact"
        secondaryLabel="EICR enquiry"
      />

      <section className="section-reviews max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-bold text-[var(--blue)]">Reviews</h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <li key={r.name} className="rounded-xl border bg-white p-6">
              <p className="text-sm italic text-[var(--muted)]">&ldquo;{r.quote}&rdquo;</p>
              <p className="mt-4 font-semibold">{r.name}</p>
              <p className="text-xs text-[var(--muted)]">{r.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section-gallery max-w-6xl mx-auto px-6 pb-14">
        <h2 className="text-2xl font-bold text-[var(--blue)]">Recent installs</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className="relative aspect-video overflow-hidden rounded-xl">
            <Image src={galleryImg} alt="Consumer unit" fill className="object-cover" sizes="50vw" />
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl">
            <Image src={heroImg} alt="Lighting install" fill className="object-cover" sizes="50vw" />
          </div>
        </div>
      </section>

      <CtaBand
        reverse
        image={aboutImg}
        imageAlt="2 Bright Sparks"
        title="Cranleigh&apos;s trusted spark"
        body="Modern web presence + certified electrical work — demo concept for outreach."
        primaryHref="/contact"
        primaryLabel="Contact us"
      />
    </main>
  );
}
