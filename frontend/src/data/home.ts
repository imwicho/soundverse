export type MoodIconName =
  | "sun"
  | "waves"
  | "moon"
  | "heart"
  | "cloud"
  | "bolt"
  | "star"
  | "confusion";

export type Mood = {
  id: string;
  name: string;
  icon: MoodIconName;
};

export const moods: Mood[] = [
  { id: "joy", name: "Alegría", icon: "sun" },
  { id: "calm", name: "Calma", icon: "waves" },
  { id: "nostalgia", name: "Nostalgia", icon: "moon" },
  { id: "love", name: "Amor", icon: "heart" },
  { id: "sadness", name: "Tristeza", icon: "cloud" },
  { id: "energy", name: "Energía", icon: "bolt" },
  { id: "hope", name: "Esperanza", icon: "star" },
  { id: "confusion", name: "Confusión", icon: "confusion" },
];

export const featuredMoment = {
  title: "Midnight City",
  artist: "M83",
  mood: "Nostalgia",
  reflection: "Hay canciones que guardan una versión de nosotros que todavía queremos recordar.",
  coverDescription:
    "Portada abstracta con una forma circular morada y un acento naranja sobre una superficie oscura.",
};
