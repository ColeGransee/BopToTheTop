import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Dropdown } from "./dropdown";

export const Header = (props: any) => {
  const username = props.username;
  const router = useRouter();

  const handleClick = () => {
    if (!username) {
      router.push("/login");
    } else {
      router.push("/closet");
    }
  };

  return (
    <div className="bg-white border-b-2 border-double border-gray-600">
      <div className="bg-gray-100 flex justify-end mb-2">
        {!!username ? (
          <Dropdown />
        ) : (
          <Link href="/login">
            <div className="inline-flex m-2 justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              Sign in / Register
            </div>
          </Link>
        )}
      </div>

      <main className="flex justify-center mx-auto max-w-7xl px-4 sm:mt-10">
        <div className="text-center">
          <h1 className="text-5xl tracking-tight font-serif font-bold text-gray-800">
            <Link href="/">shopbop</Link>
          </h1>
          <h2 className="p-2 text-3xl tracking-tight font-serif font-bold text-gray-700">
            <Link href="/">- bop to the top -</Link>
          </h2>
          <div className="space-x-10 pt-6 flex justify-between">
            <Link href="/about">
              <a className="text-gray-600 hover:text-gray-500">about</a>
            </Link>
            <Link href="/leaderboard">
              <a className="text-gray-600 hover:text-gray-500">leaderboard</a>
            </Link>
            <button
              className="text-gray-600 hover:text-gray-500"
              onClick={handleClick}
            >
              closet
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
