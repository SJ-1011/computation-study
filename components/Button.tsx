type ButtonProps = {
  content: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

export default function Button({
  content,
  onClick,
  className = "",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={`bg-white rounded-3xl min-h-20 flex border border-gray-300 justify-center items-center cursor-pointer w-[90%] ${className}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
