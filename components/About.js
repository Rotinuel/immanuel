"use client";
import { useEffect, useRef } from "react";

const skills = [
  "Next.js 16", "React", "Node.js", "Supabase", "PostgreSQL",
  "Tailwind CSS", "React Native", "Flutter", "Paystack", "Bun", "REST APIs",
  "Git", "Docker", "SendGrid", "Termii", "Mongodb", ""
];

export default function About() {
  const refs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    refs.current.forEach((r) => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);

  const addRef = (el) => { if (el && !refs.current.includes(el)) refs.current.push(el); };

  return (
    <div id="about" className="bg-white py-24 px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Avatar */}
        <div
          ref={addRef}
          className="reveal relative"
          style={{ transition: "opacity .6s, transform .6s", opacity: 0, transform: "translateY(28px)" }}
        >
          <div className="w-full aspect-[4/5] rounded-3xl bg-gradient-to-br from-sky-200 to-sky-400 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-300/50 to-sky-500/80" />
            <span className="relative z-10 text-9xl drop-shadow-lg">👨‍💻</span>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white border-2 border-sky-200 rounded-2xl p-4 shadow-xl shadow-sky-200/30">
            <div className="text-3xl font-black text-sky-500 leading-none">6+</div>
            <div className="text-xs font-semibold text-slate-400 tracking-wide mt-1">Years building</div>
          </div>
        </div>

        {/* Text */}
        <div
          ref={addRef}
          className="reveal"
          style={{ transition: "opacity .6s .1s, transform .6s .1s", opacity: 0, transform: "translateY(28px)" }}
        >
          <div className="flex items-center gap-3 font-mono text-xs text-sky-500 uppercase tracking-[0.12em] mb-4">
            <span className="w-8 h-px bg-sky-400" />
            About me
          </div>
          <h2 className="text-[2.25rem] font-black tracking-tight leading-[1.1] mb-5">
            Code, craft &amp;{" "}
            <span className="font-serif italic font-normal text-sky-500">curiosity</span>
          </h2>
          <p className="text-slate-500 leading-relaxed mb-4">
            I&apos;m a Full Stack Developer passionate about building products that live at the intersection
            of great engineering and thoughtful design. I specialise in Next.js, React, and Node.js ecosystems,
            with hands-on experience deploying full-scale platforms from scratch.
          </p>
          <p className="text-slate-500 leading-relaxed mb-4">
            Most recently I&apos;ve been working on <strong className="text-slate-700">ODDC 2026</strong> — a multi-portal
            event management platform for a large Nigerian December carnival, handling everything from
            real-time ticketing (Paystack) to vendor onboarding and admin dashboards.
          </p>
          <p className="text-slate-500 leading-relaxed mb-6">
            When I&apos;m not shipping code, I&apos;m probably exploring new API integrations, tweaking UI
            micro-interactions, or debugging a particularly stubborn race condition.
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="font-mono text-xs bg-sky-50 border border-sky-200/60 text-sky-700 px-3 py-1 rounded-full tracking-wide"
              >
                {s}
              </span>
            ))}
          </div>
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
