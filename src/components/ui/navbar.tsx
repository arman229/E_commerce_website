'use client'
import { Input } from "@/components/ui/input";
import Link from "next/link";
import logo from '@/assets/images/logonavbar.jpg'
import { FiShoppingCart } from 'react-icons/fi';
import { usePathname } from "next/navigation";
import Image from 'next/image';
const Navbar = () => {
    const pathname = usePathname()
    return (
        <>
            <nav className="p-4 flex items-center justify-between">
                <Link href={"/"}>
                    <Image src={logo} alt="logo" className="w-40" />
                </Link>

                <div className="flex space-x-4">
                    <Link href="/category/female" className={`hover:border-b-2 border-black ${pathname === '/category/female' ? 'border-b-2 border-black' : ''}`}>
                         Female
                    </Link>
                    <Link href="/category/male" className={`hover:border-b-2 border-black ${pathname === '/category/male' ? 'border-b-2 border-black' : ''}`}>
                        Male
                    </Link>
                    <Link href="/category/kids" className={`hover:border-b-2 border-black ${pathname === '/category/kids' ? 'border-b-2 border-black' : ''}`}>
                        Kids
                    </Link>
                    <Link href="/category/products" className={`hover:border-b-2 border-black ${pathname === '/category/products' ? 'border-b-2 border-black' : ''}`}>
                        All Products
                    </Link>
                </div>
<div className={'lg:block hidden'}>
    <Input showSearchIcon />
</div>
                <div className="flex h-12">
                    <Link className={`relative items-center bg-gray-200 hover:bg-gray-300 p-3 mr-2 rounded-full ${pathname === '/addtocart' ? 'bg-gray-400' : ''}`} href={'/addtocart '}>
                        <FiShoppingCart size={24} />
                        <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-1 -end-1">
                            0
                        </div>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
