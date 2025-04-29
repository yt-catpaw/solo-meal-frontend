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
      className={`m-2 w-40 px-4 py-3 text-base rounded ${
        isSelected ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
      }`}
    >
      {label}
    </button>
  );
}
