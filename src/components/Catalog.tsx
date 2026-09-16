import Image from "next/image";
import { models } from "@/data/content";

const currency = (n: number) =>
  n.toLocaleString("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 });

export default function Catalog() {
  return (
    <section id="modelos" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h2 className="font-display font-700 text-4xl sm:text-5xl text-ink max-w-md">
            Modelos disponibles
          </h2>
          <p className="text-ink-soft text-sm max-w-xs">
            Precios de referencia. El anticipo se abona en 3 pagos antes de
            retirar la moto.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {models.map((m) => (
            <div
              key={m.id}
              className="bg-cream rounded-2xl p-7 flex flex-col"
            >
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-5">
                <Image src="/icon.png" alt="" width={40} height={40} className="w-10 h-10 object-contain" />
              </div>
              <p className="text-ink-soft text-xs uppercase tracking-wide font-medium">
                {m.brand}
              </p>
              <p className="font-display font-700 text-2xl text-ink">{m.name}</p>

              <div className="mt-5 pt-5 border-t border-line space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-ink-soft">Precio contado</span>
                  <span className="font-medium">{currency(m.cashPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-soft">Anticipo</span>
                  <span className="font-medium">
                    {m.downPaymentInstallments.count}x{" "}
                    {currency(m.downPaymentInstallments.amount)}
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-line">
                <p className="text-ink-soft text-sm">Cuota semanal</p>
                <p className="font-display font-700 text-2xl text-amber">
                  {currency(m.weeklyInstallment)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
