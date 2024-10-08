import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { NavLink, Link } from 'react-router-dom';
import { PulseLoader } from 'react-spinners'
import { FaMedal } from 'react-icons/fa';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { toast } from 'react-toastify';
import { subscribe } from '../utils/Utils'
import Notify from './notify/Notify';

//input regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const Footer = () => {

    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email))
    }, [email])

    useEffect(() => {
        if (isSuccess) {
            setEmail('')
            toast('✅ Successfuly Subcribed Email!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                color: "blue"
              });
        }
        return () => toast()
    }, [isSuccess])

    useEffect(() => {
        if (error) {
            setEmail('')
            toast(`😟 ${error}❗`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                color: "blue"
              });
        }
        return () => toast()
    }, [error])

    const handleEmailInput = e => setEmail(e.target.value)

    const canSave = [email].every(Boolean) && !loading

    const handleSubscribe = async () => {
        setError(null)
        setLoading(true)
        setIsSuccess(false)
        try {
            await subscribe({email, validEmail})
            setLoading(false)
            setIsSuccess(true)
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
     
    }

    let contentloading;
    contentloading = loading && <PulseLoader color="#81AFDD" style={{margin: '0em 0em 0em 5em'}} />;

    const created = new Date().toLocaleString('en-SA', { year: 'numeric' });

  return (
    <>
        {contentloading}
        <Notify/>

        <footer className='hidden flex-col lg:block border-t-1 bg-gray-50 px-36 pt-32 rounded'>
         <div className='flex justify-between'>
            <motion.div variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}   className='flex justify-between w-30 h-12 text-zomatoCol-400 '>
                <h2 className='text-blue-400 text-4xl font-bold'>MealMover</h2>
                <FaMedal />
            </motion.div>
            <div className='bg-red-600 flex rounded-md'>
                <form className='bg-gray-100 flex justify-center flex-wrap  text-lg items-center text-gray-600' onSubmit={(e) => e.preventDefault()}>
                    <FontAwesomeIcon className='text-5xl ' icon={faEnvelope} />
                    <label  className='hover:shadow-md' htmlFor='email'>
                        <input className='py-1 px-3 border-2 w-96' id='email' name='email' type='text' autoComplete='off' placeholder='email' value={email} onChange={handleEmailInput} />
                    </label>
                    <button type='button' className= {`font-bold  rounded-md border-2 p-1 hover:shadow-md bg-white  ${canSave ? 'bg-zomatoCol-500 text-white' : 'text-gray-300'}`} title='Subscribe' disabled={!canSave} onClick={handleSubscribe}>SUBSCRIBE</button>
                </form>
            </div>
        </div>

        <div className='flex mt-12 text-gray-500'>
            <div className=' flex-1 pl-1'>
                <h4 className='font-bold py-2.5'>Our Details</h4>
                <address className='py-2 text-sm'>
                    MealMover<br />
                    169 Feni Street, NU 10 Motherwell<br />
                    PortElizabeth, 6211<br />
                    Call: <a className='hover:bg-gray-200' href='tel:+27628493704'>+2762 849 3704</a><br />
                    Email: mealmover@gmal.com 
                </address>
            </div>

                <div className='flex-1  justify-center'>
                    <h4 className='font-bold py-2.5 '>Service</h4>
                    <ul className='text-sm'>
                        <li className='pb-2.5 hover:bg-gray-200'>
                            <NavLink to='#'><i className='pr-1 text-blue-400'><FontAwesomeIcon icon={faAngleRight} /></i>SiteMap</NavLink>
                        </li>

                        <li className='pb-2.5 hover:bg-gray-200'>
                            <Link to='#'><i className='pr-1 text-blue-400'><FontAwesomeIcon icon={faAngleRight} /></i>Support</Link>
                        </li>
                        <li className='pb-2.5 hover:bg-gray-200'> 
                            <Link to='#'><i className='pr-1 text-blue-400'><FontAwesomeIcon icon={faAngleRight} /></i>Report Fraud</Link>
                        </li>
                        <li className='hover:bg-gray-200'>
                            <Link to='#'><i className='pr-1 text-blue-400'><FontAwesomeIcon icon={faAngleRight} /></i>Work With Us</Link>
                        </li>
                    </ul>
                </div>

                <div className='flex-1 justify-center flex-col'>
                    <h4 className='font-bold py-2.5 '>Company</h4>
                    <ul className='text-sm'>
                        <li className='pb-2.5 hover:bg-gray-200'>
                            <Link to='#'><i className='pr-1 text-blue-400'><FontAwesomeIcon icon={faAngleRight} /></i>About Us</Link>
                        </li>

                        <li className='pb-2.5 hover:bg-gray-200'>
                            <Link to='#'><i className='pr-1 text-blue-400'><FontAwesomeIcon icon={faAngleRight} /></i>Contact Us</Link>
                        </li>

                        <li className='pb-2.5 hover:bg-gray-200'>
                        <Link to='#'><i className='pr-1 text-blue-400'><FontAwesomeIcon icon={faAngleRight} /></i>Terms & Conditions</Link> 
                        </li>

                        <li className='  hover:bg-gray-200'>
                            <Link to='#'><i className='pr-1 text-blue-400'><FontAwesomeIcon icon={faAngleRight} /></i>Privacy Policy</Link>
                        </li>
                    </ul>
                </div>

                <div className='flex-1 justify-center flex-col'>
                    <h4 className='font-bold py-2.5 '>Follow Us</h4>
                    <ul className='text-sm'>
                        <li className='pb-2.5  hover:bg-gray-200'>
                            <Link to='#'><i className='pr-1 text-blue-500' ><FontAwesomeIcon icon={faFacebook} /></i>facebook</Link>
                        </li >

                        <li className='pb-2.5 hover:bg-gray-200'>
                            <Link to='#'><i className='pr-1 text-blue-500'><FontAwesomeIcon icon={faTwitter} /></i>twitter</Link>
                        </li >

                        <li className='pb-2.5 hover:bg-gray-200'>
                            <Link to='#'><i className='pr-1 text-blue-500'><FontAwesomeIcon icon={faInstagram} /></i>instagram</Link>
                        </li >

                        <li className=' hover:bg-gray-200'>
                            <Link to='#'><i className='pr-1 text-blue-500'><FontAwesomeIcon icon={faLinkedin} /></i>linkedin</Link>
                        </li >
                    </ul>
                </div>
        </div>

        <div>
            <div className='flex justify-center text-sm mt-24 pb-14 text-gray-500'>
                <p>@ {created} MealMover®, All rights reserved</p>
            </div>
        </div>
    </footer>
    </>
  )
    
}

export default Footer
