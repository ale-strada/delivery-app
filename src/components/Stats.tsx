import { stats } from "@/data/content";

export default function Stats() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-16 grid sm:grid-cols-3 gap-10">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-display font-800 text-6xl leading-none">
              {s.value}
            </p>
            <p className="mt-3 text-sm text-ink/60 max-w-[22ch]">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
