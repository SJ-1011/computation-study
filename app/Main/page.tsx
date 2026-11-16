import Header from "@/components/Header";
import LinkButton from "@/components/LinkButton";

export default async function MainPage() {
  return (
    <>
      <Header title="MAIN" />
      <div className="flex flex-col gap-4 items-center justify-center mt-10">
        <LinkButton content="랜덤 문제 풀기" target="/RandomTest" />
        <LinkButton content="과목별 문제 풀기" target="/" />
        <LinkButton content="문의 및 건의 사항" target="/" />
      </div>
    </>
  );
}
