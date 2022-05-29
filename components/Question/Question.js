import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import QuestionOption from "../QuestionOption/QuestionOption";
import { questionActions } from "../../features/question/questionSlice";
import Prism from "Prismjs";
require("prismjs/components/prism-javascript");
require("prismjs/components/prism-css");
require("prismjs/components/prism-jsx");
import style from "./question.module.css";

function Question({ qNumberPropZeroBased }) {
  if (isNaN(qNumberPropZeroBased))
    return <div className="text-8xl">...loading!</div>;
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
  console.log(`${isShowResultMode} is result mode`);
  if (isShowResultMode) {
    router.push(`/JsTest/ShowAdvJSTestResults`);
  }
  const currentQuestionNumber = useSelector(
    (st) => st.question.currentQuestionNumber
  );
  if (
    isNaN(qNumberPropZeroBased) ||
    qNumberPropZeroBased < 0 ||
    qNumberPropZeroBased > noOfQuestions - 1
  ) {
    console.log("Entering");
    router.push(`/JsTest/${currentQuestionNumber}`);
  }
  const currQuestion = useSelector(
    (st) => st.question.questions[qNumberPropZeroBased]
  );
  const noOfQuestions = useSelector((st) => st.question.questions.length);
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  function nextQuestion(e) {
    e?.preventDefault();
    const checkedItemIndex = isAnyChecked();
    console.log(checkedItemIndex);
    if (checkedItemIndex !== undefined) {
      dispatch(questionActions.setAnsForCurrQuestion(checkedItemIndex + 1));
      console.log(noOfQuestions, currentQuestionNumber);
      if (noOfQuestions === qNumberPropZeroBased + 1) {
        router.push(`/JsTest/ShowAdvJSTestResults`);
        return;
      }
      let str = `/JsTest/${qNumberPropZeroBased + 1}`;
      console.log(str);
      router.push(str);
    } else {
      alert("Please make a choice to move on!");
    }
  }

  return (
    <div className={`${style.questionMainArea} w-full `}>
      <div
        className={`flex flex-col h-3/4 w-11/12 lg:w-1/2 mx-auto
    border-2 bg-indigo-500 rounded-lg mt-8 shadow-lg shadow-indigo-400 p-4 `}
      >
        <div
          className={`mt-8 question-title text-xl md:text-4xl p-2 mb-4 
        text-slate-50 font-thin tracking-wide`}
        >
          {qNumberPropZeroBased + 1}. What is the output of the following code?
        </div>
        <div className="question-code ">
          <pre className="language-javascript text-lg md:text-2xl">
            <code>{currQuestion?.code}</code>
          </pre>
        </div>
        <div className="options flex flex-col  mt-4">
          {currQuestion?.options?.map((item) => (
            <QuestionOption item={item} key={item} />
          ))}
        </div>
        <div className="navigate flex justify-end">
          <button
            type="button"
            className="justify-end p-2 bg-indigo-800 rounded-xl px-4 text-indigo-200 text-2xl cursor-pointer shadow-sm"
            onClick={nextQuestion}
          >
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
}

export default Question;
