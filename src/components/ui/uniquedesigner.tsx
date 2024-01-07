import {Titleheadingcom} from "@/components/ui/titleheadingcom";
import Image from "next/image";
import girlimage from '@/assets/images/f77.png'
import {Button} from "@/components/ui/button";
import Link from "next/link";

const Uniquedesigner = () => {
    return (
        <div className={'my-8 py-4'}>

            <div className={'flex'}>

                <div className={'lg:w-1/2'}></div>
                <div className={'lg:w-1/2  text-[#212121] scroll-m-20 text-xl font-bold tracking-tight lg:text-4xl'}>Unique and Authentic Vintage Designer Jewellery</div>
            </div>

            <div className={'flex    py-4 px-2 flex-col lg:flex-row'}>

                <div className={'lg:w-1/2 w-full flex flex-col sm:flex-row gap-2 lg:gap-4'}>
                   <div className={'flex flex-col justify-evenly'} > <Titleheadingcom cusheading={'Using Good Quality Materials'} custext={'Lorem ipsum dolor sit amt, consectetur adipiscing elit.'}/>
                       <Titleheadingcom cusheading={'Modern Fashion Design'} custext={'Lorem ipsum dolor sit amt, consectetur adipiscing elit.'}/></div>
                    <div  className={'flex flex-col justify-evenly'}><Titleheadingcom cusheading={'100% Handmade Products'} custext={'Lorem ipsum dolor sit amt, consectetur adipiscing elit.'}/>
                        <Titleheadingcom cusheading={'Discount for Bulk Orders'} custext={'Lorem ipsum dolor sit amt, consectetur adipiscing elit.'}/></div>
                </div>
                <div className={'lg:w-1/2 w-full flex gap-4 flex-col md:flex-row py-4'}>
                    <div className={'lg:w-2/5 w-full self-center  '}><Image className={'mx-auto '} src={girlimage} alt={'not shows'}/></div>
                    <div className={'lg:w-3/5 w-full self-center'}><p className={'leading-7 text-md md:text-lg my-4 [&:not(:first-child)]:mt-6'}>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                        <Link href="/category/products"><Button>See All Product </Button>
                        </Link></div>
                </div>
            </div>
        </div>
    )
}
export {Uniquedesigner}