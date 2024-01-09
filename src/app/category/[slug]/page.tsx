 import {itemstore} from'@/components/data/itemstore'
import CardComponent from "@/components/ui/card";
import {EmptyCartComponent} from "@/components/ui/emptyitms";
import '@/app/globals.css'
const filterCategory = (category:string) => {
    return (
        category === "kids" || category === "male" || category === "female" || category ==='sports'
            ? itemstore.filter((item) => item.category === category)
            : itemstore
    );
};
export default function Mainpage({params}: { params: { slug: string } }) {
    const filtered = filterCategory(params.slug);

    return (
        <>
            {filtered.length <= 0 ? <EmptyCartComponent/> : (
<div className={'cusstomcardcontainer justify-center'}>
                    <div className="grid grid-cols-1 place-content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-2">
                    {filtered.map((item) => (
                        <CardComponent key={item.id} item={item}/>
                    ))}
                    </div></div>)
            }
        </>
    );
}
