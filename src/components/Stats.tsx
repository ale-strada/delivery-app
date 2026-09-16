import { stats } from "@/data/content";

export default function Stats() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 grid sm:grid-cols-3 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="bg-cream rounded-2xl p-6">
            <p className="font-display font-700 text-5xl text-amber leading-none">
              {s.value}
            </p>
            <p className="mt-3 text-sm text-ink-soft max-w-[24ch]">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
