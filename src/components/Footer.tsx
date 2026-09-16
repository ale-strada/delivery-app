import { brand } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-cream mx-auto max-w-6xl px-6 py-10 flex flex-wrap items-center justify-between gap-4 text-sm text-ink-soft">
      <span>{brand.name} — MVP de ejemplo, contenido ficticio.</span>
      <span>{new Date().getFullYear()}</span>
    </footer>
  );
}
