import { steps } from "@/data/content";

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="font-display font-800 uppercase text-4xl sm:text-5xl max-w-md">
        Cómo funciona
      </h2>
      <div className="mt-12 grid sm:grid-cols-2 gap-px bg-line">
        {steps.map((s) => (
          <div key={s.n} className="bg-concrete p-8">
            <span className="inline-block font-display font-700 text-sm bg-ink text-lime px-2 py-1">
              {s.n}
            </span>
            <h3 className="mt-4 font-medium text-lg">{s.title}</h3>
            <p className="mt-2 text-sm text-ink/60 leading-relaxed max-w-[38ch]">
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
