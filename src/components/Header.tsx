import Image from "next/image";
import { brand } from "@/data/content";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-cream/90 backdrop-blur border-b border-line">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <span className="flex items-center gap-2 font-display font-700 text-2xl text-ink">
          <Image src="/icon.png" alt="" width={32} height={32} className="w-8 h-8 object-contain" />
          {brand.name}
        </span>
        <nav className="hidden sm:flex items-center gap-8 text-sm text-ink-soft">
          <a href="#como-funciona" className="hover:text-ink transition-colors">
            Cómo funciona
          </a>
          <a href="#modelos" className="hover:text-ink transition-colors">
            Modelos
          </a>
          <a href="#preguntas" className="hover:text-ink transition-colors">
            Preguntas
          </a>
        </nav>
        <a
          href="#empezar"
          className="text-sm font-semibold bg-amber text-white px-5 py-2.5 rounded-full hover:bg-amber-dark transition-colors"
        >
          Simular mi plan
        </a>
      </div>
    </header>
  );
}
