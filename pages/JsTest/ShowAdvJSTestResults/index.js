import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";
import SingleQRes from "../../../components/QuestionResult/SingleQRes";
import { questionActions } from "../../../features/question/questionSlice";
import { localStorageVar } from "../../../store/questions";

export default function ShowAdvJSTestResults() {
  const dispatch = useDispatch();
  dispatch(questionActions.showResults());
  const router = useRouter();
  function resetToQuestionMode() {
    dispatch(questionActions.setQuestionMode());
    router.push(`/JsTest/0`);
  }
  let arr = useSelector((st) => st.question.questions);

    if (arr.filter((item) => item.userChoice === null).length > 10) {
      console.log("gettign q from localSt");
      arr = JSON.parse(localStorage.getItem(localStorageVar)).questions;
      console.log(arr);
    }
  let scoreFin = useSelector((st) => st.question.finalScore);
  function colorForScore(score) {
    if (score < 30) return "bg-red-700";
    else if (score < 65) return "bg-amber-700";
    else if (score < 80) return "bg-indigo-700";
    else return "bg-lime-700";
  }

  let colorForScoreVar = colorForScore(Math.floor((scoreFin * 100) / 25));
  console.log(colorForScoreVar);
  return (
    <div className="flex flex-col items-center p-4 m-4 border-2 rounded-lg w-11/12">
      <div className="flex justify-center">
        <div className="text-5xl md:text-8xl font-vidaloka font-thin text-slate-700">You Secured {scoreFin}/25</div>
        <ProgressBar
          percent={Math.floor((scoreFin * 100) / 25)}
          color={colorForScoreVar}
        />
      </div>
      <div className="buttonn mb-6">
        <button
          className="text-2xl lg:text-2xl py-2 px-8 mt-8 bg-indigo-600 text-white rounded-xl"
          onClick={resetToQuestionMode}
        >
          Take the Test Again!
        </button>
      </div>
      <div className="h-1 bg-yellow-600 w-full mb-4" />
      <div className="results w-full flex flex-wrap justify-center">
        {arr.map((item, index) => {
          return (
            <SingleQRes
              answer={item.answer}
              code={item.code}
              options={item.options}
              qNo={index + 1}
              userChoice={item.userChoice}
              key={index + 1}
            />
          );
        })}
      </div>
    </div>
  );
}
