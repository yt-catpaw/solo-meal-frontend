"use client";
import { useState } from "react";
import MoodButton from "@/components/MoodButton";
import { moodToShops } from "@/data/moodToShops";
import type { Mood } from "@/types";

export default function HomePage() {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const [selectedShop, setSelectedShop] = useState<string | null>(null);

  const moods: Mood[] = Object.keys(moodToShops) as Mood[];

  const handleClick = (mood: Mood) => {
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
          {moodToShops[selectedMood].map((shop) => (
            <button
              key={shop}
              type="button"
              className="block mx-auto my-2 w-60 px-4 py-2 bg-white text-black rounded shadow"
              onClick={() => setSelectedShop(shop)}
            >
              {shop}
            </button>
          ))}
        </div>
      )}

      {selectedShop && (
        <div className="mt-10 p-5 bg-gray-100 text-black rounded shadow">
          <h3 className="text-xl mb-2">{selectedShop}の詳細ページ（仮）</h3>
          <p>ここに店舗の詳しい情報が表示されます。</p>
        </div>
      )}
    </main>
  );
}
