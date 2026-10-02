import React, { useState, useRef, useCallback, useEffect } from "react";
import uiDesignImg from "../assets/Desktop - 1 (1).png";
import mobileImg from "../assets/iPhone 17 - 1.png";

// Decorative tiles — gradient + optional label + optional image
const tiles = [
  { gradient: "from-emerald-600 via-teal-700 to-teal-900", label: "UI Design", span: "md:col-span-2 md:row-span-2", image: uiDesignImg, description: "JAPOLIC — High-performance shared storage landing page designed in Figma with a clean, modern layout system." },
  { gradient: "from-indigo-500 via-violet-600 to-purple-900", label: "Prototype", span: "md:col-span-1 md:row-span-1", description: "Interactive prototypes and user flow explorations." },
  { gradient: "from-orange-400 via-amber-500 to-yellow-700", label: "Branding", span: "md:col-span-1 md:row-span-1", description: "Visual identity systems and brand guidelines." },
  { gradient: "from-sky-500 via-blue-600 to-blue-900", label: "Mobile", span: "md:col-span-1 md:row-span-1", image: mobileImg, description: "Responsive mobile-first design experiences." },
  { gradient: "from-pink-500 via-rose-600 to-rose-900", label: "Web App", span: "md:col-span-1 md:row-span-1", description: "Full-stack web application interfaces." },
];

/* ─── Lightbox Modal ─── */
function LightboxModal({ tile, onClose }) {
  const [visible, setVisible] = useState(false);
  const overlayRef = useRef(null);

  useEffect(() => {
    // Trigger enter animation
    requestAnimationFrame(() => setVisible(true));
    // Lock body scroll
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div
      ref={overlayRef}
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 transition-all duration-300 ${visible ? "bg-black/80 backdrop-blur-md" : "bg-black/0 backdrop-blur-none"}`}
      onClick={(e) => { if (e.target === overlayRef.current) handleClose(); }}
    >
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-300 ${visible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"}`}
      >
        {/* Top bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-3 bg-[#0d1117]/90 backdrop-blur-lg border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${tile.gradient}`} />
            <h3 className="text-white font-bold text-sm">{tile.label}</h3>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors group"
          >
            <svg className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content area */}
        <div className="overflow-y-auto max-h-[calc(90vh-56px)] bg-[#0d1117]">
          {tile.image ? (
            <img
              src={tile.image}
              alt={tile.label}
              className="w-full h-auto"
            />
          ) : (
            /* Decorative placeholder for tiles without images */
            <div className={`w-full h-80 bg-gradient-to-br ${tile.gradient} flex items-center justify-center`}>
              <div className="text-center px-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-10 h-10 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <p className="text-white/60 text-sm font-medium">Design coming soon</p>
              </div>
            </div>
          )}
          {/* Description footer */}
          <div className="px-6 py-5 border-t border-white/5">
            <p className="text-white/60 text-sm leading-relaxed">{tile.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Horizontal Scroll Carousel ─── */
function TileScroller({ tiles, onTileClick }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const hasDragged = useRef(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  // Drag to scroll
  const onMouseDown = (e) => {
    isDragging.current = true;
    hasDragged.current = false;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = "grabbing";
  };
  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    if (Math.abs(walk) > 5) hasDragged.current = true;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };
  const onMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };

  return (
    <div className="relative group/scroller">
      {/* Left arrow */}
      <button
        onClick={() => scroll(-1)}
        className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-accent hover:border-accent hover:text-white ${canScrollLeft ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"}`}
        aria-label="Scroll left"
      >
        <svg className="w-5 h-5 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right arrow */}
      <button
        onClick={() => scroll(1)}
        className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-accent hover:border-accent hover:text-white ${canScrollRight ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"}`}
        aria-label="Scroll right"
      >
        <svg className="w-5 h-5 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Fade edges */}
      <div className={`absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none transition-opacity duration-300 ${canScrollLeft ? "opacity-100" : "opacity-0"}`} />
      <div className={`absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none transition-opacity duration-300 ${canScrollRight ? "opacity-100" : "opacity-0"}`} />

      {/* Scrollable track */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide py-2 px-1 cursor-grab select-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {tiles.map((tile, i) => (
          <div
            key={i}
            className={`relative rounded-2xl overflow-hidden group cursor-pointer shrink-0 transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] ${i === 0 ? "w-[380px] md:w-[480px] h-[260px] md:h-[320px]" : "w-[240px] md:w-[280px] h-[260px] md:h-[320px]"}`}
            style={{ animation: `fadeInUp 0.5s ease-out ${i * 0.07}s both` }}
            onClick={() => { if (!hasDragged.current) onTileClick(tile); }}
          >
            {tile.image ? (
              <>
                <img
                  src={tile.image}
                  alt={tile.label}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  draggable={false}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </>
            ) : (
              <>
                <div className={`absolute inset-0 bg-gradient-to-br ${tile.gradient} transition-transform duration-700 group-hover:scale-110`} />
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                  }}
                />
              </>
            )}

            {/* Hover overlay with "click to view" hint */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Label */}
            <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white/90 text-xs font-semibold">{tile.label}</p>
              <p className="text-white/50 text-[10px] mt-0.5 line-clamp-1">{tile.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Drag-handle comparison slider ─── */
function ComparisonSlider() {
  const containerRef = useRef(null);
  const figmaRef = useRef(null);
  const handleRef = useRef(null);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    const pos = (x / rect.width) * 100;
    
    // Direct DOM manipulation avoids React re-render overhead for 60fps dragging
    if (figmaRef.current) {
      figmaRef.current.style.clipPath = `inset(0 ${100 - pos}% 0 0)`;
    }
    if (handleRef.current) {
      handleRef.current.style.left = `${pos}%`;
    }
  }, []);

  const onMouseDown = (e) => {
    dragging.current = true;
    updatePos(e.clientX);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };
  const onMouseMove = (e) => { if (dragging.current) updatePos(e.clientX); };
  const onMouseUp = () => {
    dragging.current = false;
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
  };
  const onTouchMove = (e) => updatePos(e.touches[0].clientX);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full rounded-xl overflow-hidden select-none cursor-col-resize"
      onMouseDown={onMouseDown}
      onTouchMove={onTouchMove}
      onTouchStart={(e) => updatePos(e.touches[0].clientX)}
    >
      {/* React / Code side */}
      <div className="absolute inset-0 bg-[#0d1117]">
        {/* Editor top bar */}
        <div className="flex items-center gap-2 px-4 py-2 bg-[#161b22] border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-white/30 text-[10px] ml-2 font-mono">HeroSection.jsx</span>
          <div className="ml-auto flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-[9px] font-mono tracking-wider">REACT</span>
          </div>
        </div>
        {/* Code content */}
        <div className="p-4 font-mono text-[10px] md:text-xs leading-relaxed overflow-hidden h-full">
          <div className="text-[#8b949e]">{"// Hero Section Component"}</div>
          <div><span className="text-[#ff7b72]">export default</span> <span className="text-[#d2a8ff]">function</span> <span className="text-[#79c0ff]">Hero</span><span className="text-white/60">() {"{"}</span></div>
          <div className="text-white/60">  <span className="text-[#ff7b72]">return</span> {"("}</div>
          <div className="text-white/60">    <span className="text-[#8b949e]">{"<"}</span><span className="text-[#7ee787]">section</span> <span className="text-[#79c0ff]">className</span><span className="text-white/40">=</span><span className="text-[#a5d6ff]">"hero"</span><span className="text-[#8b949e]">{">"}</span></div>
          <div className="text-white/60">      <span className="text-[#8b949e]">{"<"}</span><span className="text-[#7ee787]">h1</span><span className="text-[#8b949e]">{">"}</span><span className="text-[#a5d6ff]">Storage that</span></div>
          <div className="text-white/60">        <span className="text-[#a5d6ff]">keeps up</span><span className="text-[#8b949e]">{"</"}</span><span className="text-[#7ee787]">h1</span><span className="text-[#8b949e]">{">"}</span></div>
          <div className="text-white/60">      <span className="text-[#8b949e]">{"<"}</span><span className="text-[#7ee787]">p</span><span className="text-[#8b949e]">{">"}</span><span className="text-[#a5d6ff]">High-performance</span></div>
          <div className="text-white/60">        <span className="text-[#a5d6ff]">shared storage...</span><span className="text-[#8b949e]">{"</"}</span><span className="text-[#7ee787]">p</span><span className="text-[#8b949e]">{">"}</span></div>
          <div className="text-white/60">      <span className="text-[#8b949e]">{"<"}</span><span className="text-[#ffa657]">Button</span> <span className="text-[#79c0ff]">variant</span><span className="text-white/40">=</span><span className="text-[#a5d6ff]">"primary"</span><span className="text-[#8b949e]">{" />"}</span></div>
          <div className="text-white/60">    <span className="text-[#8b949e]">{"</"}</span><span className="text-[#7ee787]">section</span><span className="text-[#8b949e]">{">"}</span></div>
          <div className="text-white/60">  {")"}</div>
          <div className="text-white/60">{"}"}</div>
        </div>
      </div>

      {/* Figma side — clipped by slider */}
      <div
        ref={figmaRef}
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 50% 0 0)` }}
      >
        {/* Actual Figma design image */}
        <img
          src={uiDesignImg}
          alt="Figma design"
          className="absolute inset-0 w-full h-full object-cover object-top"
          draggable={false}
        />
        {/* Figma label badge */}
        <div className="absolute top-2 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#A259FF]/80 backdrop-blur-sm">
          <svg className="w-3 h-3" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 28.5C19 25.4174 20.2643 22.4609 22.5147 20.2678C24.7652 18.0748 27.8174 16.8333 31 16.8333C34.1826 16.8333 37.2348 18.0748 39.4853 20.2678C41.7357 22.4609 43 25.4174 43 28.5C43 31.5826 41.7357 34.5391 39.4853 36.7322C37.2348 38.9252 34.1826 40.1667 31 40.1667C27.8174 40.1667 24.7652 38.9252 22.5147 36.7322C20.2643 34.5391 19 31.5826 19 28.5Z" fill="white"/>
            <path d="M1 28.5C1 31.5826 2.26428 34.5391 4.51472 36.7322C6.76515 38.9252 9.8174 40.1667 13 40.1667H19V16.8333H13C9.8174 16.8333 6.76515 18.0748 4.51472 20.2678C2.26428 22.4609 1 25.4174 1 28.5Z" fill="white" opacity="0.8"/>
          </svg>
          <span className="text-white text-[9px] font-bold tracking-wider">FIGMA</span>
        </div>
      </div>

      {/* Drag handle */}
      <div
        ref={handleRef}
        className="absolute top-0 bottom-0 w-0.5 bg-white/30"
        style={{ left: `50%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-accent rounded-full shadow-lg flex items-center justify-center cursor-col-resize">
          <svg className="w-4 h-4 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsBento() {
  const [activeTile, setActiveTile] = useState(null);

  return (
    <section
      id="projects-bento"
      className="py-16 md:py-24 bg-background border-t border-text-primary/5 relative overflow-hidden"
    >
      {/* Subtle bg glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-accent/4 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* ── Top: Decorative Bento ── */}
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-2 tracking-tight">
            Design work
          </h2>
          <p className="text-text-primary/50 text-sm md:text-base max-w-md">
            Figma screens, prototypes and redesigns. Click a tile to preview.
          </p>
        </div>

        {/* Horizontal scroll carousel */}
        <div className="mb-16">
          <TileScroller tiles={tiles} onTileClick={setActiveTile} />
        </div>

        {/* ── Bottom: Design in Figma section ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Left — text */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-3 tracking-tight">
              Design in Figma,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-300">
                built in code
              </span>
            </h3>
            <p className="text-text-primary/60 text-sm md:text-base leading-relaxed mb-6 max-w-md">
              Drag the handle to compare my Figma design with the finished React build. Designer and developer in one person.
            </p>
            <a
              href="https://www.figma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 btn-primary border-transparent text-sm font-bold rounded-lg hover:bg-emerald-500 transition-all shadow-lg shadow-accent/20"
            >
              <svg className="w-4 h-4" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="19" cy="28.5" r="11.5" fill="white" opacity="0.9"/>
              </svg>
              Try the Figma prototype
            </a>
          </div>

          {/* Right — comparison slider */}
          <div className="h-64 md:h-72 rounded-2xl overflow-hidden border border-border-subtle shadow-xl">
            <ComparisonSlider />
          </div>

        </div>

      </div>

      {/* Lightbox modal */}
      {activeTile && (
        <LightboxModal tile={activeTile} onClose={() => setActiveTile(null)} />
      )}
    </section>
  );
}
