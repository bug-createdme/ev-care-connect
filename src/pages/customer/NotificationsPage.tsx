import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, Car, CreditCard, Settings, CheckCircle2, Clock, AlertTriangle } from "lucide-react";

const NotificationsPage = () => {
  const notifications = [
    {
      id: 1,
      type: "maintenance",
      title: "Bảo dưỡng định kỳ sắp đến hạn",
      message: "Tesla Model 3 của bạn cần bảo dưỡng định kỳ sau 2 ngày (15,000 km)",
      time: "2 giờ trước",
      isRead: false,
      icon: Car,
      priority: "high"
    },
    {
      id: 2,
      type: "booking",
      title: "Lịch hẹn được xác nhận",
      message: "Lịch bảo dưỡng ngày 28/09/2025 lúc 09:00 đã được xác nhận",
      time: "5 giờ trước",
      isRead: false,
      icon: CheckCircle2,
      priority: "medium"
    },
    {
      id: 3,
      type: "payment",
      title: "Thanh toán thành công",
      message: "Đã thanh toán 2,500,000 VND cho dịch vụ bảo dưỡng định kỳ",
      time: "1 ngày trước",
      isRead: true,
      icon: CreditCard,
      priority: "low"
    },
    {
      id: 4,
      type: "service",
      title: "Dịch vụ hoàn tất",
      message: "Xe Tesla Model 3 đã hoàn tất bảo dưỡng. Vui lòng đến nhận xe",
      time: "2 ngày trước",
      isRead: true,
      icon: CheckCircle2,
      priority: "medium"
    },
    {
      id: 5,
      type: "reminder",
      title: "Gia hạn gói bảo dưỡng",
      message: "Gói bảo dưỡng VIP sẽ hết hạn sau 7 ngày. Gia hạn ngay để được ưu đãi",
      time: "3 ngày trước",
      isRead: true,
      icon: Clock,
      priority: "medium"
    },
    {
      id: 6,
      type: "system",
      title: "Cập nhật hệ thống",
      message: "Hệ thống sẽ bảo trì từ 23:00-01:00 ngày 30/09/2025",
      time: "1 tuần trước",
      isRead: true,
      icon: Settings,
      priority: "low"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "default";
      case "low": return "secondary";
      default: return "default";
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high": return AlertTriangle;
      case "medium": return Bell;
      case "low": return CheckCircle2;
      default: return Bell;
    }
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <DashboardLayout role="customer" activeTab="notifications">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Thông báo</h1>
            <p className="text-gray-600 mt-2">
              Quản lý tất cả thông báo về xe và dịch vụ của bạn
            </p>
          </div>
          {unreadCount > 0 && (
            <Badge variant="destructive" className="text-sm">
              {unreadCount} chưa đọc
            </Badge>
          )}
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Hành động nhanh</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-4">
            <Button variant="outline" size="sm">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Đánh dấu tất cả đã đọc
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Cài đặt thông báo
            </Button>
          </CardContent>
        </Card>

        {/* Notifications List */}
        <div className="space-y-4">
          {notifications.map((notification) => {
            const IconComponent = notification.icon;
            const PriorityIcon = getPriorityIcon(notification.priority);
            
            return (
              <Card key={notification.id} className={`transition-all duration-200 hover:shadow-md ${
                !notification.isRead ? 'border-l-4 border-l-primary bg-primary/5' : ''
              }`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-full ${
                      !notification.isRead ? 'bg-primary text-primary-foreground' : 'bg-gray-100 text-gray-600'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className={`font-semibold ${
                          !notification.isRead ? 'text-gray-900' : 'text-gray-700'
                        }`}>
                          {notification.title}
                        </h3>
                        <Badge variant={getPriorityColor(notification.priority)} className="text-xs">
                          <PriorityIcon className="w-3 h-3 mr-1" />
                          {notification.priority === 'high' ? 'Khẩn cấp' : 
                           notification.priority === 'medium' ? 'Quan trọng' : 'Thông thường'}
                        </Badge>
                      </div>
                      
                      <p className={`text-sm ${
                        !notification.isRead ? 'text-gray-700' : 'text-gray-500'
                      } mb-2`}>
                        {notification.message}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">{notification.time}</span>
                        <div className="flex gap-2">
                          {!notification.isRead && (
                            <Button variant="ghost" size="sm" className="text-xs">
                              Đánh dấu đã đọc
                            </Button>
                          )}
                          <Button variant="ghost" size="sm" className="text-xs">
                            Chi tiết
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Load More */}
        <div className="text-center py-4">
          <Button variant="outline">
            Xem thêm thông báo
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NotificationsPage;