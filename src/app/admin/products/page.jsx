import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProductsPage = () => {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="border shadow-sm rounded-lg p-2">
        <Button asChild>
          <Link href='/admin/products/addProduct'>افزودن محصول</Link>
        </Button>
        {/* <ColorsTable /> */}
        <h2>Products</h2>
      </div>
    </main>
  )
}

export default ProductsPage