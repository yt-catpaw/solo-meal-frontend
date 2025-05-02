import { Mood } from "@/types";

export type Shop = {
  name: string;
  mood: Mood;
  menu: string[];
  emoji: string;
  comment: string;
};

export const shopDetails: Shop[] = [
  {
    name: "やよい軒",
    mood: "和食",
    menu: ["しょうが焼き定食", "味噌かつ煮定食", "焼き魚定食"],
    comment: "栄養バランス重視の方におすすめ",
    emoji: "🍱",
  },
  {
    name: "大戸屋",
    mood: "和食",
    menu: ["鶏と野菜の黒酢あん", "さばの味噌煮", "四元豚ロースかつ定食"],
    comment: "定番の和定食をゆっくり楽しめる",
    emoji: "🥢",
  },
  {
    name: "サイゼリヤ",
    mood: "洋食",
    menu: ["ミラノ風ドリア", "ペペロンチーノ", "チョリソー"],
    comment: "安さと味の両立を求めるならここ！",
    emoji: "🍝",
  },
  {
    name: "ココス",
    mood: "洋食",
    menu: ["ハンバーグ", "ステーキ", "グラタン"],
    comment: "家族でも一人でも入りやすい洋食チェーン",
    emoji: "🥩",
  },
  {
    name: "餃子の王将",
    mood: "中華",
    menu: ["餃子", "天津飯", "チャーハン"],
    comment: "ガッツリ食べたい人におすすめ！",
    emoji: "🥟",
  },
  {
    name: "日高屋",
    mood: "中華",
    menu: ["中華そば", "野菜炒め定食", "ニラレバ炒め"],
    comment: "早い・安い・うまいを求めるなら",
    emoji: "🍜",
  },
  {
    name: "スターバックス",
    mood: "カフェ",
    menu: ["カフェラテ", "抹茶フラペチーノ", "アメリカーノ"],
    comment: "落ち着いた空間でゆっくり作業もOK",
    emoji: "☕",
  },
  {
    name: "ドトール",
    mood: "カフェ",
    menu: ["ブレンドコーヒー", "ミラノサンド", "カフェモカ"],
    comment: "ちょっとした休憩や打ち合わせにも",
    emoji: "🫘",
  },
];
