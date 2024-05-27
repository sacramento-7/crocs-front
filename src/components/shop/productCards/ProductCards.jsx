import ProductCard from '@/components/productCard/ProductCard';

const ProductCards = () => {
  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard title='محصول 1' srcImg='/images/products/prod1.jpg' />
        <ProductCard title='محصول 2' srcImg='/images/products/prod2.jpg' />
        <ProductCard title='محصول 3' srcImg='/images/products/prod3.jpg' />
        <ProductCard title='محصول 4' srcImg='/images/products/prod4.jpg' />
        <ProductCard title='محصول 5' srcImg='/images/products/prod5.jpg' />
        <ProductCard title='محصول 6' srcImg='/images/products/prod6.jpg' />
        <ProductCard title='محصول 7' srcImg='/images/products/prod7.jpg' />
        <ProductCard title='محصول 8' srcImg='/images/products/prod8.jpg' />
        <ProductCard title='محصول 9' srcImg='/images/products/prod9.jpg' />
        <ProductCard title='محصول 10' srcImg='/images/products/prod10.jpg' />
      </div>
  )
}

export default ProductCards

//<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

//<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">