import ProductsTable from "../components/Tablecomponent";
import { AdminSidebar } from "../components/AdminSidebar";
import { SidebarDemo } from "@/components/Sidebarcomponent";

const Products = () => {
  const Productheadings = ["Image", "Product", "Qty", "Price", "Action"];
  const ProductTableData = [
    {
      id: 1,
      name: "laptop",
      image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      qty: "6",
      price: 300,
      action: "Manage"
    },
    {
      id: 2,
      name: "tv",
      image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      qty: "14",
      price: 180,
      action: "Manage"
    },
    {
      id: 3,
      name: "mobile",
      image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      qty: "7",
      price: 250,
      action: "Manage"
    },
    {
      id: 4,
      name: "watch",
      image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      qty: "7",
      price: 50,
      action: "Manage"
    },
    {
      id: 5,
      name: "watch",
      image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      qty: "7",
      price: 50,
      action: "Manage"
    },
    {
      id: 6,
      name: "watch",
      image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      qty: "7",
      price: 50,
      action: "Manage"
    },
    {
      id: 7,
      name: "watch",
      image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      qty: "7",
      price: 50,
      action: "Manage"
    },

  ]
  return (
    <div className="adminContainer">
      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <SidebarDemo />
      </div>

      {/* Large Screens Sidebar */}
      <div className="hidden md:block !max-h-[100vh]">
        <AdminSidebar />
      </div>
      
      <main className="productsContainer mt-[3rem] mr-[5rem] h-[85vh] overflow-y-auto overflow-x-auto">
        <ProductsTable headings={Productheadings} TableData={ProductTableData} tableType="products"/>
      </main>

    </div>
  );
};

export default Products;
