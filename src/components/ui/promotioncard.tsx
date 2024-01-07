import Image from "next/image";

const PromotionCard=({bgcolor,name,fakeprice,originalprice,img})=>{

    return(
        <>
            <div className={`pt-4 px-2 sm:px-4 text-lg bg-${bgcolor}`}>

            <p>{name}</p>
                <p><span class="line-through text-center">{fakeprice} </span><span className={'font-bold ps-1 text-xl'}>${originalprice}  </span></p>
            <div className={'flex justify-center'}><Image src={img} alt={'not shows'
            }/> </div>
        </div>
        </>
    )
}
export {PromotionCard}