import { useRouter } from "next/router";
import Question from "../../../components/Question/Question";
import { qArray } from "../../../store/questions";

export default function QuestionPage() {
  const router = useRouter();
  const questionNoZeroBased = Number(router.query.qNo);
  if (isNaN(questionNoZeroBased)) return null;
  if (questionNoZeroBased < qArray.length) {
    return <Question qNumberPropZeroBased={questionNoZeroBased} />;
  } else {
    return <div className="text-8xl">Oops!</div>;
  }
}
