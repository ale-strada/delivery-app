import { testimonials } from "@/data/content";

export default function Testimonials() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 grid sm:grid-cols-2 gap-10">
        {testimonials.map((t) => (
          <blockquote key={t.name} className="border-l-2 border-lime pl-6">
            <p className="text-lg leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
            <footer className="mt-4 text-sm text-ink/60">
              {t.name} · {t.role}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
