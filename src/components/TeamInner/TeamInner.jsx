import TeamInnerCard from './TeamInnerCard'
import {
  FaArrowRightLong,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from 'react-icons/fa6'
import { IoShareSocialOutline } from 'react-icons/io5'
import { GoArrowRight } from 'react-icons/go'
import Link from 'next/link'
const teamData = [
  {
    id: 1,
    teamThumb: '/geo.png',
    teamTitle: 'Geo Cherukattu Thomas',
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: 'CEO & Founder',
    teamShareIcon: <IoShareSocialOutline />,
  },
  {
    id: 2,
    teamThumb: '/geo.png',
    teamTitle: 'Geo Cherukattu Thomas',
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: 'Co Founder',
    teamShareIcon: <IoShareSocialOutline />,
  },
  {
    id: 3,
    teamThumb: '/geo.png',
    teamTitle: 'Geo Cherukattu Thomas',
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: 'IT Expert',
    teamShareIcon: <IoShareSocialOutline />,
  },
  {
    id: 4,
    teamThumb: '/geo.png',
    teamTitle: 'Geo Cherukattu Thomas',
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: 'Hr. Maneger',
    teamShareIcon: <IoShareSocialOutline />,
  },
]

const TeamInner = () => {
  return (
    <>
      {/* <BreadCrumb
        breadCrumbTitle={'Team Member'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Team Member'}
      /> */}
      ;
      <section className="bg-[url('/images/team-bg.jpg')] bg-no-repeat bg-cover bg-center py-28 relative">
        <div className="Containe max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:gap-0 lg:grid-cols-2 lg:items-center p-8">
            <div>
              <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0">
                Dedicated Team
              </h5>
              <h1 className="font-anton font-bold text-xl leading-7 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[18px]">
                Meet Our Dedicated Member <br />
                For Any Enquery
              </h1>
            </div>
            <div className="flex lg:justify-end">
              <Link href={'/about'}>
                <button className="primary-btn">
                  {`All Member`}
                  <GoArrowRight size={'22'} />
                </button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-[50px] mt-[52px]">
            {teamData.map(
              ({
                id,
                teamThumb,
                teamTitle,
                socialIcon,
                socialIcon2,
                socialIcon3,
                socialIcon4,
                teamDesc,
                teamShareIcon,
              }) => {
                return (
                  <div key={id}>
                    <TeamInnerCard
                      teamThumb={teamThumb}
                      teamTitle={teamTitle}
                      socialIcon={socialIcon}
                      socialIcon2={socialIcon2}
                      socialIcon3={socialIcon3}
                      socialIcon4={socialIcon4}
                      teamDesc={teamDesc}
                      teamShareIcon={teamShareIcon}
                    />
                  </div>
                )
              },
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default TeamInner
