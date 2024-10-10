import Tablecomponent from "@/components/Tablecomponent"
import {AdminSidebar} from "../components/AdminSidebar"

const Customers = () => {
  const CustomersHeadings = [
    "Photo",
    "Name",
    "Gender",
    "Email",
    "Role",
    "Action",
  ]

  const CustomersTableData = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "John Doe",
      gender: "Male",
      email: "jL6d0@example.com",
      role: "user",
      action: "Remove",
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/5484078/pexels-photo-5484078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "John Doe",
      gender: "Male",
      email: "jL6d0@example.com",
      role: "user",
      action: "Remove",
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "John Doe",
      gender: "Male",
      email: "jL6d0@example.com",
      role: "user",
      action: "Remove",
    },
  ]
  return (
    <div className="adminContainer">   
      <AdminSidebar/>
      <main className="CustomersContainer mt-[3rem] mr-[5rem] h-[85vh] overflow-y-auto overflow-x-auto">
        <h1>Customers</h1>
        <Tablecomponent headings={CustomersHeadings} TableData={CustomersTableData} tableType="customers" />
      </main>
    </div>
  )
}

export default Customers
