import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[75vh] overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
        <div className="backdrop-blur-[2px] bg-white/40 rounded-2xl p-6 sm:p-8 shadow-sm">
          <p className="inline-flex items-center text-xs sm:text-sm font-medium text-slate-600 bg-white/70 px-3 py-1 rounded-full">
            Minimal, pastel & productive
          </p>
          <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-800">
            Breeze — your pastel SaaS Todo
          </h1>
          <p className="mt-3 sm:mt-4 text-slate-600 text-sm sm:text-base max-w-2xl">
            Stay on top of your day with a soft, calming workspace. Create tasks, set priorities and glide through your checklist.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a href="#app" className="inline-flex items-center rounded-full bg-sky-500 text-white px-5 py-2 text-sm sm:text-base font-semibold shadow-sm hover:bg-sky-600 transition-colors">
              Start organizing
            </a>
            <a href="/test" className="inline-flex items-center rounded-full bg-white/70 text-slate-700 px-5 py-2 text-sm sm:text-base font-semibold shadow-sm hover:bg-white transition-colors">
              Check backend
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white" />
    </section>
  )
}

export default Hero
