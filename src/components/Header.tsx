import { brand } from "@/data/content";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-asphalt/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <span className="font-display font-800 text-2xl tracking-tight text-paper">
          {brand.name}
        </span>
        <nav className="hidden sm:flex items-center gap-8 text-sm text-paper/70">
          <a href="#como-funciona" className="hover:text-paper transition-colors">
            Cómo funciona
          </a>
          <a href="#modelos" className="hover:text-paper transition-colors">
            Modelos
          </a>
          <a href="#preguntas" className="hover:text-paper transition-colors">
            Preguntas
          </a>
        </nav>
        <a
          href="#empezar"
          className="text-sm font-medium bg-lime text-asphalt px-4 py-2 hover:bg-paper transition-colors"
        >
          Simular mi plan
        </a>
      </div>
    </header>
  );
}
