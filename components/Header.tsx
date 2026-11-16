import Link from "next/link";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="bg-[#1e54b1] h-20 w-full items-center px-8 flex flex-nowrap">
      <h2 className="text-white text-xl font-bold">{title}</h2>
    </header>
  );
}
