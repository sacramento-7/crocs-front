import ProductSavedCard from "@/components/productSavedCard/ProductSavedCard";

const page = () => {
    return (
        <div className='container flex flex-col gap-8 px-4 md:px-6 py-8'>
            {/* <div className="flex justify-center items-center">
                <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">
                    Your Whishlist is Empty!
                </h3>
            </div> */}
            <ProductSavedCard />
            <ProductSavedCard />
        </div>
    )
}

export default page