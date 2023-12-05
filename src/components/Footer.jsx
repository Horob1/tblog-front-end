import React from 'react'
import {FaFacebook, FaYoutube, FaInstagram, FaGithub, FaTwitter, FaTwitch} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-[#02044A] text-gray-300 py-8 px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 '>
            <div>
                <h6 className='font-bold uppercase py-2'>
                    Solutions
                </h6>
                <ol>
                    <li className='py-1'>Travel</li>
                    <li className='py-1'>Anniversary</li>
                    <li className='py-1'>Daily Day</li>
                </ol>
            </div>

            <div>
                <h6 className='font-bold uppercase py-2'>
                    Solutions
                </h6>
                <ol>
                    <li className='py-1'>Travel</li>
                    <li className='py-1'>Anniversary</li>
                    <li className='py-1'>Daily Day</li>
                </ol>
            </div>
            <div>
                <h6 className='font-bold uppercase py-2'>
                    Solutions
                </h6>
                <ol>
                    <li className='py-1'>Travel</li>
                    <li className='py-1'>Anniversary</li>
                    <li className='py-1'>Daily Day</li>
                </ol>
            </div>
            <div>
                <h6 className='font-bold uppercase py-2'>
                    Solutions
                </h6>
                <ol>
                    <li className='py-1'>Travel</li>
                    <li className='py-1'>Anniversary</li>
                    <li className='py-1'>Daily Day</li>
                </ol>
            </div>

            <div className='col-span-2 pt-2 md:pt-2'>
                <p className='font-bold uppercase'>Subscribe To Our Newsleeter</p>
                <p>The later news, articles and resources sent to your inbox weekly.</p>
                <form className='flex flex-col sm:flex-row' action="">
                    <input className='w-full p-2 mr-4 rounded-md mb-2' type="email" placeholder='Enter your email'/>
                    <button className='p-2 mb-2 bg-[#00B86E]'>Subscribe</button>
                </form>
            </div>

            

        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500'>
            <p>2023 T Blogs, LLC. All rights reserved.</p>
            <div className='flex justify-between sm:w-[300px] pt-4 text-2x1'>
                <FaFacebook/>
                <FaYoutube/>
                <FaInstagram/>
                <FaGithub/>
                <FaTwitch/>
                <FaTwitter/>

            </div>
        </div>
    </div>
  )
}

export default Footer