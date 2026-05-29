"use client";
import { useEffect, useRef } from "react";
import { apps } from "@/lib/data";

export default function MobileApps() {
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
    <div id="apps" className="bg-white py-24 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 font-mono text-xs text-sky-500 uppercase tracking-[0.12em] mb-4">
          <span className="w-8 h-px bg-sky-400" />
          Mobile
        </div>
        <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-black tracking-[-0.035em] leading-[1.05] mb-4">
          Mobile <span className="font-serif italic font-normal text-sky-500">apps</span>
        </h2>
        <p className="text-slate-500 text-lg leading-relaxed max-w-lg mb-14">
          Cross-platform mobile applications built with React Native, published on iOS and Android.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {apps.map((app, i) => (
            <a
              key={app.id}
              href={app.url}
              ref={(el) => { if (el && !refs.current.includes(el)) refs.current.push(el); }}
              className="reveal group relative flex flex-col gap-4 p-7 bg-sky-50/60 border border-sky-100 rounded-2xl no-underline text-inherit overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-200/25 hover:border-sky-300"
              style={{
                transitionDelay: `${i * 70}ms`,
                opacity: 0,
                transform: "translateY(28px)",
              }}
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-sky-100 rounded-bl-[5rem] transition-all duration-300 group-hover:w-28 group-hover:h-28" />

              <span className="text-4xl leading-none">{app.icon}</span>
              <div className="inline-flex items-center gap-1 font-mono text-[0.65rem] uppercase tracking-widest text-slate-400 bg-sky-100 px-2 py-1 rounded w-fit">
                {app.platform}
              </div>
              <div className="text-lg font-extrabold tracking-tight text-slate-900">{app.name}</div>
              <div className="text-sm text-slate-400 leading-relaxed flex-1">{app.desc}</div>
              <div className="flex items-center gap-1.5 text-sm font-bold text-sky-500 mt-auto">
                {app.downloadLabel}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .reveal.visible { opacity: 1 !important; transform: translateY(0) !important; }
        .font-serif { font-family: 'Instrument Serif', serif; }
        .font-mono { font-family: 'DM Mono', monospace; }
      `}</style>
    </div>
  );
}
