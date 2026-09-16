import { testimonials } from "@/data/content";

export default function Testimonials() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 grid sm:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <blockquote key={t.name} className="bg-cream rounded-2xl p-8">
            <p className="text-lg leading-relaxed text-ink">
              &ldquo;{t.quote}&rdquo;
            </p>
            <footer className="mt-4 text-sm text-ink-soft font-medium">
              {t.name} · {t.role}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
