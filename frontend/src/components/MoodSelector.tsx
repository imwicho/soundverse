"use client";

import { useState } from "react";
import { MoodIcon } from "@/components/MoodIcon";
import type { Mood } from "@/data/home";

type MoodSelectorProps = {
  moods: Mood[];
};

export function MoodSelector({ moods }: MoodSelectorProps) {
  const [selectedMoodId, setSelectedMoodId] = useState<string | null>(null);
  const [isMobilePickerOpen, setIsMobilePickerOpen] = useState(false);
  const selectedMood = moods.find((mood) => mood.id === selectedMoodId);

  function selectMood(moodId: string) {
    setSelectedMoodId(moodId);
    setIsMobilePickerOpen(false);
  }

  return (
    <div className="mt-5">
      <div
        aria-label="Emociones disponibles"
        className="hidden gap-3 md:grid md:grid-cols-2 lg:grid-cols-4"
        role="group"
      >
        {moods.map((mood) => {
          const isSelected = mood.id === selectedMoodId;

          return (
            <button
              aria-pressed={isSelected}
              className={`min-h-11 rounded-md border px-4 py-3 text-left font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring ${
                isSelected
                  ? "border-brand-primary bg-surface-3 text-text-primary ring-2 ring-brand-primary"
                  : "border-border-subtle bg-surface-1 text-text-primary hover:bg-surface-2"
              }`}
              key={mood.id}
              onClick={() => selectMood(mood.id)}
              type="button"
            >
              <span className="flex items-center gap-2">
                <MoodIcon icon={mood.icon} />
                <span>{mood.name}</span>
                <span
                  aria-hidden="true"
                  className={`ml-auto inline-flex size-4 items-center justify-center text-sm ${
                    isSelected ? "opacity-100" : "opacity-0"
                  }`}
                >
                  ✓
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="md:hidden">
        <button
          aria-controls="mobile-mood-panel"
          aria-expanded={isMobilePickerOpen}
          className="flex min-h-11 w-full items-center justify-between rounded-md border border-border-subtle bg-surface-1 px-4 py-3 text-left font-semibold text-text-primary transition-colors hover:bg-surface-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
          onClick={() => setIsMobilePickerOpen((isOpen) => !isOpen)}
          type="button"
        >
          <span className="flex items-center gap-2">
            {selectedMood ? (
              <MoodIcon icon={selectedMood.icon} />
            ) : (
              <span
                aria-hidden="true"
                className="flex size-5 items-center justify-center text-text-muted"
              >
                ○
              </span>
            )}
            <span>{selectedMood?.name ?? "Selecciona una emoción"}</span>
          </span>
          <svg
            aria-hidden="true"
            className={`size-5 shrink-0 transition-transform ${
              isMobilePickerOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
            viewBox="0 0 24 24"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>

        <div
          aria-label="Emociones disponibles"
          className="mt-3 grid grid-cols-2 gap-3 rounded-lg border border-border-subtle bg-surface-2 p-3"
          hidden={!isMobilePickerOpen}
          id="mobile-mood-panel"
          role="group"
        >
          {moods.map((mood) => {
            const isSelected = mood.id === selectedMoodId;

            return (
              <button
                aria-pressed={isSelected}
                className={`min-h-11 rounded-md border px-3 py-3 text-left font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring ${
                  isSelected
                    ? "border-brand-primary bg-surface-3 text-text-primary ring-2 ring-brand-primary"
                    : "border-border-subtle bg-surface-1 text-text-primary hover:bg-surface-3"
                }`}
                key={mood.id}
                onClick={() => selectMood(mood.id)}
                type="button"
              >
                <span className="flex items-center gap-2">
                  <MoodIcon icon={mood.icon} />
                  <span>{mood.name}</span>
                  <span
                    aria-hidden="true"
                    className={`ml-auto inline-flex size-4 items-center justify-center text-sm ${
                      isSelected ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    ✓
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <p aria-live="polite" className="mt-4 text-sm text-text-secondary">
        {selectedMood
          ? `Emoción seleccionada: ${selectedMood.name}`
          : "Selecciona una emoción para este momento"}
      </p>
    </div>
  );
}
