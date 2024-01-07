import promotion from '@/assets/images/f1.png'
import {Button} from "@/components/ui/button";
import Image from 'next/image';
import promotionimg1 from '@/assets/images/promotionsimg1.webp'
import promotionimg2 from '@/assets/images/promotionsimg2.webp'
import promotionimg3 from '@/assets/images/promotionsimg3.webp'
import {PromotionCard} from "@/components/ui/promotioncard";

const PromotionsEvents = () => {
    return (
        <div className={'my-[8rem]'}>
            <p className="text-sm md:text-lg text-[#0000ff] text-center font-semibold">Promotions</p>
            <h2 className={' mb-[2rem]  pb-4 scroll-m-20  text-xl text-center font-bold tracking-tight lg:text-4xl'}>Our Promotions Events</h2>
            <div className={'flex my-3 gap-6 lg:flex-row flex-col' }>
                <div className={'flex flex-col w-full lg:w-3/5 gap-4 '}>
                    <div className={'flex justify-between   bg-[#d6d6d8]'}>
                        <div className={'self-center p-4'}>
                            <h3 className={'scroll-m-20 py-2 text-xl   font-bold tracking-tight lg:text-3xl'}>GET UP TO 60% </h3>
                            <h3 className={'py-2 font-semibold md:text-lg text-[#212121]'}>For the summer season</h3>
                        </div>
                        <div>
                            <Image src={promotionimg1} alt="not shows"/>
                        </div>
                    </div>
                    <div className={'text-center text-white bg-[#212121] py-8'}>
                        <h2 className={'   scroll-m-20  text-xl   font-bold tracking-tight lg:text-3xl py-2'}> GET 30% Off</h2>
                        <p className={'  font-semibold md:text-lg  '}>USE PROMO CODE</p>
                        <Button className={'my-2 bg-[#474747]'}>ZEINTHWEEKENDSALE</Button>
                    </div>
                </div>
                <div className={'flex   gap-2 flex-col sm:flex-row'}>
                <div className={'w-full    sm:w-1/2   bg-[#efe1c7]'}>
                    <PromotionCard name={'Flex Sweatshirt'} bgcolor={'#efe1c7'} fakeprice={'$100.00'} img={promotionimg2} originalprice={'75.00'}/>
                </div>
                <div className={'w-full  sm  sm:w-1/2 bg-[#d7d7d9]'}>
                    <PromotionCard name={'Flex Push Button Bomber'} bgcolor={'#efe1c7'} fakeprice={'$225.00'} img={promotionimg3} originalprice={'190.00'}/>
                </div>
                </div>
            </div>
        </div>
    )
}
export {PromotionsEvents}