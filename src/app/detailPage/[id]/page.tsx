
import Image from "next/image";
import imagefromitemstore from '@/assets/images/girlimage.png'
import {itemstore} from "@/components/data/itemstore";
const productDetail = (id: number) => {
    return (
        itemstore.filter((i) => i.id === id)
        )
}

function DetailPage({ params }: { params: { id: string } }) {
    const id = parseInt(params.id, 10);
    const filtered = productDetail(id);

    return (
        <>

            {filtered.map((item) => (
                <div key={item.id} className={'p-4'}>
                    <div className={'grid grid-cols-12'}>
                        <div className={'col-span-1 flex flex-col'}>
                            {item.images.map((img,index)=>(
                                <Image key={index} src={img} alt="Product Image" className={'w-full'}    />
                            ))}

                        </div>
                        <div className={'col-span-7'}>

                            <Image src={item.images[0]} alt="Product Image" className={'w-full'} width={800} height={600} />
                        </div>
                        <div className={'col-span-4'}>
                            {/*<h1>{item.name} </h1>*/}
                            {/*<h3>{item.category}</h3>*/}
                            {/*<p>Select Size</p>*/}


                            <div>
                                <div>
                                    <h1 className="text-2xl">{item.name}</h1>
                                    <h2 className="text-base font-semibold text-gray-400">
                                        {item.name}
                                    </h2>
                                </div>
                                <div>
                                    <h3 className="mt-6 text-xs font-semibold">SELECT SIZE</h3>
                                    {/* Sizes */}
                                    <div className="flex gap-x-3">

                                    </div>
                                    {/* Quantity */}
                                    <div className="flex items-center mt-6 gap-x-3">
                                        <h3 className="text-[10px] font-semibold">Quantity:</h3>

                                    </div>
                                    {/* Add to Cart */}
                                    <div className="flex items-center mt-5 gap-x-4">

                                        <h2 className="text-2xl font-bold">
                                             ss
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <h1>Overview</h1>
                            <h1 className={'font-bold text-2xl py-8 '}>Product Information</h1>
                        </div>

                        <hr className="border-gray-400 sm:mx-auto" />
                        <div className={'grid grid-cols-12 py-4'}>
                            <div className={'col-span-3'}>
                                <h1 className={'text-[#666] font-bold text-lg uppercase'}>product details </h1>
                            </div>
                            <div className={'col-span-9'}>
                                <p className={'text-lg'}>
                                    {item.productDetails}
                                </p>
                            </div>
                        </div>
                        <div className={'grid grid-cols-12 py-4 '}>
                            <div className={'col-span-3 '}>
                                <h1 className={'text-[#666] font-bold text-lg uppercase'}>product care</h1>
                            </div>
                            <ul className={'col-span-9 list-disc font-semibold text-lg'}>

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