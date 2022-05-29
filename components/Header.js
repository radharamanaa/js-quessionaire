import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="header-container w-full bg-slate-800">
      <div className="header-inn-container flex justify-between w-3/4 mx-auto shadow-lg p-4">
        <div className="text-2xl p-2 font-semibold pt-4 text-slate-100">
          <Link href={"/"}>Javascript Geek</Link>
        </div>
        <div className="p-2 pt-4 items-center text-yellow-300 text-xl">
          About us
        </div>
      </div>
    </header>
  );
}

export default Header;
