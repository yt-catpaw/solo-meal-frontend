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
    name: "サイゼリヤ",
    mood: "洋食",
    menu: ["ミラノ風ドリア", "ペペロンチーノ", "チョリソー"],
    comment: "安さと味の両立を求めるならここ！",
    emoji: "🍝",
  },
  {
    name: "餃子の王将",
    mood: "中華",
    menu: ["餃子", "天津飯", "チャーハン"],
    comment: "ガッツリ食べたい人におすすめ！",
    emoji: "🥟",
  },
];
