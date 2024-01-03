'use client';
import image from '@/assets/images/girlimage.png'

import Link from "next/link";
import Image from 'next/image';

import {itemstore} from "@/components/data/itemstore";
function CardComponent({item}) {
    return (

        <>





        <Link href={'/detailPage'}  >
            <div
                className=" transform hover:scale-110 transition-transform duration-300 ease-in-out w-full max-w-[18rem] bg-white border border-gray-200 rounded-lg shadow   ">
                <div className={'flex justify-center '}>
                    {/*<Image  className="p-8 rounded-t-lg" src={item.images[0]} alt="product image" width={30} />*/}
                      <Image src={image}/>
                </div>
                <div className="px-5 pb-5 leading-8">
                    <h5 className="text-xl font-semibold tracking-tight text-[#212121] dark:text-white"> {item.name}</h5>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold text-[#888888] leading-8 ">{item.category}</span>
                        <span className="text-2xl font-bold text-gray-900  leading-8">${item.price}</span>
                    </div>
                </div>
            </div>
        </Link>
        </>
    );
}

export default CardComponent
