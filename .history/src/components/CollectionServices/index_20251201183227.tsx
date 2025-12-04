'use client'
const features = [
  {
    name: 'Unlimited inboxes',
    description:
      'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
    href: '#',
  },
  {
    name: 'Manage team members',
    description:
      'Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.',
    href: '#',
  },
  {
    name: 'Spam report',
    description:
      'Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.',
    href: '#',
  },
]

export const CollectionServices: React.FC = (props) => {
  return (
    <div className="codenik">
      <div className="row">
        <div className="col-lg-3 col-md-6" key="">
          <div className="relative  sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto w-full">
                <h2 className="text-4xl font-anton tracking-tight text-pretty text-white sm:text-5xl">
                  Why BADER TECH U.A.E ?
                </h2>
                <p className="mt-6 text-lg/8 text-gray-600 ">
                  Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum
                  cupiditate veritatis in accusamus quisquam.
                </p>
              </div>
              <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                  {features.map((feature) => (
                    <div key={feature.name} className="flex flex-col shadow-2xl p-6">
                      <dt className="text-base/7 font-semibold text-gray-900">
                        {/* <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                          <feature.icon aria-hidden="true" className="size-6 text-white" />
                        </div> */}
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
