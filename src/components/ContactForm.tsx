"use client";

import { useState } from "react";
import { brand } from "@/data/content";

// MVP sin backend: arma un mensaje de WhatsApp con los datos cargados.
// Cuando haya volumen, este submit se puede reemplazar por una API route
// que guarde el lead en Sheets/Airtable/Supabase antes de redirigir.
export default function ContactForm() {
  const [name, setName] = useState("");
  const [app, setApp] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola! Soy ${name || "—"}, trabajo con ${
      app || "—"
    }, estoy en ${city || "—"} y quiero info sobre un plan.`;
    const url = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contacto" className="bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-md">
          <h2 className="font-display font-700 text-4xl sm:text-5xl">
            Empezá hoy
          </h2>
          <p className="mt-3 text-cream/60 text-sm">
            Sin costo ni compromiso hasta que firmás tu plan. Te contactamos
            por WhatsApp.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label className="block text-sm text-cream/60 mb-1.5">
                Nombre
              </label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/5 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber transition-shadow placeholder:text-cream/30"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-sm text-cream/60 mb-1.5">
                ¿En qué app trabajás?
              </label>
              <input
                value={app}
                onChange={(e) => setApp(e.target.value)}
                className="w-full bg-white/5 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber transition-shadow placeholder:text-cream/30"
                placeholder="PedidosYa, Rappi, Uber..."
              />
            </div>
            <div>
              <label className="block text-sm text-cream/60 mb-1.5">
                Ciudad
              </label>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-white/5 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber transition-shadow placeholder:text-cream/30"
                placeholder="Córdoba, Buenos Aires..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-amber text-white rounded-full px-6 py-3.5 font-semibold hover:bg-amber-dark transition-colors"
            >
              Continuar por WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
