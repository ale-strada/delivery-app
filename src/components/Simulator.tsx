"use client";

import { useMemo, useState } from "react";
import { models } from "@/data/content";

const currency = (n: number) =>
  n.toLocaleString("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 });

// Regla fija de ejemplo para el MVP: no hay motor de riesgo real acá.
// Traduce ingreso diario declarado -> el modelo cuya cuota semanal
// representa una porción razonable de ese ingreso semanal.
function suggestModel(dailyDeliveries: number, incomePerDelivery: number) {
  const weeklyIncome = dailyDeliveries * incomePerDelivery * 6;
  const affordable = models
    .filter((m) => m.weeklyInstallment <= weeklyIncome * 0.35)
    .sort((a, b) => b.weeklyInstallment - a.weeklyInstallment);

  return { weeklyIncome, model: affordable[0] ?? models[0] };
}

export default function Simulator() {
  const [deliveries, setDeliveries] = useState(12);
  const [income, setIncome] = useState(3900);

  const result = useMemo(
    () => suggestModel(deliveries, income),
    [deliveries, income]
  );

  return (
    <section id="empezar" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="font-display font-700 text-4xl sm:text-5xl text-ink mb-3">
        Simulá tu plan
      </h2>
      <p className="text-ink-soft max-w-md text-sm">
        Estimación orientativa sobre 6 días laborables por semana. El
        resultado real depende de tu rubro y tu evaluación.
      </p>

      <div className="mt-12 grid lg:grid-cols-2 gap-8 items-start">
        <div className="bg-white rounded-2xl p-8 space-y-8">
          <div>
            <label className="flex justify-between text-sm mb-2">
              <span className="text-ink-soft">Entregas o viajes por día</span>
              <span className="font-semibold text-ink">{deliveries}</span>
            </label>
            <input
              type="range"
              min={4}
              max={40}
              value={deliveries}
              onChange={(e) => setDeliveries(Number(e.target.value))}
              className="w-full accent-[var(--color-amber)]"
            />
          </div>
          <div>
            <label className="flex justify-between text-sm mb-2">
              <span className="text-ink-soft">Ingreso aprox. por entrega</span>
              <span className="font-semibold text-ink">{currency(income)}</span>
            </label>
            <input
              type="range"
              min={1500}
              max={8000}
              step={100}
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
              className="w-full accent-[var(--color-amber)]"
            />
          </div>
        </div>

        <div className="bg-ink text-cream rounded-2xl p-8">
          <p className="text-cream/60 text-sm">Ingreso semanal estimado</p>
          <p className="font-display font-700 text-4xl mt-1">
            {currency(result.weeklyIncome)}
          </p>

          <div className="mt-8 pt-8 border-t border-cream/15">
            <p className="text-cream/60 text-sm">Plan sugerido</p>
            <p className="font-display font-700 text-2xl mt-1">
              {result.model.brand} {result.model.name}
            </p>
            <p className="mt-2 text-amber font-semibold">
              {currency(result.model.weeklyInstallment)} por semana
            </p>
          </div>

          <a
            href="#contacto"
            className="mt-8 inline-block w-full text-center bg-amber text-white rounded-full px-6 py-3.5 font-semibold hover:bg-amber-dark transition-colors"
          >
            Quiero este plan
          </a>
        </div>
      </div>
    </section>
  );
}
