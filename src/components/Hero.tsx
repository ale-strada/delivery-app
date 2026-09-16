import Image from "next/image";
import { audiences, brand } from "@/data/content";

export default function Hero() {
  return (
    <section className="pt-16 bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="inline-block bg-teal/10 text-teal font-semibold text-sm px-3 py-1 rounded-full mb-6">
            Leasing de motos de trabajo en Argentina
          </p>
          <h1 className="font-display font-700 leading-[1.05] text-5xl sm:text-6xl text-ink">
            {brand.claim}
          </h1>
          <p className="mt-6 max-w-md text-ink-soft text-lg leading-relaxed">
            Sin recibo de sueldo, sin historial bancario. Evaluamos tu
            desempeño real en las apps en las que trabajás y armamos un plan
            con cuotas semanales, a tu medida.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#empezar"
              className="bg-amber text-white px-6 py-3.5 rounded-full font-semibold hover:bg-amber-dark transition-colors shadow-sm"
            >
              Quiero simular mi plan
            </a>
            <a
              href="#como-funciona"
              className="text-ink-soft hover:text-ink text-sm font-medium underline underline-offset-4"
            >
              Ver cómo funciona
            </a>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-soft">
            {audiences.map((a) => (
              <li key={a} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                {a}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12">
          <Image
            src="/icon.png"
            alt="Ilustración de una moto de reparto"
            width={1536}
            height={1024}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
