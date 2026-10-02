import { getComputations } from "@/lib/supabase/computation";
import OXQuestion from "@/components/OXQuestion";

export const dynamic = "force-dynamic";

function shuffleQuestions<T>(questions: T[]) {
  const shuffled = [...questions];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }

  return shuffled;
}

export default async function OXQuestionPage() {
  const questions = await getComputations();

  const oxQuestions = questions.filter((question) => question.type === "ox");

  const shuffledQuestions = shuffleQuestions(oxQuestions);

  return <OXQuestion questions={shuffledQuestions} />;
}
