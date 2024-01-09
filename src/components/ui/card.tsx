'use client';
import {ItemStore} from "@/components/data/itemstore";
import Link from "next/link";
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, {useEffect} from 'react';
interface CardComponentProps{
    item:ItemStore
}
function CardComponent({item}:CardComponentProps) {




        useEffect(() => {
            AOS.init({duration: 1000,})
        }, []);
    return (
        <div data-aos="zoom-in">
            <div
                 className="     transform hover:scale-110 transition-transform duration-300 ease-in-out w-full max-w-[18rem] bg-white border border-gray-200 rounded-xl shadow    ">
                <Link href={`/detailPage/${item.id}`} className={'border-black'}>
                    <div className={'flex justify-center  bg-[#d7d7d9]'}>
                        <Image src={item.images[0]} alt="product" className={'w-full   h-auto   '}/>
                    </div>
                    <div className="px-5 pb-5 leading-8">
                        <h5 className="text-xl font-semibold tracking-tight text-[#212121]  "> {item.name}</h5>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-[#888888] leading-8 ">{item.itemcategoryname}</span>
                            <span className="text-2xl font-bold text-gray-900  leading-8">${item.price}</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default CardComponent
