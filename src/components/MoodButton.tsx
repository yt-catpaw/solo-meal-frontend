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
      className={`m-2 px-4 py-2 text-base rounded ${
        isSelected ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
      }`}
    >
      {label}
    </button>
  );
}
