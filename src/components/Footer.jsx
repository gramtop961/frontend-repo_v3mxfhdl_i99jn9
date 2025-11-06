export default function Footer() {
  const links = [
    ["Shop and Learn", ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "AirTag", "Accessories"]],
    ["Services", ["Apple Music", "Apple TV+", "Apple Arcade", "iCloud+"]],
    ["Apple Store", ["Find a Store", "Genius Bar", "Today at Apple", "Apple Camp", "Financing"]],
  ];

  return (
    <footer className="bg-black text-white/70 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-10 md:grid-cols-3">
        {links.map(([title, items]) => (
          <div key={title}>
            <h4 className="text-white font-semibold mb-3">{title}</h4>
            <ul className="space-y-2">
              {items.map((i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white transition-colors">
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-7xl px-6 py-6 border-t border-white/10 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Not Apple Inc. Clone for demo purposes.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Use</a>
          <a href="#" className="hover:text-white">Legal</a>
        </div>
      </div>
    </footer>
  );
}
