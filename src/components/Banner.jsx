// src/components/Banner.jsx
import bannerimage from '../assets/banner.png'
import play from '../assets/play.png'
const Banner = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <p className=" text-purple-600 font-semibold mb-4">
           New: AI-Powered Tools Available
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
           Supercharge Your

            <span className="text-purple-600"> Digital Workflow</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
           Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.
Explore Products

          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition">
              Explore Products
            </button>

           <button className="flex items-center gap-2 border border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full font-semibold transition bg-transparent">
  <img src={play} alt="Play icon" className="w-5 h-5" />
  Watch Demo
</button>
          </div>
        </div>

        {/* Right Content */}
        <div>
          <img
            src={bannerimage}
            alt="Digital Tools"
            className="w-full rounded-3xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;