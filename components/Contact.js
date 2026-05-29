"use client";
import { useEffect, useRef } from "react";

const contactLinks = [
  {
    href: "mailto:immmanuel@okhuas.com",
    icon: "✉️",
    iconBg: "#E0F2FE",
    label: "Email",
    value: "you@email.com",
    external: false,
  },
  {
    href: "https://wa.me/2348134284100",
    icon: "💬",
    iconBg: "#DCFCE7",
    label: "WhatsApp",
    value: "+234 813 428 4100",
    external: true,
  },
  {
    href: "https://github.com/yourusername",
    iconBg: "#f6f8fa",
    label: "GitHub",
    value: "@yourusername",
    external: true,
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#1f2328">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/yourusername",
    iconBg: "#e8f4fd",
    label: "LinkedIn",
    value: "in/yourusername",
    external: true,
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#0A66C2">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "/resume.pdf",
    icon: "📄",
    iconBg: "#E0F2FE",
    label: "Resume",
    value: "Download PDF",
    external: false,
    download: true,
  },
];

export default function Contact() {
  const refs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach((en) => en.isIntersecting && en.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    refs.current.forEach((r) => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);

  const addRef = (el) => { if (el && !refs.current.includes(el)) refs.current.push(el); };

  return (
    <div id="contact" className="py-24 px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <div
          ref={addRef}
          className="reveal"
          style={{ opacity: 0, transform: "translateY(28px)", transition: "opacity .6s, transform .6s" }}
        >
          <div className="flex items-center gap-3 font-mono text-xs text-sky-500 uppercase tracking-[0.12em] mb-4">
            <span className="w-8 h-px bg-sky-400" />
            Get in touch
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-black tracking-[-0.035em] leading-[1.05]">
            Let&apos;s build<br />
            something <span className="font-serif italic font-normal text-sky-500">great</span>
          </h2>
          <p className="text-slate-500 leading-relaxed mt-4 text-base">
            Whether you have a project in mind, need a collaborator, or just want to connect
            — my inbox is always open.
          </p>
        </div>

        <div
          ref={addRef}
          className="reveal flex flex-col gap-4"
          style={{ opacity: 0, transform: "translateY(28px)", transition: "opacity .6s .1s, transform .6s .1s" }}
        >
          {contactLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              download={l.download ? true : undefined}
              className="flex items-center gap-4 p-5 bg-white border border-sky-100 rounded-2xl no-underline text-slate-900 font-semibold transition-all hover:border-sky-400 hover:bg-sky-50/60 hover:translate-x-1"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: l.iconBg }}
              >
                {l.svg ?? l.icon}
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[0.7rem] uppercase tracking-widest text-slate-400">{l.label}</span>
                <span className="text-sm font-bold text-slate-800">{l.value}</span>
              </div>
            </Link>
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
