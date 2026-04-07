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
    <section id="menu" className="bg-stone-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-stone-900">Our Menu</h2>
          <p className="mx-auto max-w-xl text-stone-500">
            Every dish is prepared to order using fish delivered fresh each morning from sustainable
            fisheries.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="relative rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              {item.tag && (
                <span className="absolute top-4 right-4 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                  {item.tag}
                </span>
              )}
              <h3 className="mb-2 text-lg font-bold text-stone-900">{item.name}</h3>
              <p className="mb-4 text-sm leading-relaxed text-stone-500">{item.description}</p>
              <p className="text-xl font-bold text-amber-500">{item.price}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-stone-400">
          Full menu available in-restaurant. Seasonal specials updated weekly.
        </p>
      </div>
    </section>
  );
}
