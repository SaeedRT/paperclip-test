export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-amber-100/60 bg-[#143537] py-10 text-center text-sm text-[#d8c9aa]">
      <p className="mb-2 text-3xl font-semibold text-amber-100">Sakura Sushi</p>
      <p>123 Cherry Blossom Lane, San Francisco, CA 94102</p>
      <p className="mt-4 tracking-[0.08em] uppercase">
        © {year} Sakura Sushi. All rights reserved.
      </p>
    </footer>
  );
}
