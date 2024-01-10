'use client'
import Image from 'next/image';
import Link from 'next/link';
import wesitelogo from '@/assets/images/mylogo.jpg';
import {FiShoppingCart} from 'react-icons/fi';
import {usePathname} from "next/navigation";
import {Input} from "@/components/ui/input";
import { Navbar} from 'flowbite-react';
 import {useEffect,useState} from 'react'

export const MyNavbar = () => {
    const pathname = usePathname()
   

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 770);

    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 770);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    const hoverClass = isSmallScreen ? 'hover:bg-gray-300 py-2 px-1' : 'hover:border-b-2 border-black text-base ';
    
    return (
        <>

            <Navbar fluid rounded className={'  px-2 font-bold border-b-2  sm:mt-4   '}>
                <Link href={'/'}>
                    <Image src={wesitelogo}  className='w-40' alt={'image not shows'}/>
                </Link>
                <div className="flex md:order-2">
                    <Link
                        className={`relative items-center  bg-gray-200 hover:bg-gray-300 p-3 mr-2 rounded-full ${pathname === '/addtocart' ? 'bg-gray-400' : ''}`}
                        href={'/addtocart'}>
                        <FiShoppingCart size={24}/>
                        <div
                        className="absolute inline-flex items-center justify-center w-5 h-5 text-xs  text-white bg-red-500   rounded-full -top-1 -end-1 ">
                       0
                    </div>
                    
                    </Link>
                    <Navbar.Toggle/>
                </div>
                <Navbar.Collapse  > 
                <Link
    href="/category/female"
    className={`${hoverClass} ${pathname === '/category/female' ? 'md:border-b-2 sm:bg-white bg-gray-200 border-black' : ''}`}
  >
    Female
  </Link>
                    <Link href="/category/male" className={`   ${hoverClass} ${pathname === '/category/male' ? 'md:border-b-2 sm:bg-white bg-gray-200 border-black' : ''}`}>
                        Male
                    </Link>
                    <Link href="/category/kids" className={`${hoverClass} ${pathname === '/category/kids' ? 'md:border-b-2 sm:bg-white bg-gray-200 border-black' : ''}`}>
                        Kids
                    </Link>
                    <Link href="/category/sports" className={`${hoverClass} ${pathname === '/category/sports' ? 'md:border-b-2 sm:bg-white bg-gray-200  border-black' : ''}`}>
                        Sports
                    </Link>
                    <Link href="/category/products" className={`${hoverClass} ${pathname === '/category/products' ? 'md:border-b-2 sm:bg-white bg-gray-200  border-black' : ''}`}>
                        All Products
                    </Link>
                </Navbar.Collapse>
                <div className={'lg:block hidden'}>
                    <Input style={{width: '400px'}} showSearchIcon/>
                </div>
            </Navbar>


        </>
    );
};
