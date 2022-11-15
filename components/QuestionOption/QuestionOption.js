import React, { useEffect, useRef } from "react";
import style from "./option.module.css";
function QuestionOption({ item }) {
  let radioRef = useRef();
  function clickRadio() {
    radioRef.current.checked = true;
  }
  useEffect(() => {
    radioRef.current.checked = false;
  }, []);

  return (
    <div className={`${style.option} flex p-2 m-1 items-center text-gray-200`}>
      <input
        type="radio"
        className="mr-4 h-4 w-4 checked:bg-indigo-500"
        name="option"
        ref={radioRef}
      />
      <div
        className="text-xl md:text-2xl leading-5 cursor-pointer"
        onClick={clickRadio}
      >
        {item}
      </div>
    </div>
  );
}

export default QuestionOption;
