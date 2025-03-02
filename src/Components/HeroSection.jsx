import { FaInfoCircle } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="w-full max-w-4xl mx-6 flex-grow flex flex-col justify-left items-left">
      {/* Hero Section */}
      <div
        className="bg-white bg-opacity-10 rounded-full p-2 mb-2 w-2/3 text-center align-left"
        style={{ marginLeft: "8%", marginTop: "8%", marginBottom: "0%" }}
      >
        <p className="text-xl font-semibold text-white text-center">
          Time to dive into code!
        </p>
      </div>
      {/* Main Section */}
      <main className="flex flex-col md:flex-row justify-between items-start text-left p-12 mt-0">
        <div className="flex flex-col items-start text-left md:w-5/4">
          <h1
            className="text-7xl text-white font-extrabold text-white-600 mb-6"
            style={{ fontFamily: "MS Sans Serif" }}
          >
            Learn - Grow - Inspire With Us
          </h1>
          <h2 className="text-5xl font-medium text-white mb-8 flex items-center w-full">
            <div className="relative group ml-4">
              <button className="group relative inline-flex overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-4 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600"></span>
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-3 text-sm font-medium backdrop-blur-3xl transition-all duration-300 group-hover:bg-slate-950/90">
                  <svg
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mr-2 h-5 w-5 text-pink-500 transition-transform duration-300 group-hover:-translate-x-1"
                  >
                    <path
                      d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                  <span className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold">
                    Let`s get started
                  </span>
                  <svg
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="ml-2 h-5 w-5 text-blue-500 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </h2>
          {/* Description */}
          <p className="text-xl mb-4 opacity-80 text-justify w-[80%]">
            Welcome to the RSCOE Coding Club, Join us to learn, inspire, and
            grow as we explore the endless possibilities of coding and
            programming. We believe that coding is an art and we are here to
            help you master it.
          </p>
          <p
            className="text-gray-400 text-lg flex items-center cursor-pointer"
            onClick={() => (window.location.href = "#AboutUsSection")}
          >
            <FaInfoCircle className="mr-2" />
            Explore more
          </p>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
