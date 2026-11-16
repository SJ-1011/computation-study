import Header from "@/components/Header";
import Test from "@/components/Test";

import { getComputations } from "@/lib/supabase/computation";

export const dynamic = "force-dynamic";

function shuffleQuestions<T>(questions: T[]) {
  const shuffled = [...questions];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }

  return shuffled;
}

export default async function RandomTest() {
  const questions = await getComputations();

  const shuffledQuestions = shuffleQuestions(questions);
  return (
    <>
      <Header title="랜덤 문제 풀기" />
      <Test questions={shuffledQuestions} />
    </>
  );
}
