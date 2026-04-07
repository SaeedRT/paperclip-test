export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-stone-900 py-10 text-center text-sm text-stone-500">
      <p className="mb-2 text-lg font-bold text-amber-400">🌸 Sakura Sushi</p>
      <p>123 Cherry Blossom Lane, San Francisco, CA 94102</p>
      <p className="mt-4">© {year} Sakura Sushi. All rights reserved.</p>
    </footer>
  );
}
