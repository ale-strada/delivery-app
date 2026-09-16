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
      <h2 className="font-display font-800 uppercase text-4xl sm:text-5xl max-w-md">
        Simulá tu plan
      </h2>
      <p className="mt-3 text-ink/60 max-w-md text-sm">
        Estimación orientativa sobre 6 días laborables por semana. El
        resultado real depende de tu rubro y tu evaluación.
      </p>

      <div className="mt-12 grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div>
            <label className="flex justify-between text-sm mb-2">
              <span>Entregas o viajes por día</span>
              <span className="font-medium">{deliveries}</span>
            </label>
            <input
              type="range"
              min={4}
              max={40}
              value={deliveries}
              onChange={(e) => setDeliveries(Number(e.target.value))}
              className="w-full accent-[var(--color-lime)]"
            />
          </div>
          <div>
            <label className="flex justify-between text-sm mb-2">
              <span>Ingreso aproximado por entrega (ARS)</span>
              <span className="font-medium">{currency(income)}</span>
            </label>
            <input
              type="range"
              min={1500}
              max={8000}
              step={100}
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
              className="w-full accent-[var(--color-lime)]"
            />
          </div>
        </div>

        <div className="bg-asphalt text-paper p-8">
          <p className="text-paper/50 text-sm">Ingreso semanal estimado</p>
          <p className="font-display font-800 text-4xl mt-1">
            {currency(result.weeklyIncome)}
          </p>

          <div className="mt-8 pt-8 border-t border-paper/15">
            <p className="text-paper/50 text-sm">Plan sugerido</p>
            <p className="font-display font-700 text-2xl mt-1">
              {result.model.brand} {result.model.name}
            </p>
            <p className="mt-2 text-lime font-medium">
              {currency(result.model.weeklyInstallment)} por semana
            </p>
          </div>

          <a
            href="#contacto"
            className="mt-8 inline-block w-full text-center bg-lime text-asphalt px-6 py-3 font-medium hover:bg-paper transition-colors"
          >
            Quiero este plan
          </a>
        </div>
      </div>
    </section>
  );
}
