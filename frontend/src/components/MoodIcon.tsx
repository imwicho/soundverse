import type { MoodIconName } from "@/data/home";

type MoodIconProps = {
  icon: MoodIconName;
};

export function MoodIcon({ icon }: MoodIconProps) {
  let shape: React.ReactNode;

  switch (icon) {
    case "sun":
      shape = (
        <>
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </>
      );
      break;
    case "waves":
      shape = <path d="M3 9c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2M3 15c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2" />;
      break;
    case "moon":
      shape = <path d="M20 15.5A8 8 0 0 1 8.5 4 8 8 0 1 0 20 15.5Z" />;
      break;
    case "heart":
      shape = <path d="M20.8 8.6c0 5-8.8 10.1-8.8 10.1S3.2 13.6 3.2 8.6A4.6 4.6 0 0 1 12 6.7a4.6 4.6 0 0 1 8.8 1.9Z" />;
      break;
    case "cloud":
      shape = <path d="M7.5 18h9a4 4 0 0 0 .5-8A5.5 5.5 0 0 0 6.4 11.7 3.3 3.3 0 0 0 7.5 18ZM9 21l-1 1M15 21l-1 1" />;
      break;
    case "bolt":
      shape = <path d="m13 2-8 12h6l-1 8 9-13h-6l1-7Z" />;
      break;
    case "star":
      shape = <path d="m12 3 2.2 5.1 5.5.5-4.2 3.6 1.3 5.3-4.8-2.8-4.8 2.8 1.3-5.3-4.2-3.6 5.5-.5L12 3Z" />;
      break;
    case "confusion":
      shape = <path d="M4 7c2-3 5 3 8 0s6 3 8 0M4 17c2 3 5-3 8 0s6-3 8 0M4 12h16" />;
      break;
    default: {
      const exhaustiveIcon: never = icon;
      throw new Error(`Icono de emoción no compatible: ${exhaustiveIcon}`);
    }
  }

  return (
    <svg
      aria-hidden="true"
      className="size-5 shrink-0"
      fill="none"
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.75"
      viewBox="0 0 24 24"
    >
      {shape}
    </svg>
  );
}
