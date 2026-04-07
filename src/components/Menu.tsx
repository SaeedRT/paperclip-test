export interface MenuItem {
  name: string;
  description: string;
  price: string;
  tag?: string;
}

const menuItems: MenuItem[] = [
  {
    name: 'Omakase Platter',
    description: "Chef's selection of 12 premium nigiri — changes daily with the freshest catch.",
    price: '$68',
    tag: "Chef's Choice",
  },
  {
    name: 'Dragon Roll',
    description: 'Tempura shrimp, avocado, topped with thinly sliced cucumber and tobiko.',
    price: '$18',
  },
  {
    name: 'Salmon Sashimi (6 pcs)',
    description: 'Premium Atlantic salmon, sliced thick, served with wasabi and pickled ginger.',
    price: '$22',
    tag: 'Best Seller',
  },
  {
    name: 'Tuna Tataki',
    description: 'Lightly seared yellowfin tuna, ponzu sauce, crispy garlic, micro greens.',
    price: '$24',
  },
  {
    name: 'Spicy Tuna Roll',
    description: 'Fresh tuna, sriracha mayo, cucumber, sesame oil, wrapped in sushi rice.',
    price: '$14',
  },
  {
    name: 'Wagyu Beef Nigiri (2 pcs)',
    description: 'A5 wagyu, torched tableside, finished with truffle salt and chive.',
    price: '$32',
    tag: 'Premium',
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center sm:mb-20">
          <p className="mb-3 text-[0.7rem] font-semibold tracking-[0.3em] text-[#915f1b] uppercase">
            Signature Selection
          </p>
          <h2 className="mb-4 text-5xl font-semibold text-[#1d2a2e] sm:text-6xl">Our Menu</h2>
          <p className="mx-auto max-w-2xl text-[#3d5055]">
            Every dish is prepared to order using fish delivered fresh each morning from sustainable
            fisheries.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item, index) => (
            <div
              key={item.name}
              className="animate-rise-in relative rounded-3xl border border-[#183d3f]/8 bg-[#fffaf0]/88 p-6 shadow-[0_20px_55px_-36px_rgba(23,42,46,0.65)] backdrop-blur-sm hover:-translate-y-1"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {item.tag && (
                <span className="absolute top-4 right-4 rounded-full border border-[#e4b15b]/40 bg-[#fff3d8] px-3 py-1 text-[0.65rem] font-semibold tracking-[0.11em] text-[#915f1b] uppercase">
                  {item.tag}
                </span>
              )}
              <h3 className="mb-2 pr-20 text-3xl leading-tight font-semibold text-[#1d2a2e]">
                {item.name}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-[#3d5055]">{item.description}</p>
              <p className="text-2xl font-semibold text-[#b07a2f]">{item.price}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-[#56686c]">
          Full menu available in-restaurant. Seasonal specials updated weekly.
        </p>
      </div>
    </section>
  );
}
