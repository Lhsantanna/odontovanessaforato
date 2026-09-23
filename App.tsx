import React, { useState } from 'react';
import { 
  Menu, X, Star, Check, MapPin, Phone, Instagram, 
  ArrowRight, Sparkles, ClipboardList, HeartHandshake, Smile 
} from 'lucide-react';

const WHATSAPP = "https://wa.me/5519997041629?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Rua+Padre+Francisco+Paiva+22+Socorro+SP";
const INSTAGRAM = "https://www.instagram.com/dentistavanessaferraz/";

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Invisalign", href: "#invisalign" },
  { label: "Estética Dental", href: "#estetica" },
  { label: "Sobre", href: "#sobre" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Localização", href: "#localizacao" },
];

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-500 selection:text-white">
      {/* HEADER */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
          <a href="#inicio" className="leading-tight">
            <span className="block font-serif text-lg text-slate-900">
              Dra. Vanessa Forato
            </span>
            <span className="block text-[0.65rem] font-medium tracking-[0.22em] uppercase text-amber-600">
              Cirurgiã-Dentista
            </span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-600 transition-colors hover:text-amber-600 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="hidden lg:inline-flex bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-md transition"
          >
            Agendar Avaliação
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            className="text-slate-800 lg:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-slate-200 bg-white px-5 pb-6 lg:hidden shadow-xl">
            <nav className="flex flex-col gap-1 pt-2">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-slate-100 py-3 text-sm text-slate-700 font-medium"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="mt-4 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl text-center font-semibold shadow-md transition"
              >
                Agendar Avaliação
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="inicio" className="relative overflow-hidden pt-32 pb-20 bg-slate-900 text-white lg:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" /> Atendimento em Socorro - SP
            </span>
            <h1 className="font-serif text-4xl leading-[1.12] sm:text-5xl lg:text-[3.4rem]">
              Um sorriso mais alinhado, natural e <span className="text-amber-400">confiante</span> começa com um planejamento personalizado.
            </h1>
            <p className="text-base leading-relaxed text-slate-300 max-w-xl">
              Atendimento odontológico com foco em Invisalign e estética dental em Socorro - SP, conduzido pela Dra. Vanessa Forato Ferraz.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition text-center"
              >
                Agendar Avaliação
              </a>
              <a 
                href="#sobre" 
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold border border-white/10 transition text-center"
              >
                Conhecer o Trabalho
              </a>
            </div>
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
              <div className="flex text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-amber-400" />)}
              </div>
              <p className="text-sm text-slate-300">
                <strong className="text-white">5,0 no Google</strong> • 20 avaliações
              </p>
            </div>
          </div>
          <div className="relative h-[420px] lg:h-[480px] rounded-3xl overflow-hidden border-2 border-amber-500/30 shadow-2xl bg-slate-800">
            <img
              src="https://images.unsplash.com/photo-1594824813567-540f2979e2f9?auto=format&fit=crop&w=800&q=80"
              alt="Dra. Vanessa Forato Ferraz"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CUIDADO INDIVIDUALIZADO */}
      <section className="py-24 bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
              alt="Sorriso natural e planejado"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-600">Cuidado Individualizado</span>
            <h2 className="font-serif text-3xl leading-tight text-slate-900 sm:text-4xl">
              Seu sorriso merece ser planejado para você
            </h2>
            <p className="leading-relaxed text-slate-600">
              Cada traço, proporção e detalhe do seu sorriso é avaliado com precisão e sensibilidade. A odontologia moderna vai além do tratamento clínico: envolve planejamento, cuidado e atenção individual.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold pt-2"
            >
              Quero conversar sobre meu sorriso <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* INVISALIGN */}
      <section id="invisalign" className="py-24 bg-slate-900 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div className="space-y-6">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-400">Invisalign Doctor</span>
            <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
              Invisalign: alinhamento com discrição
            </h2>
            <p className="leading-relaxed text-slate-300">
              Os alinhadores transparentes são uma alternativa moderna para determinados casos de tratamento ortodôntico. O planejamento é individualizado e realizado de acordo com a avaliação clínica de cada paciente.
            </p>
            <ul className="space-y-4 pt-2">
              {[
                "Alinhadores transparentes e removíveis",
                "Planejamento digital individualizado",
                "Mais praticidade para rotina e higienização",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-400">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-sm text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg transition inline-block"
              >
                Saiba mais sobre Invisalign
              </a>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80"
              alt="Invisalign"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="py-24 bg-slate-100">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-600">Pilares de Atendimento</span>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-slate-900 sm:text-4xl">
              Um atendimento pensado em cada detalhe.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: HeartHandshake, title: "Atendimento personalizado", text: "Um olhar individual para cada paciente." },
              { icon: ClipboardList, title: "Planejamento individual", text: "Etapas focadas nos seus objetivos." },
              { icon: Sparkles, title: "Foco em estética", text: "Abordagem voltada à harmonia natural." },
              { icon: Smile, title: "Invisalign Doctor", text: "Tecnologia de ponta em alinhadores." },
            ].map((pilar, idx) => {
              const Icon = pilar.icon;
              return (
                <div key={idx} className="rounded-2xl bg-white p-8 shadow-sm border border-slate-200/85 hover:shadow-md transition">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 mb-6">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{pilar.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{pilar.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white py-14 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <div>
            <p className="font-serif text-lg">Dra. Vanessa Forato Ferraz</p>
            <p className="text-slate-400 text-xs mt-1">Invisalign e Estética Dental em Socorro - SP</p>
          </div>
          <div className="flex items-center gap-6">
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-amber-400 transition">
              <Instagram className="size-5" />
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-amber-400 transition">
              <Phone className="size-5" />
            </a>
          </div>
          <p className="text-xs text-slate-500">&copy; 2026 Dra. Vanessa Forato Ferraz. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
