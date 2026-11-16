"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Computation } from "@/lib/supabase/computation";
import Button from "./Button";
import LinkButton from "./LinkButton";

function shuffleOptions<T>(options: T[]) {
  const shuffled = [...options];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }

  return shuffled;
}

type TestProps = {
  questions: Computation[];
};

type Result = "correct" | "incorrect" | null;

export default function Test({ questions }: TestProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [result, setResult] = useState<Result>(null);

  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    if (!currentQuestion) return;

    const options = [
      ...currentQuestion.wrong.split("|"),
      currentQuestion.answer,
    ];

    setShuffledOptions(shuffleOptions(options));
  }, [currentQuestion]);

  if (!currentQuestion) {
    return (
      <div className="flex flex-col flex-nowrap gap-4 mt-4 mx-4 justify-center items-center">
        모든 문제를 다 푸셨거나, 더이상 문제가 없습니다.
        <LinkButton content="처음으로" target="/" />
      </div>
    );
  }

  // 선지 선택
  const handleAnswer = (option: string) => {
    if (result !== null) return;

    if (option === currentQuestion.answer) {
      setResult("correct");
    } else {
      setResult("incorrect");
    }
  };

  // 다음 문제
  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
    setResult(null);
  };

  return (
    <>
      {/* 문제 */}
      <div className="relative mx-8 my-8 text-lg flex flex-row flex-nowrap gap-2">
        {currentIndex + 1}.<div>{currentQuestion.question}</div>
        {/* 정답 / 오답 이미지 */}
        {result === "correct" && (
          <Image
            src="/images/correct.png"
            alt="정답"
            width={100}
            height={100}
            className="absolute -top-6 -left-8 pointer-events-none"
          />
        )}
        {result === "incorrect" && (
          <Image
            src="/images/incorrect.png"
            alt="오답"
            width={100}
            height={100}
            className="absolute -top-6 -left-8 pointer-events-none"
          />
        )}
      </div>

      {/* 선지 */}
      {result !== "incorrect" && (
        <div className="flex flex-col flex-nowrap gap-4 mt-4 mx-4 justify-center items-center">
          {shuffledOptions.map((option, index) => (
            <Button
              key={index}
              content={option}
              onClick={() => handleAnswer(option)}
            />
          ))}
          <div className="flex flex-row flex-nowrap w-full gap-4 justify-center items-center">
            <LinkButton content="처음으로" target="/" className="w-[40%]!" />

            <Button
              content="다음 문제"
              onClick={handleNext}
              disabled={result === null}
              className={`w-[40%]! ${result !== null ? "" : "bg-transparent!"}`}
            />
          </div>
        </div>
      )}

      {/* 오답일 때 해설 */}
      {result === "incorrect" && (
        <div className="mt-6 mx-4">
          <div className="mx-10 mb-8">
            <h3 className="font-bold text-lg mb-2">정답</h3>
            <p>{currentQuestion.answer}</p>
          </div>

          <div className="flex flex-row flex-nowrap w-full gap-4 justify-center items-center">
            <LinkButton content="처음으로" target="/" className="w-[40%]!" />

            <Button
              content="다음 문제"
              onClick={handleNext}
              disabled={result === null}
              className={`w-[40%]! ${result !== null ? "" : "bg-transparent!"}`}
            />
          </div>
        </div>
      )}
    </>
  );
}
