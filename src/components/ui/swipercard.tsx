'use client';
import image from '@/assets/images/girlimage.png'

import Link from "next/link";
import Image from 'next/image';

import {itemstore} from "@/components/data/itemstore";
function SwiperCard({item}) {
    return (

        <>






            <div
                className="  transform hover:scale-110 transition-transform duration-300 ease-in-out w-full max-w-[22rem] bg-white border border-gray-200 rounded-lg shadow   ">
                <Link href={`/detailPage/${item.id}`}  className={'border-black'} >
                    <div className={'flex justify-center  bg-red-400 '}>

                        <Image src={item.images[0]}  alt="product" className={'w-full'} />

                    </div>
                    <div className="px-5 pt-2 pb-5 leading-8 text-center text-black ">
                        <h5 className="text-xl font-semibold tracking-tight  dark:text-white"> {item.name}</h5>

                            <span className="text-xl font-bold  leading-8 ">{item.itemcategoryname}</span>

                    </div> </Link>
            </div>

        </>
    );
}

export default SwiperCard