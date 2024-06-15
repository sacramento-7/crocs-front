import OrderTable from "@/components/admin/orderTable/OrderTable";

const AdminPage = () => {
  return (     
      <div className="flex flex-col">
        {/* <HeaderAdmin /> */}
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="border shadow-sm rounded-lg p-2">
            <OrderTable />
          </div>
        </main>
      </div>
  )
}

export default AdminPage;
