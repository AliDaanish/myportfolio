import { motion } from 'framer-motion'
import { styles } from '../styles'
import { IphoneCanvas } from './canvas'
import { pp } from '../assets'


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 lg:top-[120px] top-[60px] max-w-7xl mx-auto flex flex-row items-start gap-10`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <img src={pp} alt="pp" className='border-2 border-[#915eff] border-solid stroke-2 w-48 h-[84px] rounded-full object-cover'/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} flex`}>
            Hi, I'm &nbsp;
            <span className="text-[#915eff] flex">
              Ali &nbsp;
              
            </span>
            
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          <span className="text-[#915eff]">Ali</span> is an Innovative Product Designer and Front End Developer. He can provide you with Modern UI, and also develop 3D visual for Mobile Apps or Web Apps.
          </p>
        </div>
      </div>

        <IphoneCanvas />

        <div className="absolute xs:bottom-4 bottom-10 w-full flex justify-center items-center">
          <a href='#about'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div 
                animate={{
                  y: [0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat:Infinity,
                  repeatType: 'loop'
                }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
        </div>
    </section>
  )
}

export default Hero