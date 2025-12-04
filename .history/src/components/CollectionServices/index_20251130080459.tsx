'use client'

import { ServiceCard, CardServiceData } from '@/components/ServiceCard'
const CardServiceData = []
export type Props = {
  posts: CardServiceData[]
}

export const CollectionServices: React.FC<Props> = (props) => {
  const { posts } = props

  return (
    <div className="codenik">
      <div className="row">
        {posts?.map((result, index) => {
          if (typeof result === 'object' && result !== null) {
            return (
              <div className="col-lg-3 col-md-6" key={index}>
                {/* <ServiceCard doc={result} relationTo="services" /> */}
              </div>
            )
          }

          return null
        })}
      </div>
    </div>
  )
}
