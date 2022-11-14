import React, { useEffect } from "react";
import Prism from "prismjs";
require("prismjs/components/prism-javascript");
require("prismjs/components/prism-css");
require("prismjs/components/prism-jsx");

function SingleQRes({ qNo, code, options, answer, userChoice }) {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div
      className="w-full lg:w-1/3 p-2 m-2 flex flex-col justify-start gap-2
    border-t-2 border-indigo-700 border-x-2 border-b-2 rounded-lg"
    >
      <div className="text-5xl font-thin mb-4">Question No {qNo}:</div>
      <div className="h-1 bg-indigo-200 w-full mb-4" />
      <div className="question-code ">
        <pre className="language-javascript text-2xl md:text-2xl">
          <code>{code}</code>
        </pre>
      </div>
      <div></div>
      <div className="options rounded-lg justify-self-end">
        {options.map((item, index) => {
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
          } else if (index + 1 === answer) {
            return (
              <div className="bg-lime-400 text-slate-700 text-xl p-2">
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
