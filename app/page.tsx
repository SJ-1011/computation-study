import Image from "next/image";
import WelcomeBanner from "@/components/WelcomeBanner";
import OXQuestion from "@/components/Question/OXQuestion";
import ShortQuestion from "@/components/Question/ShortQuestion";

export default function Home() {
  return (
    <>
      <main className="flex flex-col flex-nowrap w-full">
        <WelcomeBanner />
        <section className="my-8 flex flex-row flex-nowrap gap-5">
          <OXQuestion />
          <ShortQuestion />
        </section>
      </main>
    </>
  );
}
