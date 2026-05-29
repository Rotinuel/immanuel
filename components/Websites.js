"use client";
import { useEffect, useRef } from "react";
import { websites } from "@/lib/data";

export default function Websites() {
  const refs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach((en) => en.isIntersecting && en.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    refs.current.forEach((r) => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="websites" className="py-24 px-8 max-w-5xl mx-auto">
      <div className="flex items-center gap-3 font-mono text-xs text-sky-500 uppercase tracking-[0.12em] mb-4">
        <span className="w-8 h-px bg-sky-400" />
        Portfolio
      </div>
      <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-black tracking-[-0.035em] leading-[1.05] mb-4">
        Web <span className="font-serif italic font-normal text-sky-500">projects</span>
      </h2>
      <p className="text-slate-500 text-lg leading-relaxed max-w-lg mb-14">
        A selection of websites and web platforms I&apos;ve designed and built — from SaaS dashboards to event portals.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {websites.map((project, i) => (
          <a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            ref={(el) => { if (el && !refs.current.includes(el)) refs.current.push(el); }}
            className="reveal group flex flex-col bg-white border border-sky-100 rounded-2xl overflow-hidden no-underline text-inherit transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-sky-200/30 hover:border-sky-300"
            style={{
              transitionDelay: `${i * 60}ms`,
              opacity: 0,
              transform: "translateY(28px)",
            }}
          >
            {/* Thumbnail */}
            <div
              className="h-48 flex items-center justify-center text-6xl relative overflow-hidden"
              style={{ background: project.gradient }}
            >
              <span className="relative z-10">{project.emoji}</span>
            </div>

            {/* Body */}
            <div className="flex flex-col gap-3 p-6 flex-1">
              <div className="flex items-center gap-1.5 font-mono text-[0.68rem] text-sky-500 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                {project.type}
              </div>
              <div className="text-lg font-extrabold tracking-tight text-slate-900">{project.title}</div>
              <div className="text-sm text-slate-400 leading-relaxed flex-1">{project.desc}</div>
              <div className="flex items-center justify-between pt-3 border-t border-sky-50">
                <div className="flex gap-1.5 flex-wrap">
                  {project.tags.map((t) => (
                    <span key={t} className="text-[0.65rem] font-semibold bg-sky-50 text-sky-700 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white text-sm flex-shrink-0 transition-all group-hover:bg-sky-500 group-hover:rotate-45">
                  →
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      <style jsx global>{`
        .reveal.visible { opacity: 1 !important; transform: translateY(0) !important; }
        .font-serif { font-family: 'Instrument Serif', serif; }
        .font-mono { font-family: 'DM Mono', monospace; }
      `}</style>
    </section>
  );
}
