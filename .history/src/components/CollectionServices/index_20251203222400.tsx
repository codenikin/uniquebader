'use client'
import { FaAward, FaClock, FaShieldAlt } from 'react-icons/fa'
const features = [
  {
    name: 'Premium Quality Materials & Workmanship',
    description:
      'Quality is at the core of everything we do. From high-strength steel to durable architectural fabrics, every project is completed with precision and built to last. We follow strict quality checks and engineering standards to deliver structures that exceed client expectations.',
    href: '#',
    icon: FaAward,
  },
  {
    name: 'Timely Delivery & Professional Execution',
    description:
      'Our process is streamlined to ensure timely completion and installation without compromising quality—making us a dependable partner for urgent and long-term projects.',
    href: '#',
    icon: FaClock,
  },
  {
    name: 'Trusted by Clients Across the U.A.E.',
    description:
      'Our reputation is built on consistent quality, skilled workmanship, and delivering results that exceed expectations for clients in commercial, residential, and industrial sectors.',
    href: '#',
    icon: FaShieldAlt,
  },
]

export const CollectionServices: React.FC = (props) => {
  return (
    <div className="codenik ">
      <div className="row absolute bg-[url('/bg2-1.png')] ">
        <div className="col-lg-3 col-md-6" key="">
          <div className="relative  sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto w-full">
                <h2 className="text-4xl font-anton tracking-tight text-pretty text-white sm:text-5xl">
                  Why BADER TECH U.A.E ?
                </h2>
                <p className="mt-6 text-lg/8 text-gray-600 ">
                  We are expert in tensile fabric structures in U.A.E.We provide the complete
                  solution for Tensile membrane shades, Mild steel & Stainless Steel fabrication &
                  erection. Our service include Design, Drawing & Engineering for Fabrication
                  &Tensile membrane structures Civil maintenance work and Machinery repairing &
                  trading.
                </p>
              </div>
              <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                  {features.map((feature) => (
                    <div key={feature.name} className="flex flex-col shadow-2xl p-6">
                      <dt className="text-base/7 font-semibold text-gray-900">
                        <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                          <feature.icon aria-hidden="true" className="size-6 text-white" />
                        </div>
                        {feature.name}
                      </dt>
                      <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                        <p className="flex-auto">{feature.description}</p>
                        <p className="mt-6">
                          <a
                            href={feature.href}
                            className="text-sm/6 font-semibold text-indigo-600"
                          >
                            Learn more <span aria-hidden="true">→</span>
                          </a>
                        </p>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
