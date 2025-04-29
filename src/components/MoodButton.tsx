type MoodButtonProps = {
  label: string;
  onClick: () => void;
};

export default function MoodButton({ label, onClick }: MoodButtonProps) {
  return (
    <button
      onClick={onClick}
      className="m-2 px-4 py-2 text-base bg-gray-200 rounded text-black"
    >
      {label}
    </button>
  );
}
