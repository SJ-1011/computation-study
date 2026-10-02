"use client";

import { useState } from "react";
import type { Computation } from "@/lib/supabase/computation";

type OXQuestionProps = {
  questions: Computation[];
};

export default function OXQuestion({ questions }: OXQuestionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentQuestion = questions[currentIndex];

  return (
    <section className="flex flex-col mt-12 gap-3 mr-12 w-full">
      <p className="text-4xl font-bold">OX 문제</p>

      <p className="text-xl">
        문제 {currentIndex + 1} / {questions.length}
      </p>

      <div className="flex flex-row items-center gap-3">
        <p className="bg-white border border-gray-200 p-4 rounded-2xl w-full">
          {currentQuestion.question}
        </p>

        <button type="button" className="text-blue-500 font-bold text-3xl">
          O
        </button>

        <button type="button" className="text-red-500 font-bold text-3xl">
          X
        </button>
      </div>

      <div className="flex flex-row gap-12 justify-center mt-5">
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => setCurrentIndex((index) => Math.max(index - 1, 0))}
          disabled={currentIndex === 0}
        >
          이전 문제
        </button>

        <button
          type="button"
          className="cursor-pointer"
          onClick={() =>
            setCurrentIndex((index) =>
              Math.min(index + 1, questions.length - 1),
            )
          }
          disabled={currentIndex === questions.length - 1}
        >
          다음 문제
        </button>
      </div>
    </section>
  );
}
