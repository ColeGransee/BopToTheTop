import Link from "next/link";

export const Header = () => {
  return (
    <div className="bg-white pt-4 pb-2 border-b-2 border-double border-gray-600">
      <main className="flex justify-center mx-auto max-w-7xl px-4 sm:mt-10">
        <div className="text-center">
          <h1 className="text-5xl tracking-tight font-serif font-bold text-gray-800">
            <Link href="/">shopbop</Link>
            <h2 className="p-2 text-3xl tracking-tight font-serif font-bold text-gray-700">
              <Link href="/">- bop to the top -</Link>
            </h2>
          </h1>
          <div className="space-x-10 pt-6 flex justify-between">
            <Link href="/about">
              <a className="text-gray-600 hover:text-gray-500">about</a>
            </Link>
            <Link href="/leaderboard">
              <a className="text-gray-600 hover:text-gray-500">leaderboard</a>
            </Link>
            <Link href="/share">
              <a className="text-gray-600 hover:text-gray-500">share</a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};
