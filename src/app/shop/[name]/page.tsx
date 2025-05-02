import { notFound } from "next/navigation";
import Link from "next/link";
import { shopDetails } from "@/data/shopDetails";

type Props = {
  params: {
    name: string;
  };
};

export default function ShopDetailPage({ params }: Props) {
  const shop = shopDetails.find(
    (s) => s.name === decodeURIComponent(params.name)
  );

  if (!shop) return notFound();

  return (
    <div className="p-6 max-w-md mx-auto min-h-screen">
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <h1 className="text-4xl font-bold text-black mb-6">
          {shop.emoji} {shop.name}
        </h1>

        <p className="text-sm text-gray-600 mb-2">ジャンル: {shop.mood}</p>
        <p className="text-gray-800 italic mb-6">{shop.comment}</p>

        <div className="mb-8 text-left">
          <h2 className="text-xl font-semibold text-black mb-3">
            人気メニュー
          </h2>
          <ul className="list-disc list-inside text-base text-black bg-gray-50 p-4 rounded-md">
            {shop.menu.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <button className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600 transition">
          地図で探す（仮）
        </button>

        <div className="mt-6">
          <Link
            href="/"
            className="text-blue-500 underline hover:text-blue-700 transition"
          >
            ← 気分選択に戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
