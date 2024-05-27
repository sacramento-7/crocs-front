import ProductCards from '@/components/shop/productCards/ProductCards';
import Filter from "@/components/shop/filter/Filter";
import PaginationProducts from "@/components/shop/paginationProducts/PaginationProducts";

const WomenPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 px-4 md:px-6 py-8">
        <Filter />
        <ProductCards />
        <div className="mt-8 block mx-auto min-w-[100vw]">
          <PaginationProducts />
        </div>
      </div>
    </div>
  )
}

export default WomenPage