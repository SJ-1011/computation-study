import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "전산 전공 공부",
  description: "전산 전공 문제 모음",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`h-full w-full`}>
      <body className="min-h-full flex flex-row gap-12 bg-[#F4F6FB] ">
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
