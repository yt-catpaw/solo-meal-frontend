"use client";

export default function HomePage() {
  return (
    <main className="text-center p-10 min-h-screen text-white">
      <h1 className="text-2xl mb-5">SoloMealへようこそ！</h1>
      <p className="text-lg mb-8">気分を選んでください</p>

      <div className="mt-5">
        <button className="m-2 px-4 py-2 text-base bg-gray-200 rounded text-black">
          和食
        </button>
        <button className="m-2 px-4 py-2 text-base bg-gray-200 rounded text-black">
          洋食
        </button>
        <button className="m-2 px-4 py-2 text-base bg-gray-200 rounded text-black">
          カフェ
        </button>
        <button className="m-2 px-4 py-2 text-base bg-gray-200 rounded text-black">
          中華
        </button>
      </div>
    </main>
  );
}
