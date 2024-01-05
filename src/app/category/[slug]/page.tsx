import { itemstore } from "@/components/data/itemstore";
import { StaticImageData } from "next/image";
import CardComponent from "@/components/ui/card";

const filterCategory = (category) => {
    return (
        category === "kids" || category === "male" || category === "female"
            ? itemstore.filter((item) => item.category === category)
            : itemstore
    );
};
export default function Mainpage({ params }: { params: { slug: string } }) {
    const filtered = filterCategory(params.slug);



    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-2">
                {filtered.map((item) => (
                    <CardComponent key={item.id} item={item} />
                ))}
            </div>
        </>
    );
}
