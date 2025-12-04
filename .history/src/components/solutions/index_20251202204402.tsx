const solutions = [
  {
    title: 'Transportation',
    description:
      'Our transportation solutions help cities and companies improve safety, reduce congestion, and provide better services to their customers.',
    image: '/solutions/11.jpeg',
    link: '/transportation',
  },
  {
    title: 'Critical Infrastructure',
    description:
      'Our solutions help protect critical infrastructure from cyber attacks and other threats, ensuring that essential services are always available.',
    image: '/solutions/9.jpeg',
    link: '/Critical-Infrastructure/critical-infrastructure',
  },
  {
    title: 'Traffic',
    description:
      'Our traffic management solutions help reduce congestion, improve safety, and make transportation more efficient for everyone.',
    image: '/solutions/8.jpeg',
    link: '/Traffic/traffic',
  },
  {
    title: 'Banking & Finance',
    description:
      'Our solutions help banks and financial institutions improve security, reduce fraud, and provide better services to their customers.',
    image: '/solutions/10.jpeg',
    link: '/Banking-Finance/banking-finance',
  },
  {
    title: 'Building & Construction',
    description:
      'Our solutions help construction companies improve safety, reduce costs, and complete projects faster and more efficiently.',
    image: '/solutions/13.jpeg',
    link: '/Building-Construction/building-construction',
  },
  {
    title: 'Retail & E-Commerce',
    description:
      'Our solutions help retailers and e-commerce companies improve customer service, increase sales, and grow their businesses.',
    image: '/solutions/12.jpeg',
    link: '/Retail-E-Commerce/retail-e-commerce',
  },
]
export const Solutions: React.FC = (props) => {
  return (
    <section className="py-2 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-anton text-center text-gray-900 mb-16 animate-fade-in relative">
          Our Projects
          <span className="block w-24 h-1 bg-linear-to-r from-purple-500 to-pink-500 mx-auto mt-4"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-purple-500/25"
            >
              <div className="relative h-[450px] w-full">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">
                    {solution.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed">{solution.description}</p>
                  <a href={solution.link} className="inline-block">
                    <button className="mt-4 px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-full transition-colors duration-300 text-sm font-medium">
                      Learn More
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
