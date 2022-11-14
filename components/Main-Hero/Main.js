import Link from "next/link";
import React from "react";
import styles from "./hero.module.css";
function Main() {
  return (
    <div className={` w-full flex justify-around h-[50rem]`}>
      <div
        className={`mx-auto  w-full bg-color-greensh  flex flex-col md:flex-row`}
      >
        <div
          className="w-full my-auto text-gray-100 cursor-pointer 
           flex flex-col items-center p-16"
        >
          <div className="text-2xl md:text-4xl lg:text-8xl text-center ">
            Take the Javascript Test
          </div>
          <Link href="/JsTest/0">
            <div>
              <div className="hover:-translate-y-2 hover:bg-yellow-700 font-semibold transition-transform px-8 py-4  md:px-16 md:py-8 bg-yellow-600 mt-16 text-2xl rounded-lg">
                Start!
              </div>
            </div>
          </Link>
        </div>

        <div className={`${styles.herocontainer} w-full h-[20rem] md:h-auto opacity-70`}>
          &nbsp;
        </div>
      </div>
    </div>
  );
}

export default Main;
