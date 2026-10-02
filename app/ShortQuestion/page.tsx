import { getComputations } from "@/lib/supabase/computation";
import ShortQuestion from "@/components/ShortQuestion";
export const dynamic = "force-dynamic";
function shuffleQuestions<T>(questions: T[]) {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }
  return shuffled;
}
export default async function ShortQuestionPage() {
  const questions = await getComputations();
  const shortQuestions = questions.filter(
    (question) => question.type === "short",
  );
  const shuffledQuestions = shuffleQuestions(shortQuestions);
  return <ShortQuestion questions={shuffledQuestions} />;
}
