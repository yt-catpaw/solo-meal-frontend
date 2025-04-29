"use client";
import { useState } from "react";
import MoodButton from "@/components/MoodButton";

const moodToShops: Record<string, string[]> = {
  和食: ["やよい軒", "大戸屋", "吉野家"],
  洋食: ["ココス", "サイゼリヤ", "ジョナサン"],
  カフェ: ["スターバックス", "ドトール", "タリーズ"],
  中華: ["バーミヤン", "餃子の王将", "日高屋"],
};

export default function HomePage() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const moods = Object.keys(moodToShops);

  const handleClick = (mood: string) => {
    setSelectedMood(mood);
  };

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

      {selectedMood && (
        <div className="mt-10">
          <h2 className="text-xl mb-4">{selectedMood}におすすめの店舗</h2>
          <ul className="space-y-2">
            {moodToShops[selectedMood].map((shop) => (
              <li key={shop} className="bg-white text-black py-2 rounded">
                {shop}
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
