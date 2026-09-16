import { audiences, brand } from "@/data/content";

export default function Hero() {
  return (
    <section className="bg-asphalt text-paper pt-16">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <p className="text-lime font-medium text-sm mb-6">
          Leasing de motos de trabajo en Argentina
        </p>
        <h1 className="font-display font-900 uppercase leading-[0.9] text-[15vw] sm:text-8xl tracking-tight max-w-4xl">
          {brand.claim}
        </h1>
        <p className="mt-8 max-w-lg text-paper/70 text-lg leading-relaxed">
          Sin recibo de sueldo, sin historial bancario. Evaluamos tu
          desempeño real en las apps en las que trabajás y armamos un plan
          con cuotas semanales, a tu medida.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#empezar"
            className="bg-lime text-asphalt px-6 py-3 font-medium hover:bg-paper transition-colors"
          >
            Quiero simular mi plan
          </a>
          <a
            href="#como-funciona"
            className="text-paper/70 hover:text-paper text-sm underline underline-offset-4"
          >
            Ver cómo funciona
          </a>
        </div>

        <ul className="mt-16 flex flex-wrap gap-x-6 gap-y-2 border-t border-paper/15 pt-6 text-sm text-paper/50">
          {audiences.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
