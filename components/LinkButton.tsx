import Link from "next/link";

interface LinkButtonProps {
  content: string;
  target: string;
  className?: string;
}

export default function LinkButton({
  content,
  target,
  className,
}: LinkButtonProps) {
  return (
    <Link
      href={target}
      className={`bg-white rounded-3xl w-[90%] min-h-20 flex border border-gray-300 justify-center items-center cursor-pointer ${className}`}
    >
      {content}
    </Link>
  );
}
