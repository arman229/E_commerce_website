'use client'
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FiShoppingCart } from 'react-icons/fi';
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname()
    return (
        <>
            <nav className="p-4 flex items-center justify-between">
                <div className="font-bold text-xl">A ZenithMarket</div>

                <div className="flex space-x-4">
                    <Link href="/female" className={`hover:border-b-2 border-black ${pathname === '/female' ? 'border-b-2 border-black' : ''}`}>
                         Female
                    </Link>
                    <Link href="/male" className={`hover:border-b-2 border-black ${pathname === '/male' ? 'border-b-2 border-black' : ''}`}>
                        Male
                    </Link>
                    <Link href="/kids" className={`hover:border-b-2 border-black ${pathname === '/kids' ? 'border-b-2 border-black' : ''}`}>
                        Kids
                    </Link>
                    <Link href="/products" className={`hover:border-b-2 border-black ${pathname === '/products' ? 'border-b-2 border-black' : ''}`}>
                        All Products
                    </Link>
                </div>

                <Input />

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
