import SideNav from "@/components/admin/sideNav/SideNav";
import HeaderAdmin from "@/components/admin/headerAdmin/HeaderAdmin";

export const metadata = {
    title: "Crocs Shop | Admin Page",
    description: "Online shop for Crocs",
};

const layout = ({ children }) => {
    return (
        <main className="min-h-[78dvh]">
            <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
                <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
                    <SideNav />
                </div>
                <div className="flex flex-col">
                    <HeaderAdmin />
                    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default layout