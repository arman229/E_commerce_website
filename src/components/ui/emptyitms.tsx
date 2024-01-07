

export const EmptyCartComponent = () => {
    return (
        <div className={'min-h-[70vh] flex items-center'} data-aos="zoom-in">
    <div className="w-72 mx-auto p-6 rounded-lg shadow-lg bg-white  ">
    <div className="flex   justify-center space-x-2 mb-4">
    <svg className="   w-8 h-8  " aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <h3 className=" text-2xl">Oops</h3>
        </div>
        <div className="empty-cart-message text-center">
            <p className="text-gray-600 mb-2">We're sorry,</p>
            <p className="text-gray-600">No items in this category.</p>

    </div>
    </div>
    </div>
);
};