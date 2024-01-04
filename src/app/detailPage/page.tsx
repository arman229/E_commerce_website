import Image from "next/image";
import imagefromitemstore from '@/assets/images/girlimage.png'
const DetailPage = () => {
    return (
        <div className={'p-4'}>
            <div className={'grid grid-cols-12'}>
                <div className={'col-span-1 flex flex-col'}>
                      {/*by using the map shows the subimages*/}
                    <p>images</p>
                    <p>images</p>
                    <p>images</p>
                    <p>images</p>

                </div>
                <div className={ 'col-span-7'}>
                    <Image src={imagefromitemstore} className={'w-full'}/>
                </div>
                <div className={'col-span-4'}>
                    <h1>itemname from itemstore</h1>
                    <h3>itemcatogry from itemstore</h3>
                    <p>Selcect Size</p>

                </div>
            </div>
            <div>
                <div  classN>
                    <h1  > Overview</h1>
                    <h1 className={'font-bold text-2xl py-8 '}>Product Information</h1>
                </div>

                <hr className="  border-gray-400 sm:mx-auto  "/>
                <div className={'grid grid-cols-12 py-4'}>
                    <div className={'col-span-3 '}>
                        <h1 className={'text-[#666] font-bold text-lg uppercase'}>product details </h1>
                    </div>
                    <div className={'col-span-9'}>
                        <p className={'text-lg'}> data from the itemstore data from the itemstore data from the itemstore data from the
                            itemstore data from the itemstore data from the itemstore data from the itemstore data from
                            the itemstore data from the itemstore data from the itemstore data from the itemstore data from the itemstore data from the itemstore data from the
                            itemstore data from the itemstore data from the itemstore data from the itemstore data from
                            the itemstore data from the itemstore data from the itemstore </p>
                    </div>
                </div>
                <div className={'grid grid-cols-12  py-4 '}>
                    <div className={'col-span-3 '}>
                        <h1 className={'text-[#666] font-bold text-lg uppercase'}>product care</h1>
                    </div>
                    <ul className={'col-span-9 list-disc  font-semibold text-lg'}>
                        <li>data from the itemstore</li>
                        <li>data from the itemstore</li>
                        <li>data from the itemstore</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default DetailPage