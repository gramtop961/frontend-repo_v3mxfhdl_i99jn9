export default function ProductGrid() {
  const products = [
    {
      title: "iPhone 15 Pro",
      subtitle: "Titanium. So strong. So light. So Pro.",
      cta: "Learn more",
      bg: "from-zinc-900 to-black",
      image:
        "https://www.apple.com/v/iphone-15-pro/f/images/overview/contrast/iphone_15_pro_endframe__c5mm38nr2ehe_large.jpg",
    },
    {
      title: "MacBook Air",
      subtitle: "Lean. Mean. M3 machine.",
      cta: "Buy",
      bg: "from-slate-900 to-black",
      image:
        "https://www.apple.com/v/macbook-air/s/images/overview/hero/hero_static__b9k9i2s6qpqq_large.jpg",
    },
    {
      title: "Apple Watch Series 9",
      subtitle: "Smarter. Brighter. Mightier.",
      cta: "Explore",
      bg: "from-neutral-900 to-black",
      image:
        "https://www.apple.com/v/apple-watch-series-9/s/images/overview/hero/hero_static__nfqjcvq3bxyi_large.jpg",
    },
    {
      title: "iPad Pro",
      subtitle: "Supercharged by M2.",
      cta: "Learn more",
      bg: "from-stone-900 to-black",
      image:
        "https://www.apple.com/v/ipad-pro/ab/images/overview/experience/experience_hero__b7x8c8yn1w2a_large.jpg",
    },
  ];

  return (
    <section id="learn" className="bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-6 grid gap-6 md:grid-cols-2">
        {products.map((p) => (
          <article
            key={p.title}
            className={`relative overflow-hidden rounded-3xl bg-gradient-to-b ${p.bg} group`}
          >
            <div className="absolute inset-0 opacity-60 group-hover:opacity-70 transition">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative z-10 p-8 sm:p-10 lg:p-12">
              <h3 className="text-3xl sm:text-4xl font-semibold drop-shadow-lg">
                {p.title}
              </h3>
              <p className="mt-2 text-white/80 max-w-sm">{p.subtitle}</p>
              <a
                href="#"
                className="mt-6 inline-block rounded-full bg-white text-black px-5 py-2 font-medium hover:bg-white/90 transition"
              >
                {p.cta}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
