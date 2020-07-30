import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-blue-500 flex flex-wrap items-center justify-between md:fixed md:left-0 md:right-0 md:top-0 p-6">
      <div className="flex flex-shrink-0 items-center mr-6 text-white">
        <span className="tracking-tight text-xl font-semibold">
          tian.im
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="border border-teal-400 flex hover:border-white hover:text-white items-center px-3 py-2 rounded text-teal-200">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      <div className="block flex-grow lg:flex lg:items-center lg:w-auto w-full">
        <div className="lg:flex-grow text-sm">
          <a
            href="https://tian.im"
            className="block hover:text-white lg:inline-block lg:mt-0 mr-4 mt-4 text-teal-200"
          >
            Home
          </a>
        </div>
      </div>
    </nav>
  );
}
