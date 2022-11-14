  import Link from "next/link";
import React from "react";

function Header({ text = "CodePriest" }) {
  return (
    <header className="header-container w-full bg-indigo-900">
      <div className="header-inn-container flex justify-between w-3/4 mx-auto p-4">
        <div
          className="text-4xl font-thin p-2 pt-4 text-gray-100 hover:underline
          tracking-wider hover:underline-offset-4 transition-all font-ovo"
        >
          <div className="flex justify-center items-center">
            {/* <div>
              <svg src="./assets/svgs/Logo13.svg" fill="#030313" alt="" width={"5rem"} height={"5rem"}/>
            </div> */}
          <Link href={"/"}>{text}</Link>
          </div>
        </div>
        <div className="p-2 pt-4 flex font-ovo tracking-wide items-center text-gray-100 text-xl  ">
          <a href="http://www.github.com/radharamanaa">
          About us
          </a>
        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
      </div>
    </header>
  );
}

export default Header;
