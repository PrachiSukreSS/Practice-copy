import SpaceWarp from "./Space";

const AboutPage = () => {
  return (
    <div className="relative min-h-screen text-white">
      <SpaceWarp />
      <div className="relative z-10 max-w-4xl mx-auto text-center p-10">
        <h1 className="text-4xl font-bold text-[#c084fc]">
          Why Coding Club RSCOE?
        </h1>
        <p className="text-lg mt-4 text-gray-300">
          The Coding Club is a vibrant community of tech enthusiasts passionate
          about software development, design, and emerging technologies. We have
          organized numerous workshops, hackathons, and collaborative events to
          engage our members in hands-on learning experiences.
        </p>

        <div className="mt-8 space-y-6">
          <div className="bg-white/10 p-6 rounded-lg shadow-lg backdrop-blur-lg">
            <h2 className="text-2xl font-semibold text-[#c084fc]">
              Our Mission
            </h2>
            <p className="text-gray-300 mt-2">
              To create an engaging environment for students to learn, innovate,
              and collaborate on real-world technology projects.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-lg shadow-lg backdrop-blur-lg">
            <h2 className="text-2xl font-semibold text-[#c084fc]">
              Activities & Events
            </h2>
            <ul className="text-gray-300 mt-2 list-disc list-inside">
              <li>Workshops on Web Development, AI, and Cybersecurity</li>
              <li>
                Hackathons to challenge creativity and problem-solving skills
              </li>
              <li>Tech Talks and Panel Discussions with industry experts</li>
              <li>Collaborative Projects to gain hands-on experience</li>
            </ul>
          </div>

          <div className="bg-white/10 p-6 rounded-lg shadow-lg backdrop-blur-lg">
            <h2 className="text-2xl font-semibold text-[#c084fc]">Join Us</h2>
            <p className="text-gray-300 mt-2">
              Whether you are a beginner or an expert, the Coding Club welcomes
              all students eager to explore the world of technology. Be part of
              a thriving community and enhance your coding journey!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
