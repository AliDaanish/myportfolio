import { SectionWrapper } from './hoc'
import { technologies } from '../constants'

const Tech = () => {
  return (
    <>
      <h3 className='font-bold flex justify-center text-2xl tracking-widest mb-5 text-[#915EFF]'>My Tech Stack</h3>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
          {
            technologies.map((technology, index) => (
                <div className="w-28 h-28" key={index}>
                  <div className='relative h-full w-full bg-gradient-to-b from-slate-200 to-slate-400 p-4 rounded-xl shadow-inner ring-inset shadow-violet-950 ring-4 ring-[#915eff]'>
                    <img src={technology.icon} />
                  </div>
                  <p className='text-secondary w-full flex justify-center font-bold'>{technology.name}</p>
                </div>
            ))
          }
      </div>
    </>
  )
}

export default SectionWrapper(Tech)