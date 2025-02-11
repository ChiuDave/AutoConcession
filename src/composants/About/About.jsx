import Navbar from "../Navbar/Navbar";

const teamMembers = [
  {
    name: "Daniel To",
    role: "API & Frontend Developer",
    image: "https://avatars.githubusercontent.com/u/116399461",
    linkedin: "https://www.linkedin.com/in/daniel-to-/",
  },
  {
    name: "Wilson Ly",
    role: "AI & Backend Developer",
    image: "https://avatars.githubusercontent.com/u/111987546",
    linkedin: "https://www.linkedin.com/in/wilson-ly/",
  },
  {
    name: "Chung Sing Trang",
    role: "Full Stack Developer",
    image: "https://avatars.githubusercontent.com/u/108961667?v=4",
    linkedin: "https://www.linkedin.com/in/chung-sing-trang/",
  },
  {
    name: "David Chiu",
    role: "Frontend Developer",
    image: "https://avatars.githubusercontent.com/u/124915267",
    linkedin: "https://www.linkedin.com/in/david-chiu-/",
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />

      {/* About Section */}
      <div className="mt-10 max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Our Story</h2>
        <p className="text-lg text-gray-700 text-center">
          CarAI Dealership started with a simple vision: to revolutionize the car-buying experience.
          With decades of experience in the automotive industry, we saw the need for a smarter, more intuitive
          way for customers to find their perfect car. By integrating cutting-edge AI technology, we ensure
          that every customer gets personalized recommendations tailored to their preferences.
        </p>
        <p className="text-lg text-gray-700 text-center mt-2">
          Whether you're looking for a fuel-efficient commuter, a luxury ride, or a family SUV, our advanced
          AutoMatch AI algorithm scans our extensive inventory to find the best match for you. If your dream
          car isn't available, we'll suggest alternatives that meet your needs.
        </p>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <a
              key={index}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-center">{member.name}</h3>
              <p className="text-gray-600 text-center">{member.role}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
