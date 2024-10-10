import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, BarChart2, ChevronDown, ChevronUp, Home, LineChart, Package, PieChart, ShoppingCart, Users } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

export function AdminSidebar() {
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(true);

  const toggleAnalytics = () => {
    setIsAnalyticsOpen(!isAnalyticsOpen);
  };

  return (
    <div className=" border-r bg-muted/40 h-[100vh]">
      <div className="flex h-14 items-center border-b px-4">
        <Link to="/admin/dashboard" className="flex items-center gap-2 font-semibold">
          <Package className="h-6 w-6" />
          <span>Admin Dashboard</span>
        </Link>
        <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
          <ModeToggle/>
        </Button>
      </div>
      <nav className="flex-1 p-4">
        <Link to="/admin/dashboard" className="flex items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary">
          <Home className="h-4 w-4" />
          Dashboard
        </Link>
        <Link to="/admin/products" className="flex items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary">
          <Package className="h-4 w-4" />
          Products
        </Link>
        <Link to="/admin/customers" className="flex items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary">
          <Users className="h-4 w-4" />
          Customers
        </Link>
        <Link to="/admin/transactions" className="flex items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary">
          <ShoppingCart className="h-4 w-4" />
          Orders
          <Badge className="ml-auto h-6 w-6">6</Badge>
        </Link>
        {/* Analytics Dropdown */}
        <div>
          <button
            onClick={toggleAnalytics}
            className="flex w-full items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <LineChart className="h-4 w-4" />
            Analytics
            {isAnalyticsOpen ? (
              <ChevronUp className="ml-auto h-4 w-4" />
            ) : (
              <ChevronDown className="ml-auto h-4 w-4" />
            )}
          </button>
          {/* Submenu for Analytics */}
          {isAnalyticsOpen && (
            <div className="ml-6 mt-2 space-y-1">
              <Link to="/admin/charts/bar-chart" className="flex items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                <BarChart2 className="h-4 w-4" /> {/* Bar Chart Icon */}
                Bar Chart
              </Link>
              <Link to="/admin/charts/pie-chart" className="flex items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                <PieChart className="h-4 w-4" /> {/* Pie Chart Icon */}
                Pie Chart
              </Link>
              <Link to="/admin/charts/line-chart" className="flex items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                <Activity className="h-4 w-4" /> {/* Line Chart Icon */}
                Line Chart
              </Link>
            </div>

          )}
        </div>
      </nav>
      <div className="p-4">
        <Card>
          <CardHeader>
            <CardTitle>Upgrade to Pro</CardTitle>
            <CardDescription>
              Unlock all features and get unlimited access to our support team.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="sm" className="w-full">Upgrade</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
export default AdminSidebar;