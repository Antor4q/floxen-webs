"use client";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Main Background */}
      <div className="absolute inset-0 bg-[#030303]" />

      {/* Center Purple Glow */}
      {/* <div
        className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[900px]
        h-[900px]
        rounded-full
        bg-violet-600/10
        blur-[180px]
      "
      /> */}

      {/* ================= TOP RIGHT ARC ================= */}
     

      {/* Purple Streak */}
     

      {/* ================= LEFT BOTTOM ORB ================= */}
    

      {/* Orb Glow */}
     
      {/* ================= DOT GRID ================= */}
      <div
        className="
        absolute
        bottom-0
        left-0
        w-full
        h-[45%]
        opacity-60
        [background-image:radial-gradient(rgba(168,85,247,.7)_1px,transparent_1px)]
        [background-size:30px_30px]
        [mask-image:linear-gradient(to_top,black,transparent)]
      "
        style={{
          transform:
            "perspective(1200px) rotateX(75deg) scale(1.7)",
          transformOrigin: "bottom",
        }}
      />

    
    </div>
  );
}