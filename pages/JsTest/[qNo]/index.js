import { useRouter } from "next/router";
import Question from "../../../components/Question/Question";
import { qArray } from "../../../store/questions";

export default function QuestionPage() {
  const router = useRouter();
  const questionNoZeroBased = Number(router.query.qNo);
  if (isNaN(questionNoZeroBased))
    return <div className="text-4xl p-10 m-5">Error</div>;
  return <Question qNumberPropZeroBased={questionNoZeroBased} />;
}
