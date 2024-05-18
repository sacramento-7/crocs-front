import ProductCards from '@/components/shop/productCards/ProductCards';
import Filter from "@/components/shop/filter/Filter";
import PaginationProducts from "@/components/shop/paginationProducts/PaginationProducts";
import MyBreadCrumb from '@/components/myBreadcrumb/MyBreadCrumb';
import SortingFilter from '@/components/sortingFilter/SortingFilter';

const ProductsPage = () => {
  return (
    <div className="mx-auto px-4 py-8 md:py-12 lg:py-16">
      <div className="grid grid-cols-1">
        <div className='hidden sm:flex justify-between'>
          <MyBreadCrumb />
          <SortingFilter />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 px-4 md:px-6 py-8'>
          <Filter />
          <ProductCards />
          <div className="mt-8 block mx-auto min-w-[100vw]">
            <PaginationProducts />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage

//<div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 px-4 md:px-6 py-8">