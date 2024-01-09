'use client'
import Heroimg from '@/assets/images/heroimage.webp';
import bazaarlmg from '@/assets/images/bazaarlmg.webp'
import bustleimg from '@/assets/images/bustleimg.webp'
import versaceimg from '@/assets/images/versaceimg.webp'
import instyle from '@/assets/images/instyle.webp'
import {Button} from "@/components/ui/button";
import {FiShoppingCart} from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import React from 'react';
const HeroPage:React.FC = () => {
    return (
        <>
            <div className={' flex flex-col  md:flex-row gap-y-4 gap-4 my-[2rem]'}>
                <div className={'flex flex-col flex-1'}>
                    <div className={'my-6'}>
                        <span className='py-3 px-6  rounded-lg bg-blue-200 text-[#0000ff]   font-semibold text-lg  '>Sale 70%</span>
                    </div>
                    <h1 className={'scroll-m-20 text-4xl font-bold tracking-tight lg:text-7xl'}> An Industrial take on steeetwer </h1>
                    <p className={'leading-7 text-lg my-4 [&:not(:first-child)]:mt-6'}>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits</p>
                    <Link href="/category/products">
                        <Button className={'flex gap-x-2  my-4  w-40  lg:w-56 lg:text-lg  p-2 lg:p-6'}> <FiShoppingCart size={26}/>Start Shopping
                        </Button>
                    </Link>
                    <div className=' flex justify-evenly  gap-6 mt-8 py-8'>
                        <Image src={bazaarlmg} alt='not shows'/>
                        <Image src={bustleimg} alt='not shows'/>
                        <Image src={versaceimg} alt='not shows'/>
                        <Image src={instyle} alt='not shows'/>
                    </div>
                </div>
                <div className='  flex flex-1 ' data-aos="zoom-in">
                    <div className='  w-600 h-600 rounded-full bg-[#FFECE3] transform hover:scale-110 transition-transform duration-300 ease-in-out  '>
                        <Image className=' ' src={Heroimg} width={650} height={650} alt='header image'/>
                    </div>
                </div>
            </div>


        </>
    )
}
export {HeroPage}