"use client";
import { useState } from "react";
import MoodButton from "@/components/MoodButton";
import { shopDetails } from "@/data/shopDetails";
import type { Mood } from "@/types";
import { moods } from "@/types";
import Link from "next/link";

export default function HomePage() {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);

  const filteredShops = selectedMood
    ? shopDetails.filter((shop) => shop.mood === selectedMood)
    : [];

  const handleClick = (mood: Mood) => {
    setSelectedMood(mood);
  };

  return (
    <main className="text-center p-10 min-h-screen text-white">
      <h1 className="text-2xl mb-5">SoloMealへようこそ！</h1>
      <p className="text-lg mb-8">気分を選んでください</p>

      <div className="mt-5 flex flex-col md:flex-row justify-center items-center">
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
          {filteredShops.map((shop) => (
            <Link
              key={shop.name}
              href={`/shop/${encodeURIComponent(shop.name)}`}
              className="block mx-auto my-2 w-48 md:w-60 px-4 py-2 text-base md:text-lg bg-white text-black rounded shadow text-center"
            >
              {shop.name}
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
