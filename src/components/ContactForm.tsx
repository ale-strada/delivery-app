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
    <section id="contacto" className="bg-asphalt text-paper">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-md">
          <h2 className="font-display font-800 uppercase text-4xl sm:text-5xl">
            Empezá hoy
          </h2>
          <p className="mt-3 text-paper/60 text-sm">
            Sin costo ni compromiso hasta que firmás tu plan. Te contactamos
            por WhatsApp.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="block text-sm text-paper/60 mb-1">
                Nombre
              </label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent border-b border-paper/30 py-2 outline-none focus:border-lime transition-colors"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-sm text-paper/60 mb-1">
                ¿En qué app trabajás?
              </label>
              <input
                value={app}
                onChange={(e) => setApp(e.target.value)}
                className="w-full bg-transparent border-b border-paper/30 py-2 outline-none focus:border-lime transition-colors"
                placeholder="PedidosYa, Rappi, Uber..."
              />
            </div>
            <div>
              <label className="block text-sm text-paper/60 mb-1">
                Ciudad
              </label>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-transparent border-b border-paper/30 py-2 outline-none focus:border-lime transition-colors"
                placeholder="Córdoba, Buenos Aires..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-lime text-asphalt px-6 py-3 font-medium hover:bg-paper transition-colors"
            >
              Continuar por WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
