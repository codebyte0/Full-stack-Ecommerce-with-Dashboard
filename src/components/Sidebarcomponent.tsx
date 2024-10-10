import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Activity,
    BarChart2,
    ChevronDown,
    ChevronUp,
    Home,
    LineChart,
    Package,
    PieChart,
    ShoppingCart,
    Users,
} from "lucide-react";

export function SidebarDemo() {
    const [open, setOpen] = useState(true);
    const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(true);
    const toggleAnalytics = () => {
        setIsAnalyticsOpen(!isAnalyticsOpen);
    };

    return (
        <div className="flex absolute z-50">
            <div
                className={`${
                    open ? "w-60" : "w-16"
                } bg-gray-800 h-screen p-5 pt-8 relative duration-300 flex flex-col`}
            >
                <button
                    onClick={() => setOpen(!open)}
                    className="absolute -right-3 top-9 w-7 h-7 bg-white border-2 border-gray-800 rounded-full"
                >
                    {open ? "<" : ">"}
                </button>
                <div className="flex items-center gap-x-4">
                    <Package className="h-6 w-6 text-white" />
                    {open && <h1 className="text-white font-medium">Acet Labs</h1>}
                </div>
                <ul className="pt-6 flex-1">
                    <nav className="p-4">
                        <Link
                            to="/admin/dashboard"
                            className="flex items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <Home className="h-4 w-4" />
                            {open && <span className="ml-2">Dashboard</span>}
                        </Link>
                        <Link
                            to="#"
                            className="flex items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <Package className="h-4 w-4" />
                            {open && <span className="ml-2">Products</span>}
                        </Link>
                        <Link
                            to="#"
                            className="flex items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <Users className="h-4 w-4" />
                            {open && <span className="ml-2">Customers</span>}
                        </Link>
                        {/* <Link
                            to="/admin/"
                            className="flex items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <ShoppingCart className="h-4 w-4" />
                            {open && <span className="ml-2">Orders</span>}
                            {open && <Badge className="ml-auto h-6 w-6">6</Badge>}
                        </Link> */}
                        {/* Analytics Dropdown */}
                        <div>
                            <button
                                onClick={toggleAnalytics}
                                className="flex w-full items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                <LineChart className="h-4 w-4" />
                                {open && <span className="ml-2">Analytics</span>}
                                {isAnalyticsOpen ? (
                                    <ChevronUp className="ml-auto h-4 w-4" />
                                ) : (
                                    <ChevronDown className="ml-auto h-4 w-4" />
                                )}
                            </button>
                            {/* Submenu for Analytics */}
                            {isAnalyticsOpen && (
                                <div className="ml-6 mt-2 space-y-1">
                                    <Link
                                        to="/admin/charts/bar-chart"
                                        className="flex items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                    >
                                        <BarChart2 className="h-4 w-4" />
                                        {open && <span className="ml-2">Bar Chart</span>}
                                    </Link>
                                    <Link
                                        to="/admin/charts/pie-chart"
                                        className="flex items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                    >
                                        <PieChart className="h-4 w-4" />
                                        {open && <span className="ml-2">Pie Chart</span>}
                                    </Link>
                                    <Link
                                        to="/admin/charts/line-chart"
                                        className="flex items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                    >
                                        <Activity className="h-4 w-4" />
                                        {open && <span className="ml-2">Line Chart</span>}
                                    </Link>
                                </div>
                            )}
                        </div>
                    </nav>
                </ul>
                <SidebarIcons className={`${open ? "hidden" : "block"}`} />
            </div>
        </div>
    );
}

function SidebarIcons({ className }:{className: string}) {
    return (
        <div className={`mt-auto flex flex-col items-center ${className} top-24 absolute`}>
            {/* <Package className="h-6 w-6 text-white mb-2" /> */}
            <Home className="h-6 w-6 text-white mb-6" />
            <Users className="h-6 w-6 text-white mb-6" />
            <ShoppingCart className="h-6 w-6 text-white mb-6" />
            <LineChart className="h-6 w-6 text-white mb-6" />
        </div>
    );
}
