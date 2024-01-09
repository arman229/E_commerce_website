import {FiShoppingCart} from "react-icons/fi";
import {Button} from "@/components/ui/button"
import Image from "next/image";
import {itemstore} from "@/components/data/itemstore";
import {CustomBadge} from "@/components/ui/badge";
import QuantityAddRemove from "@/components/ui/quantityAddRomove";

const productDetail = (id: number) => {
    return (
          itemstore.filter((i) => i.id === id)

    )
}

// const productDetail = (id: number) => {
//     return (
//         <>
//             {  itemstore.filter((i) => i.id === id)}
//         </>
//     )
// }
function DetailPage({params}: { params: { id: string } }) {
    const id = parseInt(params.id, 10);
    const filtered = productDetail(id);
    return (
        <>
            {filtered.map((item) => (
                <div key={item.id} className={'p-4'}>
                    <div className={'grid grid-cols-12 gap-6'}>
                        <div className={'lg:col-span-1 col-span-2 flex flex-col gap-4'}>
                            {item.images.map((img, index) => (
                                <Image key={index} src={img} alt="Product Image" className={'w-full bg-[#d7d7d9]'}/>
                            ))}
                        </div>
                        <div className={'lg:col-span-7 col-span-10 '}>
                            <Image src={item.images[0]} alt="Product Image" className={'w-full bg-[#d7d7d9]'} width={800} height={600}/>
                        </div>
                        <div className={'lg:col-span-4 col-span-12'}>
                            <div className={'      p-3  '}>
                                <h1 className="text-3xl ">{item.name}</h1>
                                <h2 className="text-2xl font-semibold text-gray-400">{item.itemcategoryname}</h2>
                                <div>
                                    <h3 className="mt-6 text-md font-bold">SELECT SIZE</h3>
                                    <div className="flex gap-x-3 my-3">
                                        < CustomBadge value={'XS'}/>
                                        < CustomBadge value={'S'}/>
                                        < CustomBadge value={'M'}/>
                                        < CustomBadge value={'L'}/>
                                        < CustomBadge value={'XL'}/>
                                    </div>
                                    <div className="flex items-center mt-6 gap-x-3">
                                        <h3 className="text-xl font-bold">Quantity:</h3>
                                        <QuantityAddRemove/>
                                    </div>
                                    <div className=" flex gap-3 my-8 items-center">
                                        <Button className={'flex gap-x-2'}> <FiShoppingCart size={20}/>Add to Cart</Button>
                                        <div className={'font-bold text-2xl'}>${item.price.toFixed(2)}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className={'font-bold text-2xl py-8 '}>Product Information</h2>
                        <hr className="border-gray-400 sm:mx-auto"/>
                        <div className={'grid grid-cols-12 py-4'}>
                            <div className={'md:col-span-3 col-span-12'}>
                                <h1 className={'text-[#666] font-bold md:text-lg text-xl uppercase'}>product details </h1>
                            </div>
                            <div className={'md:col-span-9 col-span-12'}>
                                <p className={'  md:text-md text-sx'}>{item.productDetails}</p>
                            </div>
                        </div>
                        <div className={'grid grid-cols-12 py-4 '}>
                            <div className={'md:col-span-3 col-span-12 '}>
                                <h1 className={'text-[#666] font-bold text-lg uppercase'}>product care</h1>
                            </div>
                            <ul className={'md:col-span-9 col-span-12 list-disc font-semibold text-lg'}>
                                {item.productCare.map((subitem, index) => (
                                    <li key={index}>{subitem}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default DetailPage;