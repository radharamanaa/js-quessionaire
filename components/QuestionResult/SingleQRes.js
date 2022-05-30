import React, { useEffect } from "react";
import Prism from "Prismjs";
require("prismjs/components/prism-javascript");
require("prismjs/components/prism-css");
require("prismjs/components/prism-jsx");

function SingleQRes({ qNo, code, options, answer, userChoice }) {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className="w-full p-2 m-2 flex flex-col justify-start">
      <div className="text-3xl font-thin">Question No {qNo}:</div>

      <div className="question-code ">
        <pre className="language-javascript text-2xl     md:text-2xl">
          <code>{code}</code>
        </pre>
      </div>

      <div className="options border-t-8 border-indigo-700 rounded-lg">
        {options.map((item, index) => {
          // console.log(
          //   `for ${qNo} option ${
          //     index + 1
          //   }: userchoice:${userChoice}, answer:${answer}`
          // );
          // console.log(
          //   `qNo:${qNo}:::${index + 1 === userChoice && userChoice !== answer}`
          // );
          if (index + 1 === answer && answer === userChoice) {
            return (
              <div className="bg-green-600 text-slate-100 text-xl p-2">
                {index + 1}:&nbsp; {item}
              </div>
            );
          } else if (index + 1 === userChoice && userChoice !== answer) {
            return (
              <div className="bg-red-400 text-slate-100 text-xl p-2">
                {index + 1}:&nbsp; {item}
              </div>
            );
          } else {
            return (
              <div className="bg-slate-100 text-slate-700 text-xl p-2">
                {index + 1}:&nbsp; {item}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default SingleQRes;
