import ColorsTable from "@/components/admin/colorsTable/ColorsTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ColorPage = () => {
    return (
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <div className="border shadow-sm rounded-lg p-2">
                <Button asChild>
                    <Link href='/admin/colors/addColor'>افزودن رنگ</Link>
                </Button>
                <ColorsTable />
            </div>
        </main>
    )
}

export default ColorPage