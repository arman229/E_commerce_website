import Image, {StaticImageData} from "next/image";
import React from "react";
interface PromotionCardProps {
    name:string;
    fakeprice:string;
    originalprice:string;
    img:StaticImageData
}
const PromotionCard:React.FC<PromotionCardProps> = ({ name, fakeprice, originalprice, img}) => {

    return (
        <>
            <div className={`pt-4 px-2 sm:px-4 text-lg  `}>
                <p>{name}</p>
                <p><span className="line-through text-center">{fakeprice} </span><span className={'font-bold ps-1 text-xl'}>${originalprice}  </span></p>
                <div className={'flex justify-center transform hover:scale-110 transition-transform duration-300 ease-in-out'}><Image src={img} alt={'not shows'}/></div>
            </div>
        </>
    )
}
export {PromotionCard}