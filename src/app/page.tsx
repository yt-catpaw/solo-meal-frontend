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
    <div className="p-6 max-w-md mx-auto text-center min-h-screen text-black">
      <h1 className="text-3xl font-bold mb-5">SoloMealへようこそ！</h1>
      <p className="text-base text-gray-700 mb-8">気分を選んでください</p>

      <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-3">
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
              className="block w-full max-w-md bg-white rounded-lg shadow-md p-5 my-6 mx-auto hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold">
                  {shop.emoji} {shop.name}
                </h3>
                <span className="text-sm text-gray-500">{shop.mood}</span>
              </div>
              <p className="text-sm text-gray-700">{shop.comment}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
