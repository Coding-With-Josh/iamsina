
"use client";
import Image from "next/image";
import meImg from "@/assets/images/me.png";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const imgRef = useRef<HTMLImageElement>(null);

useEffect(() => {
  const handleScroll = () => {
    if (!imgRef.current) return;
    const scrollY = window.scrollY;
    // Grow from scale 1 to 2 between 0 and 300px scroll
    const scale = Math.min(2, 1 + scrollY / 300);
    imgRef.current.style.transform = `scale(${scale})`;
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10 w-screen min-h-screen h-full bg-black [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#15803d_100%)]"></div>
      <div className="h-full w-full relative md:z-0 min-h-screen">
        {/* Main Heading */}
        <div className="absolute top-[calc(100vh-260px)] md:top-56 z-[9999] md:left-16 w-full md:w-auto pr-4">
          <span className="flex items-end justify-end md:justify-start flex-col text-right md:text-left tracking-tight gap-4 pb-3 bg-clip-text font-sans text-transparent bg-gradient-to-t from-stone-200 to-neutral-200 text-5xl sm:text-6xl lg:text-[6rem] font-bold">
            <h1 className="md:hidden font-black text-5xl">
              I <br /> AM <br />
              <span className="font-brand font-black text-6xl">SINA</span>
            </h1>
            <h1 className="hidden md:flex items-center font-semibold flex-col text-[12.5rem] pb-4">
              I <br /> AM <br />
              <span className="font-brand font-black pt-9 sr-only">SINA</span>
            </h1>
          </span>
        </div>

        {/* Desktop Brand Text */}
        <div className="hidden md:block absolute top-[calc(100vh-530px)] right-7">
          <h2 className="font-brand pt-9 md:text-[12.5rem] text-stone-200">
            <span className="inline-block mr-[0.25em] whitespace-nowrap font-black" aria-hidden="true">
  {['S', 'I', 'N', 'A'].map((letter, index) => (
    <span 
      key={index}
      className="inline-block -mr-[0.01em] text-green-400 drop-shadow-glow animate-pulse"
      style={{ 
        opacity: 1, 
        transform: 'translateY(0em) translateZ(0px)',
        textShadow: '0 0 8px rgba(74, 222, 128, 0.8)'
      }}
    >
      {letter}
    </span>
  ))}
</span>
          </h2>
        </div>

        {/* Centered Image (shrinks on scroll) */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] flex items-center justify-center"
        >
          <Image
            ref={imgRef}
            src={meImg}
            alt="Portrait"
            width={1200}
            height={1200}
            className="rounded-full w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover transition-transform duration-200 will-change-transform"
            style={{
              maskImage:
                "radial-gradient(circle at 50% 50%, white 55%, transparent 80%), linear-gradient(to top, transparent 0%, white 25%, white 75%, transparent 100%), linear-gradient(to left, transparent 0%, white 25%, white 75%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(circle at 50% 50%, white 55%, transparent 80%), linear-gradient(to top, transparent 0%, white 25%, white 75%, transparent 100%), linear-gradient(to left, transparent 0%, white 25%, white 75%, transparent 100%)"
            }}
            priority
          />
        </div>
      </div>
    </div>
  );
}