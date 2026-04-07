const stats = [
  { value: '15+', label: 'Years of Craft' },
  { value: '100%', label: 'Daily-Fresh Fish' },
  { value: '4.9 ★', label: 'Average Rating' },
  { value: '12', label: 'Master Chefs' },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#183d3f] py-24 text-[#fff7e8]">
      <div
        aria-hidden
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            'radial-gradient(circle at 18% 70%, #eb6f58 0%, transparent 30%), radial-gradient(circle at 90% 20%, #e4b15b 0%, transparent 33%)',
        }}
      />
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative grid items-center gap-16 lg:grid-cols-2">
          <div className="animate-rise-in">
            <p className="mb-4 text-[0.7rem] font-semibold tracking-[0.3em] text-[#f5d49b] uppercase">
              Philosophy
            </p>
            <h2 className="mb-6 text-5xl font-semibold sm:text-6xl">
              Rooted in Tradition,
              <br />
              <span className="text-[#f5d49b]">Served with Passion</span>
            </h2>
            <p className="mb-4 leading-relaxed text-[#f4ecdb]/90">
              Sakura Sushi was founded by Chef Hiroshi Tanaka, who trained for a decade under a
              Michelin-starred chef in Tokyo before bringing his craft to the West. Every roll,
              every slice, every plate reflects a deep respect for the ingredients and the guest.
            </p>
            <p className="leading-relaxed text-[#f4ecdb]/90">
              We source our fish daily from trusted fisheries in Norway, Scotland, and the Pacific
              Northwest — ensuring that what reaches your table is as fresh as it can possibly be.
              No compromises.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="animate-rise-in rounded-3xl border border-[#f7e7c1]/30 bg-[#fff7e8]/9 p-8 text-center backdrop-blur-sm"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <p className="mb-1 text-5xl font-semibold text-[#f7e0ad]">{stat.value}</p>
                <p className="text-xs tracking-[0.14em] text-[#f4ecdb]/75 uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
