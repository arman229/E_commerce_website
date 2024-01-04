'use client'
import {FaFacebookF} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import Link from "next/link";
import azeinth from '@/assets/images/azeinthlogo.png'
import Image from 'next/image';
const Footer = () => {
    const customstyle = {

        borderRadius: '10px',
        cursor: ' pointer',
        padding: '10px 12px',
        backgroundColor: '#F1F1F1'

    }
    return (


    <div>

            <footer className=" pt-8 mt-4 px-4  ">
                <div className=" ">
                     <div className="  grid grid-cols-12 justify-between gap-y-8 ">
                    <div className="  col-span-12  sm:col-span-5 lg:col-span-4 ">
                        <div className='     flex   gap-4 flex-col justify-around h-full  '>
                           <div  > <Image src={azeinth} className=" lg:h-30 md:h-24 lg:w-auto  h-16  w-32 h-full w-auto" alt="Flowbite Logo"/>

                               </div>
                            <p>Small, artisan label that offers a thoughtfully curated collection of high quality
                                everyday essentials made.</p>
                            <div className={'flex gap-2'}>
                                <div style={customstyle}><FaTwitter/></div>
                                <div style={customstyle}><FaFacebookF/></div>
                                <div style={customstyle}><FaLinkedinIn/></div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-3  sm:col-span-7 lg:col-span-7  col-span-12 lg:col-start-7">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Company</h2>
                            <ul className="text-gray-600 ">
                                <li className="mb-4">
                                    <Link href="/#" className="hover:underline">About</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/#" className="hover:underline">Terms of Use </Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/#" className="hover:underline"> Privacy Policy</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/#" className="hover:underline"> How it Works</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/#" className="hover:underline"> Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase  ">Support</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <Link href="/#" className="hover:underline">Support Carrier </Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/#" className="hover:underline"> 24h Service</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/#" className="hover:underline">Quick Chat </Link>
                                </li>

                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <Link href="/#" className="hover:underline">Whatsapp </Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/#" className="hover:underline"> Support 24h</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                    <hr className="  border-gray-400 sm:mx-auto  "/>
                    <div className={'flex  justify-between gap-3 flex-wrap p-3  '}>
                        <p>Copyright © 2024 Zenith Market</p>
                        <p>Design by. <span className={'font-bold'
                        }>Arman Ashraf</span></p>
                        <p>Code by. <Link href={'https://github.com/arman229/E_commerce_website.git'} className={' hover:underline font-bold'
                        }>arman229  on github </Link></p>
                    </div>
                </div>
            </footer>

        </div>
    )
}
export default Footer
