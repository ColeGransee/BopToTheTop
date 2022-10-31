import Link from "next/link";

export const Header = () => {
  return (
    <div className="bg-[url('/floral.png')] p-6 border-b-2 border-gray-400 border-double">
      <nav
        className="relative max-w-7xl mx-auto flex flex-col grid justify-items-center"
        aria-label="Global"
      >
        <Link href="/">
          <a>
            <img
              src="/logo.png"
              className="w-20 rounded outline outline-double outline-gray-600"
            />
          </a>
        </Link>
        <div className="space-x-8 pt-6">
          <Link href="/">
            <a className="rounded px-3 py-2 bg-egg outline outline-1 outline-gray-600 text-base font-medium font-serif text-gray-600 hover:text-gray-500">
              blog
            </a>
          </Link>
          <Link href="/about">
            <a className="rounded px-3 py-2 bg-egg outline outline-1 outline-gray-600 text-base font-medium font-serif text-gray-600 hover:text-gray-500">
              about
            </a>
          </Link>
          <Link href="/shop">
            <a className="rounded px-3 py-2 bg-egg outline outline-1 outline-gray-600 text-base font-medium font-serif text-gray-600 hover:text-gray-500">
              shop
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
};
