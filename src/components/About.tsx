const stats = [
  { value: '15+', label: 'Years of Craft' },
  { value: '100%', label: 'Daily-Fresh Fish' },
  { value: '4.9 ★', label: 'Average Rating' },
  { value: '12', label: 'Master Chefs' },
];

export default function About() {
  return (
    <section id="about" className="bg-stone-900 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text */}
          <div>
            <h2 className="mb-6 text-4xl font-bold">
              Rooted in Tradition,
              <br />
              <span className="text-amber-400">Served with Passion</span>
            </h2>
            <p className="mb-4 leading-relaxed text-stone-300">
              Sakura Sushi was founded by Chef Hiroshi Tanaka, who trained for a decade under a
              Michelin-starred chef in Tokyo before bringing his craft to the West. Every roll,
              every slice, every plate reflects a deep respect for the ingredients and the guest.
            </p>
            <p className="leading-relaxed text-stone-300">
              We source our fish daily from trusted fisheries in Norway, Scotland, and the Pacific
              Northwest — ensuring that what reaches your table is as fresh as it can possibly be.
              No compromises.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-stone-700 bg-stone-800 p-8 text-center"
              >
                <p className="mb-1 text-4xl font-bold text-amber-400">{stat.value}</p>
                <p className="text-sm text-stone-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
