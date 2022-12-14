import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import QuestionOption from "../QuestionOption/QuestionOption";
import { questionActions } from "../../features/question/questionSlice";
import Prism from "prismjs";
require("prismjs/components/prism-javascript");
require("prismjs/components/prism-css");
require("prismjs/components/prism-jsx");
import think from "../assets/svgs/undraw_code_thinking_re_gka2.svg";
import { localStorageVar } from "../../store/questions";
import Image from "next/image";

function Question({ qNumberPropZeroBased }) {
  function isAnyChecked() {
    let arr = Array.from(document.querySelectorAll(".options input"));
    let i = 0;
    for (const option of arr) {
      if (option.checked) {
        return i;
      }
      i++;
    }
    return undefined;
  }
  let router = useRouter();
  let dispatch = useDispatch();
  const isShowResultMode = useSelector((st) => st.question.showResults);
  if (isShowResultMode) {
    router.push(`/JsTest/ShowAdvJSTestResults`);
  }
  const currentQuestionNumber = useSelector(
    (st) => st.question.currentQuestionNumber
  );
  function getButtonText() {
    if (qNumberPropZeroBased + 1 === noOfQuestions) {
      return "Results!";
    } else {
      return "Next";
    }
  }
  if (
    isNaN(qNumberPropZeroBased) ||
    qNumberPropZeroBased !== currentQuestionNumber
  ) {
    console.log(`pushing ${currentQuestionNumber}`);
    router.push(`/JsTest/${currentQuestionNumber}`);
  }

  const currQuestion = useSelector(
    (st) => st.question.questions[qNumberPropZeroBased]
  );

  const noOfQuestions = useSelector((st) => st.question.questions.length);
  useEffect(() => {
    Prism.highlightAll();
  }, [qNumberPropZeroBased]);

  function nextQuestion(e) {
    e?.preventDefault();
    const checkedItemIndex = isAnyChecked();
    console.log(checkedItemIndex);
    if (checkedItemIndex !== undefined) {
      dispatch(questionActions.setAnsForCurrQuestion(checkedItemIndex + 1));
      if (noOfQuestions === qNumberPropZeroBased + 1) {
        router.push(`/JsTest/ShowAdvJSTestResults`);
        return;
      }
      let str = `/JsTest/${qNumberPropZeroBased + 1}`;
      router.push(str);
    } else {
      alert("Please make a choice to move on!");
    }
  }
  let divRef = useRef();
  useEffect(() => {
    divRef.current.classList.add("slit-in-vertical");
    return () => {
      divRef?.current?.classList?.remove("slit-in-vertical");
    };
  }, [currQuestion]);

  useEffect(() => {
    if (!localStorage.getItem(localStorageVar)) {
      localStorage.setItem(localStorageVar, JSON.stringify(store));
    } else {
    }
  }, []);
  let store = useSelector((st) => st.question);
  useEffect(() => {
    localStorage.setItem(localStorageVar, JSON.stringify(store));
  }, [store]);
  return (
    <div className={`w-full mb-8`} ref={divRef}>
      <div
        className={`flex flex-col h-3/4 w-11/12 lg:w-1/2 mx-auto
    border-2 bg-indigo-500 rounded-lg mt-8 shadow-lg shadow-indigo-400 p-4 `}
      >
        <div
          className={`mt-8 question-title text-xl md:text-3xl font-roboto p-2 mb-4 
        text-slate-50 tracking-wide`}
        >
          {qNumberPropZeroBased + 1}. What is the output of the following code?
        </div>
        <div className="question-code ml-4">
          <pre className="language-javascript text-2xl md:text-2xl">
            <code>{currQuestion?.code}</code>
          </pre>
        </div>
        <div className="options-wrap flex">
          <div className="options flex flex-col  mt-4 flex-1">
            {currQuestion?.options?.map((item) => (
              <QuestionOption item={item} key={item}/>
            ))}
          </div>
          <div className="svg w-1/3 hidden sm:flex">
            <Image src={think} alt="Think" />
          </div>
        </div>
        <div className="navigate flex justify-end">
          <button
            type="button"
            className="justify-end p-2 bg-indigo-800 rounded-xl px-4 
            text-slate-100 text-2xl cursor-pointer shadow-sm hover:scale-105 transition-transform"
            onClick={nextQuestion}
          >
            {getButtonText()}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Question;
