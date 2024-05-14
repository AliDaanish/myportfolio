import { useState, useRef } from 'react'
import { motion }  from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles }  from '../styles'
import { MyLogoCanvas }  from './canvas'
import { SectionWrapper }  from './hoc'
import { slideIn }  from '../utils/motion'
import { socialContact, popDatas }  from '../constants'
import { Pop } from './Pop'


const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  
  const [popUp, setPop] = useState(false)
  const [popArray, setArray] = useState([])
  
  const [loading, setloading] = useState(false)
  
  const handleChange = (e) => {
    const { target } = e
    const { name, value} = target
    
    setForm({ 
      ...form, 
      [name]: value 
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setloading(true)

    emailjs.send(
      'service_taw4qwk',
      'template_vo8gdk9',
      {
        from_name: form.name,
        to_name: 'Ali Daanish',
        from_email: form.email,
        to_email: 'project.soldier777@gmail.com',
        message: form.message,
      },
      // 'p_-3-3vSWJVSGR611'
    )
    .then(() => {
      setloading(false)
      setPop(true)

      setArray([
        ...popArray, {
          id: popDatas[0].id, 
          icon: popDatas[0].icon, 
          first: popDatas[0].first, 
          second: popDatas[0].second
        }
      ])

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, 
    
    (error) => {
      setPop(true)
      setArray([
        ...popArray, {
          id: popDatas[1].id, 
          icon: popDatas[1].icon, 
          first: popDatas[1].first, 
          second: popDatas[1].second
        }
      ])

      setloading(false)
      console.log(error)
    })
  }

  function handleClear(){
    setArray([])
    setPop(false)
  }


  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
    >
      <p className={styles.sectionSubText}>Get in touch</p>
      <div className='flex lg:flex flex-wrap items-center justify-between'>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <span className='flex h-12 bg-white w-2'> | </span> 
        <div className="flex gap-4">
        {
          socialContact.map((sosmed) => (
              <button
                  type='toSosmed'
                  onClick={() => window.open (sosmed.url, "_blank")}
                  className='bg-tertiary w-12 h-12 p-3 flex outline-none text-white font-bold shadow-md shadow-primary rounded-lg'
                  key={sosmed.id}>
                  <img src={sosmed.icon} alt={sosmed.id} />
              </button>
          ))
        }
        </div>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-8'
      >
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>
            Your Name
          </span>
          <input 
            type='text' 
            name='name' 
            value={form.name} 
            onChange={handleChange} 
            placeholder="What's your good name?" 
            className='border-2 [.validated_&]:invalid bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            required
          />
        </label>

        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>
            Your Email
          </span>
          <input 
            type='email' 
            name='email' 
            value={form.email} 
            onChange={handleChange} 
            placeholder="What's your web address?" 
            className='peer border-2 [.validated_&]:invalid bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"

          />
          <span class="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
            Please enter a valid email address
          </span>
        </label>

        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>
            Your Message
          </span>
          <textarea 
            rows={7} 
            name='message' 
            value={form.message} 
            onChange={handleChange} 
            placeholder="What do you want to say?" 
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            required
          />
        </label>

            <button
              type='submit'
              className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
            >
              {loading ? 'Sending...' : 'send'}
            </button>
      </form>
    </motion.div>

    <motion.div
      variants={slideIn('right', "tween", 0.2, 1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
      <MyLogoCanvas />
    </motion.div>
      {
        popUp 
        && 
        <Pop props={popArray} onClose={handleClear} />
      }
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')