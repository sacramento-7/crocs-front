import SizesTable from "@/components/admin/sizesTable/SizesTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SizesPage = () => {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <div className="border shadow-sm rounded-lg p-2">
                <Button asChild>
                    <Link href='/admin/sizes/addSize'>افزودن سایز</Link>
                </Button>
                <SizesTable />
            </div>
        </main>
  )
}

export default SizesPage