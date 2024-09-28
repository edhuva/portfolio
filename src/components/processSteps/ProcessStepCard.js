import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const ProcessStepCard = ({icon, title, subTitle, parag}) => {
  return (
    <motion.div variants={fadeIn("up", 0.1)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: false, amount: 0.7}}  className=' shadow-md flex flex-col w-64 items-center hover:border-3 hover:border-red-900 rounded-2xl  hover:shadow-lg '>
        <div className='flex justify-center h-38 w-64  items-center   text-6xl text-gray-500 pt-16'>
          <FontAwesomeIcon icon={icon} className=''/>
        </div>
        <div className='flex flex-col justify-center items-center px-2 py-5'>
          <h3 className='font-bold text-gray-600 text-2xl py-2'>{title}</h3>
          <div className='flex flex-col text-center justify-center text-sm'>
            <div className='flex justify-center gap-2 py-2 '>
              <p className='text-gray-600 text-md font-bold'>{subTitle}</p>
            </div>
            <p  className='text-gray-600 '>{parag}</p>
          </div>
        </div>
      </motion.div>
  )
}

export default ProcessStepCard
