import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import AboutUsSection from "./Components/AboutPage"; // Import the AboutUsSection component

function App() {
  return (
    <div className="relative min-h-screen text-white font-sans flex flex-col items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="bg.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Overlay Content */}
      <div className="relative z-10 w-full">
        <Header />
        <HeroSection />
        <AboutUsSection /> {/* Include the AboutUsSection component */}
      </div>
    </div>
  );
}

export default App;
