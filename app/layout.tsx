import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "전산 전공 공부",
  description: "전산 전공 문제 모음",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="min-h-full w-full">
      <body className="min-h-screen w-full ">
        <main className="mx-auto w-full max-w-110 min-h-screen bg-[#F4F6FB]">
          {children}
        </main>
      </body>
    </html>
  );
}
