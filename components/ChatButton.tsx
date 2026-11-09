"use client";

import { MessageCircle } from "lucide-react";

export default function ChatButton() {
  return (
    <button
      aria-label="Open chat"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-[0_10px_40px_-10px_rgba(44,158,163,0.6)] transition-transform hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
}
