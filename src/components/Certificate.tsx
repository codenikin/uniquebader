'use client'
import { useState } from 'react'

const certificate = [
  {
    title: 'Transportation',
    description:
      'Our transportation solutions help cities and companies improve safety, reduce congestion, and provide better services to their customers.',
    image: '/certificate/4-1.jpg',
    link: '/transportation',
  },
  {
    title: 'Critical Infrastructure',
    description:
      'Our solutions help protect critical infrastructure from cyber attacks and other threats, ensuring that essential services are always available.',
    image: '/certificate/5-1.jpg',
    link: '/Critical-Infrastructure/critical-infrastructure',
  },
  {
    title: 'Traffic',
    description:
      'Our traffic management solutions help reduce congestion, improve safety, and make transportation more efficient for everyone.',
    image: '/certificate/6.jpg',
    link: '/Traffic/traffic',
  },
]

export const Certificate: React.FC = (props) => {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null)

  return (
    <section className="py-2 px-4 bg-white mt-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-anton text-center text-gray-900 mb-16 animate-fade-in relative">
          Our Certificates
          <span className="block w-24 h-1 bg-linear-to-r from-purple-500 to-pink-500 mx-auto mt-4"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-32 mb-32">
          {certificate.map((solution, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-purple-500/25 cursor-pointer"
              onClick={() => setZoomedImage(solution.image)}
            >
              <div className="relative h-[600px] sm:h-[450px] w-full  rounded-b-2xl">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-blue-500 transparent opacity-5 group-hover:opacity-50 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Zoom Modal */}
      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setZoomedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] flex items-center justify-center">
            <img
              src={zoomedImage}
              alt="Zoomed certificate"
              className="max-w-full max-h-screen object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute top-4 right-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:bg-gray-200 transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
