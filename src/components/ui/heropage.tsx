import Heroimg from '@/assets/images/heroimage.webp'
import {Button} from "@/components/ui/button";
import {FiShoppingCart} from "react-icons/fi";
import Image from "next/image";

const HeroPage = () => {
    return (
        <>

            <div className={' flex flex-col  md:flex-row gap-y-4 gap-4 my-[2rem]'}>

                <div className={'flex flex-col flex-1'}>
                   <div className={'my-6'}
                    > <span  className='py-3 px-6  rounded-lg bg-blue-200 text-[#0000ff]   font-semibold text-lg  '  >Sale 70%</span></div>
                    <h1 className={'scroll-m-20 text-4xl font-bold tracking-tight lg:text-7xl'}> An Industrial take on steeetwer </h1>
                    <p className={'leading-7 my-4 [&:not(:first-child)]:mt-6'}>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits</p>
                    <Button className={'flex gap-x-2  my-4  w-40  lg:w-56 lg:text-lg  p-2 lg:p-6'}> <FiShoppingCart size={26} />
                        Start Shopping
                    </Button>
                </div>
                <div className='  flex flex-1'>
                    <div className='  w-600 h-600 rounded-full bg-[#FFECE3]  '>
                        <Image className=' ' src={Heroimg} width={650} height={650} alt='header image' />
                    </div>
                </div>
            </div>


        </>
    )
}
export {HeroPage}