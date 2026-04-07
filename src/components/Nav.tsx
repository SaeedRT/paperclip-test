export default function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full bg-stone-900/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold tracking-wide text-amber-400">
          🌸 Sakura Sushi
        </a>
        <nav className="hidden gap-8 text-sm font-medium text-stone-300 sm:flex">
          <a href="#menu" className="transition-colors hover:text-amber-400">
            Menu
          </a>
          <a href="#about" className="transition-colors hover:text-amber-400">
            About
          </a>
          <a href="#contact" className="transition-colors hover:text-amber-400">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-stone-900 transition-colors hover:bg-amber-300"
        >
          Reserve a Table
        </a>
      </div>
    </header>
  );
}
