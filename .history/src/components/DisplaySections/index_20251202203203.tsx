export const DisplaySections = () => {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20  text-sm font-medium tracking-wider">
            EDUCATIONAL SOLUTIONS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold  mt-4 mb-6">What BADER TECH Offers</h2>
          <div className="w-16 h-0.5 bg-linear-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-lg text-black">Get a solution for all your fabrication needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-white/10 hover:border-blue-500/30 hover:shadow-blue-500/10 transition-all duration-300">
            <div className="relative h-52 overflow-hidden">
              <img
                src="/Education/img1.webp"
                alt="Interactive Teaching Display"
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                width="500"
                height="300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                  Interactive Learning
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 bg-linear-to-br from-blue-500 to-blue-600 rounded-lg shadow-md">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Teacher-Student Engagement</h3>
                  <p className="mt-3 text-gray-300">
                    InstaHub series delivers exceptional audio-visual performance with seamless
                    integration of educational software resources.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex justify-between items-center">
                <span className="text-sm text-blue-300">Available in multiple sizes</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-white/10 hover:border-purple-500/30 hover:shadow-purple-500/10 transition-all duration-300">
            <div className="relative h-52 overflow-hidden">
              <img
                src="/solutions/14.jpeg"
                alt="Educational Touch Interface"
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                width="500"
                height="300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-purple-600 text-white text-xs font-medium rounded-full">
                  Multi-touch
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 bg-linear-to-br from-purple-500 to-purple-600 rounded-lg shadow-md">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Intuitive Touch Interface</h3>
                  <p className="mt-3 text-gray-300">
                    Experience fluid writing, easy modification, and seamless content sharing with
                    our advanced touchscreen displays.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex justify-between items-center">
                <span className="text-sm text-purple-300">65", 75", 86" options</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-white/10 hover:border-green-500/30 hover:shadow-green-500/10 transition-all duration-300">
            <div className="relative h-52 overflow-hidden">
              <img
                src="/Education/img3.webp"
                alt="Modern Classroom Environment"
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                width="500"
                height="300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-green-600 text-white text-xs font-medium rounded-full">
                  All-in-One
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 bg-linear-to-br from-green-500 to-green-600 rounded-lg shadow-md">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Simplified Learning Space</h3>
                  <p className="mt-3 text-gray-300">
                    Replace multiple devices with one integrated solution, eliminating cable clutter
                    and maximizing classroom space.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex justify-between items-center">
                <span className="text-sm text-green-300">Wireless connectivity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
