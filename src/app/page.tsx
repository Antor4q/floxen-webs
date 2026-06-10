import Banner from "../components/home/Banner";
import Cta from "../components/home/Cta";
import Featured from "../components/home/Featured";
import Header from "../components/shared/Header";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505]">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(255,255,255,0.04) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(255,255,255,0.04) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* Top Center Warm Gradient Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] blur-[140px] opacity-[0.18]"
        style={{
          background: `
            radial-gradient(
              circle,
              rgba(255, 60, 0, 0.45) 0%,
              rgba(255, 120, 0, 0.28) 45%,
              rgba(255, 180, 80, 0.12) 75%,
              transparent 100%
            )
          `,
        }}
      />

      <div className="relative z-10">
        <Header />
        <Banner />
        <Featured/>
        {/* <Cta/> */}
      
      </div>
    </main>
  );
}