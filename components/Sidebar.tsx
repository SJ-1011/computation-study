import Link from "next/link";

export default function Sidebar() {
  return (
    // w-50은 200px
    <aside className="min-h-full min-w-50 w-50 rounded-r-[10px] bg-[#0E1A2F] flex flex-col flex-nowrap gap-5 py-10">
      {/* 메인 */}
      <Link href="/" className="flex flex-row items-center ml-2 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-house preview-icon"
        >
          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
          <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>
        <h1 className="text-white text-lg ml-3">메인</h1>
      </Link>
      {/* OX 문제 */}
      <Link
        href="/OXQuestion"
        className="flex flex-row items-center ml-2 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="White"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-book-open-check preview-icon"
        >
          <path d="M12 5v16" />
          <path d="m16 12 2 2 4-4" />
          <path d="M22 6V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2h4.001A2 2 0 0022 17v-1.344" />
        </svg>
        <h1 className="text-white text-lg ml-3">OX 문제</h1>
      </Link>
      {/* 단답형 문제 */}
      <Link
        href="/ShortQuestion"
        className="flex flex-row items-center ml-2 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="White"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-book-open-check preview-icon"
        >
          <path d="M12 5v16" />
          <path d="m16 12 2 2 4-4" />
          <path d="M22 6V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2h4.001A2 2 0 0022 17v-1.344" />
        </svg>
        <h1 className="text-white text-lg ml-3">단답형 문제</h1>
      </Link>
      {/* 관리자 전용 */}
      <Link
        href="/Admin"
        className="flex flex-row items-center ml-2 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-user-lock preview-icon"
        >
          <path d="M19 16v-2a2 2 0 0 0-4 0v2" />
          <path d="M9.5 15H7a4 4 0 0 0-4 4v2" />
          <circle cx="10" cy="7" r="4" />
          <rect x="13" y="16" width="8" height="5" rx=".899" />
        </svg>
        <h1 className="text-white text-lg ml-3">관리자 전용</h1>
      </Link>
    </aside>
  );
}
