type MoodButtonProps = {
  label: string;
  onClick: () => void;
  isSelected: boolean;
};

export default function MoodButton({
  label,
  onClick,
  isSelected,
}: MoodButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`m-2 px-4 py-2 text-base rounded shadow-sm transition border
      ${
        isSelected
          ? "bg-blue-500 text-white border-blue-500"
          : "bg-white text-black border-gray-300 hover:bg-gray-100"
      }
    `}
    >
      {label}
    </button>
  );
}
