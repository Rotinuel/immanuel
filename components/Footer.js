export default function Footer() {
  return (
    <footer className="border-t border-sky-100 py-8 px-8 max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-slate-400">
      <span>© 2025 Immanuel. Built with Next.js &amp; Tailwind CSS.</span>
      <span className="font-mono text-xs">Crafted with ☕ &amp; curiosity</span>
      <style jsx global>{`
        .font-mono { font-family: 'DM Mono', monospace; }
      `}</style>
    </footer>
  );
}
