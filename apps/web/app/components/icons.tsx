type IconProps = { className?: string };

const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconGrid({ className }: IconProps) {
  return (
    <svg {...base} aria-hidden="true" className={className}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

export function IconChat({ className }: IconProps) {
  return (
    <svg {...base} aria-hidden="true" className={className}>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5v-8Z" />
    </svg>
  );
}

export function IconBook({ className }: IconProps) {
  return (
    <svg {...base} aria-hidden="true" className={className}>
      <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H12v16H5.5A1.5 1.5 0 0 1 4 18.5v-13Z" />
      <path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H12v16h6.5a1.5 1.5 0 0 0 1.5-1.5v-13Z" />
    </svg>
  );
}

export function IconRocket({ className }: IconProps) {
  return (
    <svg {...base} aria-hidden="true" className={className}>
      <path d="M12 3c2.5 1.2 5 4 5 8.5-.9.6-2 1-3 1-.2 1.7-1 3.3-2 4.5-1-1.2-1.8-2.8-2-4.5-1 0-2.1-.4-3-1 0-4.5 2.5-7.3 5-8.5Z" />
      <circle cx="12" cy="10" r="1.5" />
      <path d="M8.5 15.5 6 18M15.5 15.5 18 18M9 19l1-2M15 19l-1-2" />
    </svg>
  );
}

export function IconGithub({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={20}
      height={20}
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.34-.012 2.421-.012 2.751 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

export function IconMenu({ className }: IconProps) {
  return (
    <svg {...base} aria-hidden="true" className={className}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function IconX({ className }: IconProps) {
  return (
    <svg {...base} aria-hidden="true" className={className}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function IconChevronDown({ className }: IconProps) {
  return (
    <svg {...base} aria-hidden="true" className={className}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function IconBell({ className }: IconProps) {
  return (
    <svg {...base} aria-hidden="true" className={className}>
      <path d="M18 16v-5a6 6 0 1 0-12 0v5l-1.5 2.5h15L18 16Z" />
      <path d="M10 21a2 2 0 0 0 4 0" />
    </svg>
  );
}
