"use client";
import MoodButton from "@/components/MoodButton";

export default function HomePage() {
  const handleClick = (mood: string) => {
    console.log(`選ばれた気分: ${mood}`);
  };

  return (
    <main className="text-center p-10 min-h-screen text-white">
      <h1 className="text-2xl mb-5">SoloMealへようこそ！</h1>
      <p className="text-lg mb-8">気分を選んでください</p>

      <div className="mt-5">
        {["和食", "洋食", "カフェ", "中華"].map((label) => (
          <MoodButton
            key={label}
            label={label}
            onClick={() => handleClick(label)}
          />
        ))}
      </div>
    </main>
  );
}
