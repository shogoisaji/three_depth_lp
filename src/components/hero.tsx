export default function Hero() {
  return (
    <section className="relative pt-12 pb-2 overflow-hidden bg-custom-dark">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl" />

      <div className="absolute bottom-16 right-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex flex-col items-center mb-12 gap-8">
            <img
              src="/app_logo.png"
              alt="logo"
              className="w-24 h-24 rounded-lg"
            />

            <span className="text-4xl text-gray-500 font-semibold">
              DepthStage
            </span>
          </div>
          <h1 className="text-3xl text-gray-400  md:text-5xl font-bold mb-6">
            Feel inspired to craft your perfect display. Every tweak brings your
            vision closer to life!
          </h1>
          <p className="text-xl md:text-2xl font-bold text-gray-400 mb-8">
            Transform 2D into Dynamic 3D Visuals - No Design Degree Required
          </p>
          <div className="flex justify-center">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img
                src="/app_store.svg"
                alt="Download on the App Store"
                className=""
                width={150}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
