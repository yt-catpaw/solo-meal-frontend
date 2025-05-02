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
    <main className="p-6 max-w-md mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">
        {shop.emoji} {shop.name}
      </h1>
      <p className="text-sm text-gray-500 mb-2">ジャンル: {shop.mood}</p>

      <ul className="mb-4">
        {shop.menu.map((item, i) => (
          <li key={i} className="text-base my-1">
            🍽️ {item}
          </li>
        ))}
      </ul>

      <p className="text-gray-700 italic mb-6">{shop.comment}</p>

      <button className="bg-blue-500 text-white py-2 px-4 rounded">
        地図で探す（仮）
      </button>

      <div className="mt-4">
        <Link href="/" className="text-blue-400 underline hover:text-blue-200">
          ← 気分選択に戻る
        </Link>
      </div>
    </main>
  );
}
