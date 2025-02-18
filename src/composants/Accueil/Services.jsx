export default function Services() {
    return <section id="services" className="py-20 bg-white text-center px-10">
    <h2 className="text-4xl font-semibold">Nos Services</h2>
    <p className="text-lg mt-4 max-w-3xl mx-auto">
      Découvrez nos solutions avancées, de la recommandation intelligente à la recherche simplifiée de véhicules.
    </p>

    {/* Services Cards */}
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {/* Card 1: Achat et Vente de Voitures */}
      <div className="bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center">
        <img src="https://media.istockphoto.com/id/1281648010/fr/vectoriel/car-deal-avec-lic%C3%B4ne-ou-le-logo-de-la-ligne-de-signe-de-secousse-de-main-concept-de.jpg?s=612x612&w=0&k=20&c=drRPfSpJs9wPcKSMxuNcBt-7_5ORkxGXyjtPR8mMsJw=" alt="Vente de voitures" className="rounded-lg mb-4" />
        <h3 className="text-xl font-semibold">Achat et Vente de Voitures</h3>
        <p className="text-gray-600 mt-2">
          Trouvez la voiture parfaite ou vendez votre véhicule en toute simplicité grâce à notre plateforme optimisée.
        </p>
      </div>

      {/* Card 2: Service Client de Qualité */}
      <div className="bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center">
        <img src="https://cdn-icons-png.flaticon.com/512/950/950299.png" alt="Service client" className="rounded-lg mb-4" />
        <h3 className="text-xl font-semibold">Service Client de Qualité</h3>
        <p className="text-gray-600 mt-2">
          Notre assistance est disponible 24/7 pour vous accompagner dans votre expérience d&apos;achat ou de vente.
        </p>
      </div>

      {/* Card 3: Recommandations Personnalisées */}
      <div className="bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center">
        <img src="https://static.vecteezy.com/system/resources/previews/042/407/049/non_2x/trendy-ai-model-vector.jpg" alt="Recommandations intelligentes" className="rounded-lg mb-4" />
        <h3 className="text-xl font-semibold">Recommandations Intelligentes</h3>
        <p className="text-gray-600 mt-2">
          Grâce à l&apos;IA, nous vous suggérons des voitures adaptées à vos besoins et préférences en temps réel.
        </p>
      </div>
    </div>
  </section>
}