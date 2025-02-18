import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

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
        <h2 className="text-3xl font-bold text-center mb-6">Notre Histoire</h2>
        <p className="text-lg text-gray-700 text-center">
          AutoConcession a commencé avec une vision simple : révolutionner l'expérience d'achat de voitures.
          Avec des décennies d'expérience dans l'industrie automobile, nous avons vu le besoin d'une manière plus intelligente et intuitive
          pour les clients de trouver leur voiture parfaite. En intégrant une technologie IA de pointe, nous nous assurons
          que chaque client obtient des recommandations personnalisées adaptées à ses préférences.
        </p>
        <p className="text-lg text-gray-700 text-center mt-2">
          Que vous recherchiez une voiture économique, une voiture de luxe ou un SUV familial, notre algorithme avancé
          AutoMatch AI scanne notre vaste inventaire pour trouver la meilleure correspondance pour vous. Si la voiture de vos rêves
          n'est pas disponible, nous vous suggérerons des alternatives qui répondent à vos besoins.
        </p>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Rencontrez Notre Équipe</h2>
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
      <Footer />
    </div>
  );
}
