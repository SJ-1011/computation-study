"use client";
import { useState } from "react";
import { createComputation } from "@/lib/supabase/computation";
export default function AdminForm() {
  const [type, setType] = useState<"ox" | "short">("ox");
  const [subject, setSubject] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!subject.trim() || !question.trim() || !answer.trim()) {
      setMessage("모든 항목을 입력해주세요.");
      return;
    }
    try {
      setIsLoading(true);
      setMessage("");
      await createComputation({
        type,
        subject: subject.trim(),
        question: question.trim(),
        answer: answer.trim(),
      });
      setMessage("문제가 추가되었습니다.");
      setSubject("");
      setQuestion("");
      setAnswer("");
    } catch (error) {
      if (error instanceof Error) {
        setMessage(`문제 추가에 실패했습니다: ${error.message}`);
      } else {
        setMessage("문제 추가에 실패했습니다.");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex flex-col gap-10">
      <div>
        <p className="text-2xl font-bold mb-4">문제 추가</p>
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-5"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="type" className="font-bold">
              문제 유형
            </label>
            <select
              id="type"
              value={type}
              onChange={(event) =>
                setType(event.target.value as "ox" | "short")
              }
              className="bg-white border border-gray-200 p-4 rounded-2xl"
            >
              <option value="ox">OX</option>
              <option value="short">단답형</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="font-bold">
              과목
            </label>
            <input
              id="subject"
              type="text"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              className="bg-white border border-gray-200 p-4 rounded-2xl"
              placeholder="예: 컴퓨터구조론"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="question" className="font-bold">
              문제
            </label>
            <textarea
              id="question"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              className="bg-white border border-gray-200 p-4 rounded-2xl min-h-32 resize-y"
              placeholder="문제를 입력해주세요."
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="answer" className="font-bold">
              정답
            </label>
            <input
              id="answer"
              type="text"
              value={answer}
              onChange={(event) => setAnswer(event.target.value)}
              className="bg-white border border-gray-200 p-4 rounded-2xl"
              placeholder={type === "ox" ? "O 또는 X" : "예: 브리지|브릿지"}
            />
            {type === "short" && (
              <p className="text-sm text-gray-500">
                여러 정답을 허용하려면 | 로 구분해주세요. <br /> 예:
                브리지|브릿지
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="bg-black text-white font-bold p-4 rounded-2xl disabled:opacity-50"
          >
            {isLoading ? "추가 중..." : "문제 추가"}
          </button>
          {message && <p className="font-bold"> {message} </p>}
        </form>
      </div>
    </div>
  );
}
