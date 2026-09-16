import { faqs } from "@/data/content";

export default function Faq() {
  return (
    <section id="preguntas" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="font-display font-700 text-4xl sm:text-5xl text-ink max-w-md">
        Preguntas frecuentes
      </h2>
      <div className="mt-10 space-y-3 max-w-2xl">
        {faqs.map((f) => (
          <details key={f.q} className="group bg-white rounded-2xl px-6 py-5">
            <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-ink">
              {f.q}
              <span className="text-amber group-open:rotate-45 transition-transform text-xl leading-none">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm text-ink-soft leading-relaxed max-w-[60ch]">
              {f.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
