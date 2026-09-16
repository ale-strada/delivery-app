import { models } from "@/data/content";

const currency = (n: number) =>
  n.toLocaleString("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 });

export default function Catalog() {
  return (
    <section id="modelos" className="bg-asphalt text-paper">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h2 className="font-display font-800 uppercase text-4xl sm:text-5xl max-w-md">
            Modelos disponibles
          </h2>
          <p className="text-paper/50 text-sm max-w-xs">
            Precios de referencia. El anticipo se abona en 3 pagos antes de
            retirar la moto.
          </p>
        </div>

        <div className="mt-12 divide-y divide-paper/15 border-t border-b border-paper/15">
          {models.map((m) => (
            <div
              key={m.id}
              className="py-6 grid sm:grid-cols-[1fr_auto_auto_auto] gap-4 sm:gap-10 items-center"
            >
              <div>
                <p className="text-paper/50 text-xs uppercase tracking-wide">
                  {m.brand}
                </p>
                <p className="font-display font-700 text-2xl">{m.name}</p>
              </div>
              <div className="text-sm">
                <p className="text-paper/50">Precio contado</p>
                <p className="font-medium">{currency(m.cashPrice)}</p>
              </div>
              <div className="text-sm">
                <p className="text-paper/50">Anticipo</p>
                <p className="font-medium">
                  {m.downPaymentInstallments.count} pagos de{" "}
                  {currency(m.downPaymentInstallments.amount)}
                </p>
              </div>
              <div className="text-sm sm:text-right">
                <p className="text-paper/50">Cuota semanal</p>
                <p className="font-medium text-lime">
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
