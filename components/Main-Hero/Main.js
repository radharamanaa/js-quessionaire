import Link from "next/link";
import React from "react";
import styles from "./hero.module.css";
function Main() {
  return (
    <div
      className={`${styles.herocontainer}  w-full flex justify-center mx-auto mt-10 
      rounded-lg border-2 md:border-2 md:border-dashed md:border-orange-600`}
    >
      <div
        className={`${styles.innerhero} m-2 text-4xl md:text-8xl mx-auto mt-4 h-1/2  flex items-center`}
      >
        <Link href="/JsTest/0">
          <div className="bg-slate-700/75 p-20 text-white cursor-pointer hover:scale-105 transition-all">
            Take the Javascript Test
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Main;
