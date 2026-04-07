export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-stone-900 text-center"
    >
      {/* Decorative background pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 25%, #b45309 0%, transparent 50%), radial-gradient(circle at 75% 75%, #92400e 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <p className="mb-4 text-4xl">🍣</p>
        <h1 className="mb-6 text-5xl leading-tight font-bold tracking-tight text-white sm:text-7xl">
          Authentic Japanese
          <br />
          <span className="text-amber-400">Sushi Experience</span>
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-stone-300">
          Hand-crafted nigiri, rolls, and omakase platters made with the freshest daily-sourced
          fish. Dine in the tradition of Tokyo — right here in your city.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#menu"
            className="rounded-full bg-amber-400 px-8 py-3 font-semibold text-stone-900 transition-colors hover:bg-amber-300"
          >
            View Our Menu
          </a>
          <a
            href="#contact"
            className="rounded-full border border-stone-500 px-8 py-3 font-semibold text-stone-200 transition-colors hover:border-amber-400 hover:text-amber-400"
          >
            Reserve a Table
          </a>
        </div>
      </div>
    </section>
  );
}
