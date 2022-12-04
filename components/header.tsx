import Link from "next/link";
import { useEffect } from "react";

export const Header = (props: any) => {
  const username = props.username;
  return (
    <div className="bg-white border-b-2 border-double border-gray-600">
      <div className="bg-gray-100 flex justify-end ">
        {!!props.username ? (
          <div className="px-4 py-2 font-gray-500 text-serif text-sm">
            {" "}
            hello, {props.username}
          </div>
        ) : (
          <Link href="/login">
            <div className="px-4 py-2 font-gray-500 text-serif text-sm">
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
            <Link  href={{
              pathname: '/leaderboard',
              query:  username, // the data
            }}>
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
