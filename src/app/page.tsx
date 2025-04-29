"use client";
import { useState } from "react";
import MoodButton from "@/components/MoodButton";

export default function HomePage() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const handleClick = (mood: string) => {
    setSelectedMood(mood);
  };

  const moods = ["和食", "洋食", "カフェ", "中華"];

  return (
    <main className="text-center p-10 min-h-screen text-white">
      <h1 className="text-2xl mb-5">SoloMealへようこそ！</h1>
      <p className="text-lg mb-8">気分を選んでください</p>

      <div className="mt-5">
        {moods.map((label) => (
          <MoodButton
            key={label}
            label={label}
            onClick={() => handleClick(label)}
            isSelected={selectedMood === label}
          />
        ))}
      </div>
    </main>
  );
}
