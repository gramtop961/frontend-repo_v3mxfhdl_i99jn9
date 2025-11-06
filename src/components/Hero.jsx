import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4JFCLsE5jz72cZzw/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Subtle gradient vignette that doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.25)_60%,rgba(0,0,0,0.6)_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 flex flex-col items-center text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/70">AirPods</p>
        <h1 className="mt-3 text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight">
          Immerse yourself.
        </h1>
        <p className="mt-4 max-w-2xl text-white/70 text-lg">
          Spatial audio with dynamic head tracking. Active Noise Cancellation. A
          world of sound, refined.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <a
            href="#buy"
            className="rounded-full bg-white text-black px-6 py-2.5 font-medium hover:bg-white/90 transition"
          >
            Buy
          </a>
          <a
            href="#learn"
            className="rounded-full border border-white/30 px-6 py-2.5 font-medium text-white hover:bg-white/10 transition"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
