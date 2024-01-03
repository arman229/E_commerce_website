import {itemstore} from "@/components/data/itemstore";
import CardComponent from "@/components/ui/card";
import image from '@/assets/images/girlimage.png'
import Image from 'next/image';
const Female=()=>{
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-y-6 gap-2 ">
            {itemstore.map((item) => (
                <CardComponent key={item.id} item={item} />
            ))}
        </div>
    )
}
export default Female