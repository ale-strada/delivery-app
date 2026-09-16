import Image from "next/image";

// ⚠️ Poné acá tus fotos reales en /public/motos/ (moto-1.jpg, moto-2.jpg,
// moto-3.jpg) — elegidas de Pexels/Unsplash, motos chicas 110-160cc.
// Mientras no estén los archivos, estos espacios se ven vacíos/rotos:
// es esperado hasta que sueltes las imágenes ahí.
const photos = [
  { src: "/motos/moto-1.jpg", alt: "Moto de trabajo urbana, cilindrada chica" },
  { src: "/motos/moto-2.jpg", alt: "Moto de trabajo estacionada" },
  { src: "/motos/moto-3.jpg", alt: "Moto de trabajo en uso diario" },
];

export default function MotoGallery() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display font-700 text-3xl sm:text-4xl text-ink max-w-md">
          Motos pensadas para el uso diario
        </h2>
        <p className="mt-2 text-ink-soft text-sm max-w-md">
          Cilindradas chicas, bajo consumo, fáciles de mantener y repuestos
          accesibles.
        </p>

        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          {photos.map((p) => (
            <div
              key={p.src}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover"
                sizes="(min-width: 640px) 33vw, 100vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
