
const CustomBadge=({value})=>{
    return(
        <>
            <button
                    className=" hover:bg-gray-200 text-md  p-2 bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center">{value}
            </button>
        </>
    )
}
export {CustomBadge}