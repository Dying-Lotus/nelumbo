import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import dlpImage from "~/../public/dlp@128x.png";

const Navbar: React.FC = () => {
  return (
    <nav className="h-24 border-gray-20 px-2 border-gray-700 align-middle">
      <div className="h-24 container mx-auto flex flex-wrap items-center align-middle justify-between font-antic">
        <a href="#" className="flex items-center">
          <Image
            className="mr-4"
            src={dlpImage}
            alt="DLP Logo"
            width={50}
            height={50}
          />
          <span className="self-center whitespace-nowrap text-2xl md:text-2xl lg:text-4xl   text-white">
            DYING LOTUS
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 text-white hover:bg-gray-700 focus:ring-gray-600 md:hidden"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="mt-4 flex flex-col align-middle rounded-lg border  p-4 border-gray-700 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:text-sm md:font-medium">
            <li>
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:dark:bg-transparent md:text-lg text-xl"
                aria-current="page"
              >
                HOME
              </a>
            </li>
            
            <li>
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:dark:bg-transparent text-xl"
              >
                ARTICLES
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:dark:bg-transparent text-xl"
              >
                BLOG
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:dark:bg-transparent text-xl"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:dark:bg-transparent text-xl"
              >
                SOCIALS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
