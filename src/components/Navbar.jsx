import { Search, ShoppingBag, User } from "lucide-react";

export default function Navbar() {
  const links = [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "AirPods",
    "TV & Home",
    "Entertainment",
    "Accessories",
    "Support",
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-black/60 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#" className="text-white text-xl font-semibold tracking-tight">
            <span className="sr-only">Home</span>
            <span className="select-none">◯</span>
          </a>
          <ul className="hidden md:flex items-center gap-6 text-sm text-white/80">
            {links.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-2 text-white/80">
          <button className="p-2 hover:text-white transition-colors" aria-label="Search">
            <Search size={18} />
          </button>
          <button className="p-2 hover:text-white transition-colors" aria-label="Account">
            <User size={18} />
          </button>
          <button className="p-2 hover:text-white transition-colors" aria-label="Bag">
            <ShoppingBag size={18} />
          </button>
        </div>
      </nav>
    </header>
  );
}
