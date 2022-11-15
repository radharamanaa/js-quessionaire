import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./hero.module.css";
function Main() {
  return (
    <div className={` w-full flex justify-around h-[50rem]`}>
      <div
        className={`mx-auto  w-full bg-gray-100 flex flex-col md:flex-row`}
      >
        <div
          className="w-full my-auto text-gray-800 flex items-center justify-center
           "
        >
          <div className="w-10/12 flex flex-col items-center p-16">
                <div className="text-2xl md:text-4xl lg:text-7xl text-center font-vidaloka">
                  Take the Javascript Test
                </div>                                                                                                                                                                                                                                                            
                <Link href="/JsTest/0">
                  <div>
                    <div className="cursor-pointer hover:-translate-y-2 hover:bg-lime-700 text-gray-100
                    font-semibold transition-transform px-8 py-4  md:px-16 md:py-8 bg-lime-600 mt-16 text-2xl rounded-lg">
                      Start!
                    </div>
                  </div>
                </Link>
            </div>
        </div>

        <div className={`flex items-center  w-full md:h-auto overflow-clip p-16 opacity-90`}>
          <div className={`mx-auto rounded-lg my-16`}>
            <Image 
            width={"800px"}
            height={"800px"}
            objectFit="cover"
            src={"/images/juanjo-jaramillo-mZnx9429i94-unsplash.jpg"} 
            alt="Javascript"/>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Main;
