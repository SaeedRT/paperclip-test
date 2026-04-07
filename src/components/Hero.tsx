export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 pb-16 text-center sm:px-8"
    >
      <div
        aria-hidden
        className="animate-pulse-glow absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 18% 20%, #f2c26f 0%, transparent 38%), radial-gradient(circle at 80% 75%, #eb6f58 0%, transparent 34%)',
        }}
      />
      <div
        aria-hidden
        className="absolute top-20 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-[#1d2a2e]/7 blur-3xl"
      />

      <div className="animate-rise-in relative z-10 mx-auto max-w-4xl">
        <p className="mb-6 text-[0.7rem] font-semibold tracking-[0.32em] text-[#3d5055] uppercase">
          Tokyo Technique. Bay Area Soul.
        </p>
        <h1 className="mb-6 text-5xl leading-none font-semibold tracking-tight text-[#163033] sm:text-7xl lg:text-8xl">
          Coastal Japanese
          <br />
          <span className="text-[#b07a2f]">Sushi Atelier</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-[#3d5055] sm:text-lg">
          Hand-crafted nigiri, rolls, and omakase platters made with the freshest daily-sourced
          fish. Dine in the tradition of Tokyo — right here in your city.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <a
            href="#menu"
            className="rounded-full border border-[#1d2a2e]/10 bg-[#183d3f] px-8 py-3 text-sm font-semibold tracking-[0.12em] text-amber-50 uppercase shadow-[0_15px_40px_-20px_rgba(24,61,63,0.75)] hover:-translate-y-0.5 hover:bg-[#1d4b4d]"
          >
            View Our Menu
          </a>
          <a
            href="#contact"
            className="rounded-full border border-[#b07a2f]/35 bg-[#fff7e6] px-8 py-3 text-sm font-semibold tracking-[0.12em] text-[#915f1b] uppercase hover:-translate-y-0.5 hover:border-[#b07a2f]/70 hover:bg-[#ffefd2]"
          >
            Reserve a Table
          </a>
        </div>
      </div>
    </section>
  );
}
