import { SidebarDemo } from "@/components/Sidebarcomponent";
import { BiMaleFemale } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import pfp from "../../public/pfp.gif";
import { AdminSidebar } from "../components/AdminSidebar";
import { BarChart, DoughnutChart } from "../components/Charts";
import StickyHeadTable from "../components/StickyHeadTable";
import { useEffect, useState } from "react";

const WidgetItems = [
  {
    heading: "Revenue",
    value: "3200",
    percent: 80,
    color: "#28a745", // Green for financial growth
    amount: "23"
  },
  {
    heading: "Users",
    value: "6342",
    percent: 14,
    color: "#f62e06", // Orange to show modest growth or attention
    users: "23"
  },
  {
    heading: "Transactions",
    value: "832",
    percent: 55,
    color: "#007bff", // Blue for steady transaction growth
    users: "23"
  },
  {
    heading: "Products",
    value: "532",
    percent: 92,
    color: "#ffeb3b", // Bright yellow for high product growth
    users: "23"
  },
];

interface CategoryItem {
  heading: string;
  value: number;
}

const CategoryItems: CategoryItem[] = [
  {
    heading: "Electronics",
    value: 80,
  },
  {
    heading: "Grocery",
    value: 30,
  },
  {
    heading: "Fashion",
    value: 60,
  },
];

const Dashboard = () => {

  const [size, setSize] = useState(65)

  useEffect(() => {
    const mediaQuerySmall = window.matchMedia('(max-width: 400px)');
    const mediaQueryMedium = window.matchMedia('(max-width: 550px)');

    const handleScreenSize = () => {
      if (mediaQuerySmall.matches) {
        setSize(40); // Set to 40 for screens smaller than 400px
      } else if (mediaQueryMedium.matches) {
        setSize(60); // Set to 50 for screens smaller than 500px but larger than 400px
      } else {
        setSize(65); // Default for larger screens
      }
    };
    handleScreenSize(); // Initial check on mount

    // Add listeners for screen size changes
    mediaQuerySmall.addEventListener('change', handleScreenSize);
    mediaQueryMedium.addEventListener('change', handleScreenSize);

    // Cleanup listeners when component unmounts
    return () => {
      mediaQuerySmall.removeEventListener('change', handleScreenSize);
      mediaQueryMedium.removeEventListener('change', handleScreenSize);
    };
  }, []);

  function getColorByValue(value: number): string {
    if (value >= 81) {
      return "rgb(0, 0, 255)"; // Dark Blue
    } else if (value >= 61) {
      return "rgb(0, 128, 0)"; // Green
    } else if (value >= 41) {
      return "rgb(255, 255, 0)"; // Yellow
    } else if (value >= 21) {
      return "rgb(255, 165, 0)"; // Orange
    } else {
      return "rgb(255, 0, 0)"; // Red
    }
  }

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

      <main className="dashboard overflow-y-scroll !max-h-[100vh]">
        {/* section 1 */}
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search" />
          <FaRegBell />
          <div>
            <img src={pfp} alt="User" width={28} height={28} />
          </div>
        </div>

        <section className="widgetContainer flex gap-[4rem] flex-col md:flex-row mt-2 justify-center flex-wrap items-center">
          {WidgetItems.map(({ heading, value, percent, amount, color }, index) => (
            <div key={index} className="widget flex shadow-custom bg-white dark:bg-customdark firstcards justify-between h-[8.5rem] w-[99%] md:w-auto md:min-w-[13.6rem] rounded-md px-5 py-3 items-center">
              <div className="part1 flex flex-col">
                <p className="heading opacity-80">{heading}</p>
                <h4 className="font-bold">{amount ? `$${value}` : `${value}`}</h4>
                <div>
                  {percent > 0 ? <span className="green flex items-center "><HiTrendingUp /> +{percent}% {" "}</span> : <span className="red flex items-center  "><HiTrendingDown /></span>}
                </div>
              </div>
              <div className="part2">
                <div className="widgetcircle" style={{ background: `conic-gradient(${color} ${Math.abs(percent) / 100 * 360}deg, rgb(255, 255, 255) 0)` }}>
                  <span color={color}>{percent}%</span>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* section 2 */}
        <section className="graphContainer flex gap-[2rem] pr-[2rem] flex-col">
          {/* Revenue & Transactions Chart part */}
          <div className="revenueChart bg-white dark:bg-customdark ">
            <h2>Revenue & Transactions</h2>
            <BarChart data_1={[300, 144, 433, 655, 237, 755, 190]}
              data_2={[200, 244, 343, 655, 557, 455, 990]}
              title_1="Revenue"
              title_2="Transactions"
              bgColor_1="#28a745"
              bgColor_2="#007bff"
            />
          </div>

          {/* Inventory part */}
          <div className="dashboardCategories bg-white dark:bg-customdark flex flex-row md:flex-col !w-full">
            <h2>Inventory</h2>
            {CategoryItems.map(({ heading, value }, index) => (
              <div key={index} className="categoriesItem w-full flex flex-row justify-center items-center p-[1rem]">
                <h5 className="tracking-wide font-light">{heading}</h5>
                <div className="ml-auto w-[6rem] bg-slate-300 rounded-[20px] h-[0.5rem] flex-none">
                  <div style={{ backgroundColor: getColorByValue(value), width: `${value}%`, height: "100%", transition: "width 0.5s ease-in-out, background-color 0.3s ease" }} className="rounded-[20px]" />
                </div>
                <span className="ml-4">{value}%</span>
              </div>
            ))}
          </div>
        </section>

        {/* section3 */}
        <section className="transactionContainer flex gap-[4rem] mt-[5rem] flex-col md:items-center">
          <div className="genderChart h-full">
            <h2>Gender Ratio</h2>
            <DoughnutChart labels={["Female", "Male"]} data={[12, 19]} backgroundColor={["hsl(340, 82%, 56%)", "rgba(53, 162, 235, 0.8)"]}  cutout={size} />
            <p><BiMaleFemale className="dark:text-[#ffffffe7] -translate-y-[10px] md:w-auto w-[2.5rem]" /></p>
          </div>
            <StickyHeadTable />
          {/* </div> */}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
