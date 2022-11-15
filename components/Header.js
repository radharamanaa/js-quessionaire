import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { questionActions } from "../features/question/questionSlice";

function Header({ text = "CodePriest" }) {
  const dispatch = useDispatch();
  const router = useRouter();
  function resetToQuestionMode() {
    dispatch(questionActions.setQuestionMode());
    router.push(`/JsTest/0`);
  }
  return (
    <header className="header-container w-full first-letter:text:2xl bg-indigo-600 mb-16 shadow-lg">
      <div className="container header-inn-container flex justify-between px-16  mx-auto p-4 ">
        <div
          className="flex justify-center items-center font-thin p-2 pt-4 text-gray-100 hover:underline
          tracking-wider hover:underline-offset-4 transition-all font-vidaloka"
        >
          <div className="flex justify-center items-center text-xl tracking-wider first-letter:text-4xl">
            <Link href={"/"} onClick={resetToQuestionMode}>
              {text}
            </Link>
          </div>
        </div>
        <div className="p-2 pt-4 flex tracking-wide items-center justify-center text-gray-100 text-md  ">
          <div className="px-4 font-roboto hover:underline">
            <a
              href="http://www.github.com/radharamanaa"
              target={"_blank"}
              rel={"noreferrer"}
            >
              About Me!
            </a>
          </div>
          <div className="px-4 font-roboto hover:underline">
            <a
              href="https://radharamanaa.github.io/Tasky-Redux/"
              target={"_blank"}
              rel={"noreferrer"}
            >
              Reminder App
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
