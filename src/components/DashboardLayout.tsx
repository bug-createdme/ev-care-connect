import { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Car, 
  Zap, 
  Menu, 
  X, 
  Home, 
  Calendar, 
  Bell, 
  User, 
  Settings,
  CreditCard,
  BarChart3,
  Wrench,
  Users,
  Package
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: ReactNode;
  role: "customer" | "staff" | "technician" | "admin";
  activeTab?: string;
}

const DashboardLayout = ({ children, role, activeTab = "dashboard" }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigationItems = {
    customer: [
      { id: "dashboard", label: "Tổng quan", icon: Home },
      { id: "booking", label: "Đặt lịch", icon: Calendar },
      { id: "vehicles", label: "Xe của tôi", icon: Car },
      { id: "history", label: "Lịch sử", icon: BarChart3 },
      { id: "notifications", label: "Thông báo", icon: Bell },
      { id: "payment", label: "Thanh toán", icon: CreditCard },
      { id: "profile", label: "Hồ sơ", icon: User },
    ],
    staff: [
      { id: "dashboard", label: "Tổng quan", icon: Home },
      { id: "appointments", label: "Lịch hẹn", icon: Calendar },
      { id: "customers", label: "Khách hàng", icon: Users },
      { id: "services", label: "Dịch vụ", icon: Wrench },
      { id: "chat", label: "Chat", icon: Bell },
      { id: "reports", label: "Báo cáo", icon: BarChart3 },
    ],
    technician: [
      { id: "dashboard", label: "Tổng quan", icon: Home },
      { id: "workorders", label: "Lệnh công việc", icon: Wrench },
      { id: "checklist", label: "Checklist", icon: Calendar },
      { id: "vehicles", label: "Xe đang sửa", icon: Car },
      { id: "parts", label: "Phụ tùng", icon: Package },
    ],
    admin: [
      { id: "dashboard", label: "Tổng quan", icon: Home },
      { id: "staff", label: "Nhân sự", icon: Users },
      { id: "inventory", label: "Kho phụ tùng", icon: Package },
      { id: "finance", label: "Tài chính", icon: CreditCard },
      { id: "analytics", label: "Phân tích", icon: BarChart3 },
      { id: "settings", label: "Cài đặt", icon: Settings },
    ],
  };

  const roleConfig = {
    customer: {
      title: "Khách hàng",
      subtitle: "Quản lý xe và dịch vụ",
      color: "gradient-primary"
    },
    staff: {
      title: "Nhân viên",
      subtitle: "Tiếp nhận và hỗ trợ",
      color: "gradient-secondary"
    },
    technician: {
      title: "Kỹ thuật viên",
      subtitle: "Bảo dưỡng và sửa chữa",
      color: "bg-warning text-warning-foreground"
    },
    admin: {
      title: "Quản trị viên",
      subtitle: "Quản lý hệ thống",
      color: "bg-destructive text-destructive-foreground"
    }
  };

  const currentRole = roleConfig[role];
  const navItems = navigationItems[role];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Mobile Header */}
      <div className="lg:hidden bg-background border-b px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Car className="h-6 w-6 text-primary" />
            <Zap className="h-3 w-3 text-secondary absolute -top-1 -right-1" />
          </div>
          <div>
            <h1 className="font-bold">{currentRole.title}</h1>
            <p className="text-xs text-muted-foreground">{currentRole.subtitle}</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-background border-r transition-transform lg:translate-x-0 lg:static lg:z-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          {/* Logo */}
          <div className="p-6 border-b">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Car className="h-8 w-8 text-primary" />
                <Zap className="h-4 w-4 text-secondary absolute -top-1 -right-1" />
              </div>
              <div>
                <h1 className="text-xl font-bold gradient-primary bg-clip-text text-transparent">
                  EV Service
                </h1>
                <p className="text-xs text-muted-foreground">Management System</p>
              </div>
            </div>
          </div>

          {/* Role Badge */}
          <div className="p-4">
            <Card className="p-4 gradient-card border-0">
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${currentRole.color}`}>
                {currentRole.title}
              </div>
              <p className="text-xs text-muted-foreground mt-1">{currentRole.subtitle}</p>
            </Card>
          </div>

          {/* Navigation */}
          <nav className="p-4 space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "default" : "ghost"}
                className="w-full justify-start"
              >
                <item.icon className="h-4 w-4 mr-3" />
                {item.label}
              </Button>
            ))}
          </nav>

          {/* Bottom Actions */}
          <div className="absolute bottom-4 left-4 right-4 space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="h-4 w-4 mr-3" />
              Cài đặt
            </Button>
            <Button variant="outline" className="w-full">
              Đăng xuất
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          <main className="p-6">
            {children}
          </main>
        </div>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardLayout;