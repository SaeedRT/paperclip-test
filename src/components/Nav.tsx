export default function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-amber-100/55 bg-[#183d3f]/90 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
        <a href="#" className="text-2xl leading-none font-semibold tracking-tight text-amber-100">
          Sakura Sushi
        </a>
        <nav className="hidden gap-7 text-xs tracking-[0.16em] text-amber-50/85 uppercase sm:flex">
          <a href="#menu" className="hover:text-amber-300">
            Menu
          </a>
          <a href="#about" className="hover:text-amber-300">
            About
          </a>
          <a href="#contact" className="hover:text-amber-300">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-amber-300/60 bg-amber-200 px-4 py-2 text-xs font-semibold tracking-[0.12em] text-[#183d3f] uppercase shadow-sm hover:-translate-y-0.5 hover:bg-amber-100 sm:px-5 sm:text-sm"
        >
          Reserve a Table
        </a>
      </div>
    </header>
  );
}
