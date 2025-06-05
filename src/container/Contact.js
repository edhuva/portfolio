import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { Link } from 'react-router-dom'
import { PulseLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import { sendContact } from '../utils/Utils'
import Notify from '../components/notify/Notify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSatelliteDish } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'

// Input validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const NAME_REGEX = /^[A-z ]{3,24}$/

const Contact = () => {
  const [name, setName] = useState('')
  const [validName, setValidName] = useState(false)
  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(false)
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setValidName(NAME_REGEX.test(name))
  }, [name])

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email))
  }, [email])

  useEffect(() => {
    if (isSuccess) {
      setName('')
      setEmail('')
      setMessage('')
      toast.success('✅ Successfully Sent!', {
        position: 'top-right',
        autoClose: 4000,
        theme: 'light',
      })
    }
  }, [isSuccess])

  useEffect(() => {
    if (error) {
      toast.error(`😟 ${error} ❗`, {
        position: 'top-right',
        autoClose: 4000,
        theme: 'light',
      })
    }
  }, [error])

  const handleSubmitContact = async () => {
    // Prevent invalid form submissions
    if (!validName || !validEmail || message.trim().length === 0) {
      toast.warn('Please fill out all fields correctly.', {
        position: 'top-right',
        autoClose: 3000,
      })
      return
    }

    setError('')
    setIsSuccess(false)
    setIsLoading(true)

    try {
      await sendContact({ name, email, message })
      setIsSuccess(true)
    } catch (e) {
      setError(e.message || 'Something went wrong.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className='flex flex-col mx-2 lg:mx-28' id='contact'>
        <Notify />

        <div className='hidden md:block'>
          <motion.h2
            variants={fadeIn('left', 0.8)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='font-bold md:text-5xl lg:text-6xl tracking-wide text-center lg:mb-14'
          >
            Contact
          </motion.h2>
        </div>

        <div className='md:hidden'>
          <h2 className='font-bold text-4xl tracking-wide text-center'>Contact</h2>
        </div>

        <div className='flex flex-col justify-center mt-9 md:mt-1 mb-20 md:mb-36'>
          <div className='flex flex-col md:flex-row'>
            <div>
              <div className='hidden md:flex justify-center'>
                <motion.h1
                  variants={fadeIn('right', 0.8)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.7 }}
                  className='md:text-5xl md:pt-1 lg:text-6xl mt-14 md:mb-10 flex font-bold shadow-xl tracking-wider welcome-h2-text'
                >
                  Get in touch <span className='pl-4'><FontAwesomeIcon icon={faSatelliteDish} /></span>
                </motion.h1>
              </div>
              <div className='md:hidden flex justify-center'>
                <h1 className='text-3xl pt-8 mb-6 flex font-bold shadow-xl tracking-wider welcome-h2-text'>
                  Get in touch <span className='pl-4'><FontAwesomeIcon icon={faSatelliteDish} /></span>
                </h1>
              </div>
              <div>
                <h3 className='text-2xl lg:text-4xl font-semibold tracking-wider text-center px-1 md:px-5 lg:px-10 py-2 md:py-6'>
                  Have any questions?
                </h3>
                <h3 className='text-xl md:text-2xl font-semibold tracking-wider text-center px-1 md:px-5 lg:px-10'>
                  Shoot me an email or find me around my socials.
                </h3>
              </div>

              <div className='flex mt-10 mb-4 justify-center gap-4 text-md md:text-xl'>
                <div className='flex gap-6 text-3xl'>
                  <Link to='https://github.com/edhuva' className='hover:text-blue-500 dark:hover:text-blue-500'>
                    <FontAwesomeIcon icon={faGithub} />
                  </Link>
                  <Link to='https://x.com/EdwinMatema' className='hover:text-blue-500 dark:hover:text-blue-500'>
                    <FontAwesomeIcon icon={faXTwitter} />
                  </Link>
                  <Link to='https://www.linkedin.com/in/edwin-matema-68101516a' className='hover:text-blue-500 dark:hover:text-blue-500'>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                </div>
              </div>
            </div>

            <div className='flex flex-1 flex-col justify-center mt-10 md:p-3'>
              <form
                className='flex max-w-md flex-col items-center justify-center md:mx-2 lg:mx-10 pb-3 md:py-8 md:px-8 border border-gray-100 shadow-lg dark:border-white rounded-lg'
                onSubmit={(e) => e.preventDefault()}
              >
                {isLoading && (
                  <div className='flex justify-center my-3'>
                    <PulseLoader color='#81AFDD' />
                  </div>
                )}

                <label htmlFor='name' className='w-full my-2'>
                  <input
                    id='name'
                    name='name'
                    autoComplete='off'
                    placeholder='Name'
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='w-full px-3 py-2 border-2 rounded-md text-xl dark:text-gray-500'
                  />
                </label>

                <label htmlFor='email' className='w-full my-2'>
                  <input
                    id='email'
                    name='email'
                    autoComplete='off'
                    placeholder='Email'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full px-3 py-2 border-2 rounded-md text-xl dark:text-gray-500'
                  />
                </label>

                <label htmlFor='message' className='w-full my-2'>
                  <textarea
                    id='message'
                    name='message'
                    placeholder='Message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className='w-full px-3 py-2 border-2 rounded-md text-xl h-40 dark:text-gray-500'
                  />
                </label>

                <button
                  disabled={isLoading}
                  onClick={handleSubmitContact}
                  className={`w-full mt-4 py-2 rounded-full text-xl font-semibold ${
                    isLoading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-black text-white hover:text-blue-500 dark:bg-white dark:text-gray-800 dark:hover:text-blue-500'
                  }`}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact



// import React, { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'
// import { fadeIn } from '../variants'
// import { Link } from 'react-router-dom'
// import { PulseLoader } from 'react-spinners'
// import { toast } from 'react-toastify';
// import { sendContact } from '../utils/Utils'
// import Notify from '../components/notify/Notify';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSatelliteDish } from '@fortawesome/free-solid-svg-icons';
// import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

// //input regex
// const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// const NAME_REGEX = /^[A-z ]{3,24}$/
// const Contact = () => {

//   const [name, setName] = useState('');
//   const [validName, setValidName] = useState(false)
//   const [email, setEmail] = useState('');
//   const [validEmail, setValidEmail] = useState(false)
//   const [message, setMessage] = useState('')
//   const [isLoading, setIsLoading] = useState(false)
//   const [isSuccess, setIsSuccess] = useState(false)
//   const [error, setError] = useState('')

//   useEffect(() => {
//     setValidName(NAME_REGEX.test(name))
//   }, [name])

//   useEffect(() => {
//     setValidEmail(EMAIL_REGEX.test(email))
//   }, [email])

//   useEffect(() => {
//     if (isSuccess) {
//         setName('')
//         setEmail('')
//         setMessage('')
//         toast('✅ Successfuly Sent!', {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "light",
//             color: "blue"
//           });
//     }
//     return () => toast()
// }, [isSuccess])

// useEffect(() => {
//   if (error) {
//       setName('')
//       setEmail('')
//       setMessage('')
//       toast(`😟 ${error} ❗`, {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//           color: "blue"
//         });
//   }
//   return () => toast()
// }, [error])

//   const handleNameInput = e => setName(e.target.value)
//   const handleEmailInput = e => setEmail(e.target.value)
//   const handleMessageInput = e => setMessage(e.target.value)

//   // const canSave = [validName, validEmail, message].every(Boolean)

//   let contentloading;
//     contentloading = isLoading && <PulseLoader color="#81AFDD" style={{margin: '0em 0em 0em 5em'}} />;


//   const handleSubmitContact = async () => {
//       setError(null)
//       setIsLoading(true)
//       setIsSuccess(false)
//       try {
//         await sendContact({validName, name, validEmail, email, message})
//         setIsLoading(false)
//         setIsSuccess(true)
//       } catch (e) {
//         setIsLoading(false)
//         setError(e.message)
//       }

//   }


//   return (
//     <>
      

//       <div className='flex flex-col  mx-2 lg:mx-28' id ="contact">
//         <Notify/>
//         <div className='hidden md:block '>
//         <motion.h2 variants={fadeIn("left", 0.8)}
//               initial="hidden"
//               whileInView={"show"}
//               viewport={{once: false, amount: 0.7}} className='font-bold md:text-5xl lg:text-6xl tracking-wide text-center lg:mb-14'>Contact</motion.h2>
//         </div>

//         <div className='md:hidden'>
//           <h2 className='font-bold text-4xl  tracking-wide text-center'>Contact</h2>
//         </div>

//         <div className=' flex flex-col justify-center mt-9 md:mt-1 mb-20 md:mb-36'>

//           <div className='flex flex-col md:flex-row '>
//             <div>
//               <div className='hidden md:flex justify-center '> 
//                 <motion.h1 variants={fadeIn("right", 0.8)}
//                   initial="hidden"
//                   whileInView={"show"}
//                   viewport={{once: false, amount: 0.7}}  className='md:text-5xl md:pt-1 lg:text-6xl mt-14 md:mb-10 flex font-bold shadow-xl tracking-wider welcome-h2-text'>Get in touch<span className='pl-4'><FontAwesomeIcon icon={faSatelliteDish}/></span></motion.h1>
//               </div>
//               <div className='md:hidden flex justify-center'>
//                 <h1 className='text-3xl pt-8   mb-6  flex font-bold shadow-xl  tracking-wider welcome-h2-text'>Get in touch <span className='pl-4'><FontAwesomeIcon icon={faSatelliteDish}/></span></h1>
//               </div>
//               <div>
//                 <h3 className='text-2xl lg:text-4xl font-semibold tracking-wider text-center px-1 md:px-5 lg:px-10 py-2 md:py-6'>Have any questions?</h3>
//                 <h3 className='text-xl md:text-2xl  font-semibold tracking-wider text-center px-1 md:px-5 lg:px-10'>Shoot me an email or find me around my socials.</h3>
//               </div>
//               <div className='flex mt-10 lg:mt-10 mb-4 justify-center gap-4 text-md md:text-xl  '>
//                 <div className='flex gap-6 text-3xl'>
//                 <Link to='https://github.com/edhuva' className='hover:text-blue-500 dark:hover:text-blue-500'>
//                   <h3 ><FontAwesomeIcon icon={faGithub} /></h3>
//                 </Link>
//                 <Link to='https://x.com/EdwinMatema?t=BCvPx9aQsCyprPLTN23KIQ&s=09' className='hover:text-blue-500 dark:hover:text-blue-500'>
//                   <h3><FontAwesomeIcon icon={faXTwitter} /></h3>
//                 </Link>
//                 <Link to='https://www.Linkedin.com/in/edwin-matema-68101516a?utm_source=share&utm_campaign=sharevia&utm_content=profile&utm_medium=android_app' className='hover:text-blue-500 dark:hover:text-blue-500 '>
//                   <h3><FontAwesomeIcon icon={faLinkedin} /></h3>
//                 </Link>
//                 </div>
//               </div>
//             </div>

//             <div className='flex flex-1 flex-col justify-center mt-10 md:p-3'>
              
//               <form className='flex max-w-md flex-col flex-1 justify-center items-center md:mx-2 lg:mx-10 pb-3 md:py-8 md:px-8  border border-edCol-900 shadow-md dark:border-white rounded-md ' onSubmit={e => e.preventDefault()} >
//                 <div className='flex justify-center mt-2 md:mt-1 mb-1'>
//                   {contentloading}
//                 </div>

//                 <label htmlFor='name' className='rounded-md border border-gray-400  my-5  shadow-md'>
//                 <input id='name' name='name' autoComplete='off' placeholder='Name' type='text' value={name} onChange={handleNameInput} className='px-3 border-2 w-80 md:w-96 py-2 flex-1 text-xl rounded-md dark:text-gray-500'/>
//                 </label>
                  
//                 <label htmlFor='email' className=' my-5 rounded-md border border-gray-400 shadow-md' >
//                   <input id='email' name='email' autoComplete='off' placeholder='Email' type='text' value={email} onChange={handleEmailInput} className='px-3 border-2 w-80 md:w-96 py-2 flex-1 text-xl rounded-md dark:text-gray-500'/>
//                 </label>
//                 <label htmlFor='message' className=' my-5 rounded-md border border-gray-400 shadow-md'>
//                   <textarea id='message' name='message' autoComplete='off' placeholder='Message' type='text' value={message} onChange={handleMessageInput} className='px-3 border-2 w-80 md:w-96 py-2 flex-1 text-xl h-40 rounded-md dark:text-gray-500'/>
//                 </label>
//                 <div className='flex justify-center items-center pt-1 px-2'>
//                   <div className='flex-1 '> 
//                     <button className='text-xl w-80 py-2 px-3 rounded-full hover:border-blue-400 bg-black te hover:text-blue-500 text-white dark:bg-white dark:text-gray-800  dark:hover:text-blue-500 font-semibold' onClick={handleSubmitContact} >Send</button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>

//       </div>
//     </>
    
//   )
// }

// export default Contact
