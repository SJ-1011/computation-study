"use client";
import { useState } from "react";
import type { Computation } from "@/lib/supabase/computation";
type ShortQuestionProps = { questions: Computation[] };
export default function ShortQuestion({ questions }: ShortQuestionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const currentQuestion = questions[currentIndex];
  const handlePrevious = () => {
    setCurrentIndex((index) => Math.max(index - 1, 0));
    setAnswer("");
  };
  const handleNext = () => {
    setCurrentIndex((index) => Math.min(index + 1, questions.length - 1));
    setAnswer("");
  };
  return (
    <section className="flex flex-col mt-12 gap-3 mr-12 w-full">
      <p className="text-4xl font-bold">단답형 문제</p>
      <p className="text-xl">
        문제 {currentIndex + 1} / {questions.length}
      </p>
      <div className="flex flex-row items-center gap-3">
        <p className="bg-white border border-gray-200 p-4 rounded-2xl w-full">
          {currentQuestion.question}
        </p>
        <input
          type="text"
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
          className="bg-white border border-gray-200 p-4 rounded-2xl w-120 h-full"
          placeholder="정답 입력"
        />
      </div>
      <div className="flex flex-row gap-12 justify-center mt-5">
        <button
          type="button"
          className="cursor-pointer"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          이전 문제
        </button>
        <button
          type="button"
          className="cursor-pointer"
          onClick={handleNext}
          disabled={currentIndex === questions.length - 1}
        >
          다음 문제
        </button>
      </div>
    </section>
  );
}
