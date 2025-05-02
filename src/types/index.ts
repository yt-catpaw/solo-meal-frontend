export const moods = ["和食", "洋食", "カフェ", "中華"] as const;
export type Mood = (typeof moods)[number];
