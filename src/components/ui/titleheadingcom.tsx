const Titleheadingcom=({cusheading,custext})=>{
    return(
        <div>
        <h1 className={'scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl'} >{cusheading}</h1>
            <p className={'leading-7 text-lg my-4 [&:not(:first-child)]:mt-4'}>{custext}</p>
        </div>
    )
}
export {Titleheadingcom}