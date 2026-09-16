import { steps } from "@/data/content";

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="font-display font-700 text-4xl sm:text-5xl text-ink max-w-md">
        Cómo funciona
      </h2>
      <div className="mt-12 grid sm:grid-cols-2 gap-5">
        {steps.map((s) => (
          <div key={s.n} className="bg-white rounded-2xl p-7 flex gap-5">
            <span className="shrink-0 w-10 h-10 rounded-full bg-amber text-white font-display font-700 flex items-center justify-center text-sm">
              {s.n.replace("0", "")}
            </span>
            <div>
              <h3 className="font-semibold text-lg text-ink">{s.title}</h3>
              <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">
                {s.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
