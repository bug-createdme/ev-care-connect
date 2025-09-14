import DashboardLayout from "@/components/DashboardLayout";
import StatsCard from "@/components/StatsCard";
import QuickActions from "@/components/QuickActions";
import { Card } from "@/components/ui/card"; 
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Car, 
  Calendar, 
  Bell, 
  CreditCard, 
  Battery, 
  Clock,
  CheckCircle,
  AlertTriangle
} from "lucide-react";

const CustomerDashboard = () => {
  const upcomingServices = [
    {
      id: 1,
      type: "Bảo dưỡng định kỳ",
      vehicle: "Tesla Model 3",
      date: "2024-01-15",
      time: "09:00",
      status: "confirmed",
      center: "EV Center Hà Nội"
    },
    {
      id: 2,
      type: "Kiểm tra pin",
      vehicle: "VinFast VF8",
      date: "2024-01-20",
      time: "14:30",
      status: "pending",
      center: "EV Center HCM"
    }
  ];

  const recentHistory = [
    {
      id: 1,
      type: "Thay lốp xe",
      vehicle: "Tesla Model 3",
      date: "2024-01-05",
      cost: "2,500,000 VNĐ",
      status: "completed"
    },
    {
      id: 2,
      type: "Bảo dưỡng 10,000km",
      vehicle: "VinFast VF8", 
      date: "2023-12-28",
      cost: "1,800,000 VNĐ",
      status: "completed"
    }
  ];

  const notifications = [
    {
      id: 1,
      type: "reminder",
      title: "Nhắc nhở bảo dưỡng",
      message: "Tesla Model 3 sắp đến hạn bảo dưỡng 15,000km",
      time: "2 giờ trước"
    },
    {
      id: 2,
      type: "payment",
      title: "Thanh toán thành công",
      message: "Gói bảo dưỡng Premium đã được gia hạn",
      time: "1 ngày trước"
    }
  ];

  return (
    <DashboardLayout role="customer" activeTab="dashboard">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Chào mừng trở lại!</h1>
            <p className="text-muted-foreground">Quản lý xe điện và dịch vụ của bạn</p>
          </div>
          <Button className="gradient-primary text-primary-foreground shadow-glow">
            <Calendar className="h-4 w-4 mr-2" />
            Đặt lịch mới
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Tổng số xe"
            value="2"
            icon={Car}
          />
          <StatsCard
            title="Lịch hẹn sắp tới"
            value="2"
            change="+1 tuần này"
            changeType="positive"
            icon={Calendar}
          />
          <StatsCard
            title="Chi phí tháng này"
            value="4.3M VNĐ"
            change="-15% so với tháng trước"
            changeType="positive"
            icon={CreditCard}
          />
          <StatsCard
            title="Thông báo mới"
            value="3"
            icon={Bell}
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Vehicle Status */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Services */}
            <Card className="p-6 shadow-card gradient-card border-0">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-foreground">Lịch hẹn sắp tới</h2>
                <Button variant="ghost" size="sm">Xem tất cả</Button>
              </div>
              <div className="space-y-4">
                {upcomingServices.map((service) => (
                  <div key={service.id} className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                        <Car className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">{service.type}</h3>
                        <p className="text-sm text-muted-foreground">{service.vehicle}</p>
                        <p className="text-sm text-muted-foreground">{service.center}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-foreground">{service.date}</p>
                      <p className="text-sm text-muted-foreground">{service.time}</p>
                      <Badge variant={service.status === 'confirmed' ? 'default' : 'secondary'} className="mt-1">
                        {service.status === 'confirmed' ? 'Đã xác nhận' : 'Chờ xác nhận'}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recent History */}
            <Card className="p-6 shadow-card gradient-card border-0">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-foreground">Lịch sử gần đây</h2>
                <Button variant="ghost" size="sm">Xem chi tiết</Button>
              </div>
              <div className="space-y-3">
                {recentHistory.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-background/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <div>
                        <p className="font-medium text-foreground">{item.type}</p>
                        <p className="text-sm text-muted-foreground">{item.vehicle} • {item.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-foreground">{item.cost}</p>
                      <Badge variant="outline" className="text-xs">Hoàn thành</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <QuickActions />
            
            {/* Vehicle Status */}
            <Card className="p-6 shadow-card gradient-card border-0">
              <h2 className="text-lg font-semibold text-foreground mb-4">Trạng thái xe</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-background/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Battery className="h-5 w-5 text-battery-green" />
                    <div>
                      <p className="font-medium text-foreground">Tesla Model 3</p>
                      <p className="text-sm text-muted-foreground">Pin: 85%</p>
                    </div>
                  </div>
                  <Badge className="bg-battery-green text-background">Tốt</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-background/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="h-5 w-5 text-warning" />
                    <div>
                      <p className="font-medium text-foreground">VinFast VF8</p>
                      <p className="text-sm text-muted-foreground">Cần bảo dưỡng</p>
                    </div>
                  </div>
                  <Badge variant="secondary">Cảnh báo</Badge>
                </div>
              </div>
            </Card>

            {/* Notifications */}
            <Card className="p-6 shadow-card gradient-card border-0">
              <h2 className="text-lg font-semibold text-foreground mb-4">Thông báo</h2>
              <div className="space-y-3">
                {notifications.map((notification) => (
                  <div key={notification.id} className="p-3 bg-background/30 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <div className="flex-1">
                        <p className="font-medium text-foreground text-sm">{notification.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{notification.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CustomerDashboard;