import ProductCard from '@/components/productCard/ProductCard';

const ProductCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard title='Product 1'/>
        <ProductCard title='Product 2'/>
        <ProductCard title='Product 3'/>
        <ProductCard title='Product 4'/>
        <ProductCard title='Product 5'/>
        <ProductCard title='Product 6'/>
        <ProductCard title='Product 7'/>
        <ProductCard title='Product 8'/>
        <ProductCard title='Product 9'/>
        <ProductCard title='Product 10'/>
    </div>
  )
}

export default ProductCards

//<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

//<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">