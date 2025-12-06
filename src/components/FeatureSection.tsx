'use client'
import Link from 'next/link'
import aboutIcon from '/images/about-icon1.png'
import aboutIcon2 from '/images/about-icon2.png'
import aboutIcon3 from '/images/about-icon3.png'
import aboutIcon4 from '/images/about-icon4.png'
import aboutShape from '/images/about-shape.png'
import aboutShape2 from '/images/about-shape2.png'

import CountUp from 'react-countup'
import { GoArrowRight } from 'react-icons/go'

const FeatureSection = () => {
  return (
    <section className="mt-32 bg-BodyBg-0 bg-no-repeat bg-center bg-cover relative p-8">
      <div className="Container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-10 2xl:gap-[92px] items-center">
          <div className="relative z-10">
            <img src="/bader.png" draggable="false" />
            <div className="absolute top-0 left-0">
              <div className="bg-blue-500 pb-6 pt-5 flex flex-col justify-between overflow-hidden rounded-lg h-[117px] sm:h-[208px] lg:h-[180px] xl:h-[208px] w-[92px] sm:w-[170px] lg:w-[140px] xl:w-[170px] items-center text-center relative z-10 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:w-0 sm:before:w-8 before:h-[2px] before:bg-white after:absolute after:-top-14 after:-left-[2px] after:w-0 sm:after:w-[174px] after:h-[170px] after:bg-[#1164ED] after:-z-10 after:rounded-full">
                <CountUp
                  start={-9}
                  end={22}
                  suffix="+"
                  className="text-3xl sm:text-[56px] font-Rajdhani font-bold text-white"
                />
                <h6 className="font-Rajdhani text-sm leading-4 sm:text-lg sm:leading-5 font-semibold text-white">
                  Years Of <br /> Experiences
                </h6>
              </div>
            </div>
            <img
              src="/about-shape.png"
              draggable="false"
              className="absolute bottom-6 right-10 -z-10 animate-movebtn hidden sm:block"
            />
          </div>
          <div className="relative">
            <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0">
              Steel structure fabrication & erection
            </h5>
            <h1 className="font-anton font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[18px] mb-3">
              Building Strong <br />
              Foundations for Every Project
            </h1>
            <p className="font-Nunito text-TextColor2-0 pb-9 border-b border-BorderColor2-0 relative before:absolute before:left-0 before:-bottom-px before:w-[50px] before:h-px before:bg-blue-500 before:animate-dance4">
              BaderTech is a trusted name in steel structures, civil construction, and industrial
              engineering works in both the UAE and India. With years of hands-on experience,
              advanced technical expertise, and a commitment to quality, we deliver structural
              solutions that meet international safety and engineering standards.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-[30px] my-10">
              <div className="flex gap-5 items-center">
                <div className="w-[70px] h-[70px] rounded bg-white flex justify-center items-center">
                  <img src="/about-icon1.png" draggable="false" />
                </div>
                <div className="flex-1">
                  <h5 className="font-Rajdhani font-semibold text-[22px] lg:text-base xl:text-xl 2xl:text-[22px] text-HeadingColor-0">
                    100% Money Back Gaurentee
                  </h5>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <div className="w-[70px] h-[70px] rounded bg-white flex justify-center items-center">
                  <img src="about-icon2.png" draggable="false" />
                </div>
                <div className="flex-1">
                  <h5 className="font-Rajdhani font-semibold text-[22px] lg:text-base xl:text-xl 2xl:text-[22px] text-HeadingColor-0">
                    Expert & Dedicated Team Members
                  </h5>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <div className="w-[70px] h-[70px] rounded bg-white flex justify-center items-center">
                  <img src="about-icon3.png" draggable="false" />
                </div>
                <div className="flex-1">
                  <h5 className="font-Rajdhani font-semibold text-[22px] lg:text-base xl:text-xl 2xl:text-[22px] text-HeadingColor-0">
                    24/7 Free Tehcnical Supports
                  </h5>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <div className="w-[70px] h-[70px] rounded bg-white flex justify-center items-center">
                  <img src="about-icon4.png" draggable="false" />
                </div>
                <div className="flex-1">
                  <h5 className="font-Rajdhani font-semibold text-[22px] lg:text-base xl:text-xl 2xl:text-[22px] text-HeadingColor-0">
                    100% Customers Satisfaction
                  </h5>
                </div>
              </div>
            </div>
            {/* <Link href={'/about'}>
              <button className="primary-btn">
                {`Discover More`}
                <GoArrowRight size={'22'} />
              </button>
            </Link>
            <img
              src="/about-shape2.png"
              draggable="false"
              className="absolute bottom-0 left-1/2 animate-swing hidden sm:block"
            /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
