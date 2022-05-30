import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
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
  console.log(
    arr.filter((item) => item.userChoice === null),
    " is length"
  );
  if (arr.filter((item) => item.userChoice === null).length > 10) {
    console.log("gettign q from localSt");
    arr = JSON.parse(localStorage.getItem(localStorageVar)).questions;
    console.log(arr);
  }
  return (
    <div className="flex flex-col items-center p-4 m-4 border-2 rounded-lg">
      <div className="text-8xl">
        You Secured {useSelector((st) => st.question.finalScore)}
      </div>
      <div className="buttonn">
        <button
          className="text-4xl py-2 px-4 mt-8 bg-green-600"
          onClick={resetToQuestionMode}
        >
          Reset
        </button>
      </div>
      <div className="results">
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
