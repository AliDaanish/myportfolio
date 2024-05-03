import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from '../styles'
import { SectionWrapper } from './hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from "../utils/motion"


const ProjectCard = ({ index, iconLink, name, description, tags, image, source_code_link }) => {
  return(
    <motion.div
      variants={fadeIn("up", "Spring", index * 0.5)}
    >
      <Tilt
        option={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-contain rounded-2xl" 
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open (source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img 
                  src={iconLink} 
                  alt="iconLink" 
                  className="w-3/4 h-3/4 object-contain" 
                />
              </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name}
            className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> Featured Work </p>
        <h2 className={styles.sectionHeadText}> Products.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following product showcases my skills and experience through real-world examples of my work. Each project is briefly described with links of URL, code repositories or Figma page. In Product Design I get to solve problem by blending art and technologie to create <i>"Digital experiences"</i> that inform, entertain and inspire. And I am providing you to develop Front End responsive and seamless website in ReactJS and ThreeJS library with TailwindCSS Framework. 
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'Work') 