"use client"

import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-8 pt-32 pb-16 overflow-hidden"
    >
      {/* Bg orbs */}
      <div
        className="pointer-events-none absolute top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(125,211,252,0.4), transparent 70%)",
          filter: "blur(80px)",
          animation: "drift 8s ease-in-out infinite alternate",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[50px] left-[-50px] w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.25), transparent 70%)",
          filter: "blur(80px)",
          animation: "drift 10s ease-in-out infinite alternate-reverse",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Available badge */}
        <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-500 bg-sky-100/60 border border-sky-300/50 px-4 py-1.5 rounded-full mb-8 tracking-widest">
          <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
          Available for work &nbsp;·&nbsp; Full Stack Dev
        </div>

        <h1 className="text-[clamp(3rem,8vw,7rem)] font-black leading-[0.95] tracking-[-0.04em] text-slate-900 mb-6">
          Building
          <br />
          <span className="font-serif italic font-normal text-sky-500">digital</span>
          <br />
          experiences.
        </h1>

        <p className="text-[clamp(1rem,2vw,1.25rem)] text-slate-500 max-w-lg leading-relaxed mb-12">
          I craft performant, beautiful web and mobile applications that solve real
          problems — from pixel-perfect UIs to robust backend systems.
        </p>

        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href="#websites"
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-full text-sm font-bold tracking-wide hover:bg-sky-500 border-2 border-slate-900 hover:border-sky-500 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-300/30 no-underline"
          >
            View my work
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <Link
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-transparent text-slate-800 px-8 py-3.5 rounded-full text-sm font-bold tracking-wide border-2 border-sky-300/60 hover:bg-sky-100/50 hover:border-sky-500 transition-all hover:-translate-y-0.5 no-underline"
          >
            Download CV
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
          </Link>
        </div>

        <div className="flex flex-wrap gap-3">
          {[
            {
              href: "https://github.com/yourusername",
              label: "GitHub",
              icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              ),
            },
            {
              href: "https://linkedin.com/in/yourusername",
              label: "LinkedIn",
              icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              ),
            },
          ].map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs text-slate-500 hover:text-sky-500 px-4 py-2 border border-sky-200/50 hover:border-sky-400 rounded-lg bg-white/60 transition-all hover:-translate-y-0.5 no-underline"
            >
              {s.icon}
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes drift {
          from { transform: translate(0, 0) scale(1); }
          to { transform: translate(30px, 20px) scale(1.05); }
        }
        .font-serif { font-family: 'Instrument Serif', serif; }
        .font-mono { font-family: 'DM Mono', monospace; }
      `}</style>
    </section>
  );
}
