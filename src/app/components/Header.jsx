import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <nav className="flex justify-between items-center bg-blue-700 py-4 px-6 mb-5">
        <div className="flex items-center">
          <Link href="/">
            <div className="text-white font-bold text-lg uppercase">
              Clerk App
            </div>
          </Link>
        </div>
        <div className="text-white">
          <Link href="sign-in" className="text-gray-300 hover:text-white mr-4">
            Sign In
          </Link>
          <Link href="sign-up" className="text-gray-300 hover:text-white mr-4">
            Sign Up
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
