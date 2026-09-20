"use client";

import { useEffect, useState } from "react";

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

export function WelcomeGreeting({ name, subtext }: { name: string; subtext: string }) {
  const [greeting, setGreeting] = useState("Good day");

  useEffect(() => {
    setGreeting(getGreeting());
  }, []);

  return (
    <div className="text-center">
      <h1
        className="font-serif text-[32px] leading-tight text-white md:text-[38px]"
        suppressHydrationWarning
      >
        {greeting}, <span className="text-zinc-500">{name}</span>
      </h1>
      <p className="mx-auto mt-3 max-w-md text-zinc-400">{subtext}</p>
    </div>
  );
}
