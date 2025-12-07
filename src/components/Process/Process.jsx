/* eslint-disable no-unused-vars */
import ProcessCard from './ProcessCard'

const processData = [
  {
    id: 1,
    processImg: '/process/initial.png',
    boxNumber1: '01',
    boxShape: '/process/process3-shape.png',
    processTitle: 'Initial Consultation',
    processDesc:
      'We begin with a detailed discussion to understand your shade requirements, site conditions, and design preferences.Whether you need car parking shades, walkway canopies, tensile fabric structures, or custom architectural shading—we gather all necessary details to plan your project effectively.',
  },

  {
    id: 2,
    processImg: '/process/site.png',
    boxNumber1: '02',
    boxShape: '/process/process3-shape2.png',
    processTitle: 'Site Visit & Assessment',
    processDesc:
      'Our engineering team visits your location to evaluate Site measurements Soil and foundation conditionsSun direction and shading needs  Structural constraints This helps us recommend the best design and material options.',
  },
  {
    id: 3,
    processImg: '/process/design.png',
    boxNumber1: '03',
    processTitle: 'Concept & Design Development',
    processDesc:
      'Based on the consultation and site survey, we prepare 2D/3D design concepts  Engineering drawings Material specifications Color and fabric options We ensure the design is both functional and visually appealing while meeting U.A.E weather standards.',
  },
  {
    id: 4,
    processImg: '/process/quote.png',
    boxNumber1: '04',
    boxShape: '/process/process3-shape.png',
    processTitle: 'Quotation & Approval',
    processDesc:
      'We provide a clear and competitive quotation that includes Project scope Material details Fabrication timeline Installation pla Once approved, we proceed to the next stage.',
  },
  {
    id: 5,
    processImg: '/process/fabric.png',
    boxNumber1: '05',
    boxShape: '/process/process3-shape2.png',
    processTitle: 'Fabrication & Preparation',
    processDesc:
      'Our skilled team begins the fabrication process using high-quality materials such as HDPE fabric PVC/PVDF tensile membrane Galvanized or powder-coated steel structures  All components are manufactured with precision to ensure safety, durability, and long-term performance.',
  },
  {
    id: 6,
    processImg: '/process/install.png',
    boxNumber1: '05',
    processTitle: 'Installation & Execution',
    processDesc:
      'Our installation team ensures Safe and efficient assembly  Accurate tensioning of tensile fabric Strong foundations and secure connections  Compliance with engineering and safety standard  We work with minimal disruption to your site.',
  },
]

const Process = () => {
  return (
    <section className="pb-10 relative bg-SecondaryColor-0 z-10 mt-32">
      <div className="Container">
        <div className="text-center">
          {/* <h3 className="font-anton text-2xl font-bold text-blue-600">Working Process</h3> */}
          <h1 className="font-anton font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-black mt-[18px]">
            We Follow the Easy Working Steps
          </h1>
        </div>
        <div className="pb-16 mt-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10">
            {processData.map(
              ({ id, processImg, boxNumber1, processTitle, boxShape, processDesc }) => {
                return (
                  <div key={id}>
                    <ProcessCard
                      processImg={processImg}
                      boxNumber1={boxNumber1}
                      boxShape={boxShape}
                      processTitle={processTitle}
                      processDesc={processDesc}
                    />
                  </div>
                )
              },
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
