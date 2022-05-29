import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { questionActions } from "../../../features/question/questionSlice";

export default function ShowAdvJSTestResults() {
  const dispatch = useDispatch();
  dispatch(questionActions.showResults());
  const router = useRouter();
  function resetToQuestionMode() {
    dispatch(questionActions.setQuestionMode());
    router.push(`/JsTest/0`);
  }
  return (
    <div className="flex flex-col items-center p-4 m-4 border-2 rounded-lg">
      <div className="text-8xl">
        {" "}
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
    </div>
  );
}
