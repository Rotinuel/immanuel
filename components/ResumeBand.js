"use client"

export default function ResumeBand() {
  return (
    <div className="relative bg-slate-900 py-20 px-8 text-center overflow-hidden">
      {/* Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(125,211,252,0.12), transparent 70%)" }}
      />
      <div className="relative z-10">
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-black text-white tracking-[-0.04em] mb-4">
          My{" "}
          <span className="font-serif italic font-normal text-sky-300">résumé</span>
          {" "}is one click away
        </h2>
        <p className="text-white/50 mb-10 text-base">
          Download my CV to see my full work history, education, and skills breakdown.
        </p>
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-3 bg-sky-400 hover:bg-sky-300 text-slate-900
            px-10 py-4 rounded-full text-base font-extrabold tracking-wide no-underline
            transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-sky-400/30"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
          </svg>
          Download Resume (PDF)
        </a>
      </div>
      <style jsx global>{`
        .font-serif { font-family: 'Instrument Serif', serif; }
      `}</style>
    </div>
  );
}
