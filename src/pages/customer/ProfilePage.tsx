import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Camera,
  Bell,
  Shield,
  CreditCard,
  Car,
  Settings,
  Save,
  Edit
} from "lucide-react";
import { useState } from "react";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [notifications, setNotifications] = useState({
    serviceReminders: true,
    paymentDue: true,
    promotions: false,
    systemUpdates: true
  });

  const customerInfo = {
    name: "Nguyễn Văn Nam",
    email: "nguyenvannam@email.com", 
    phone: "+84 912 345 678",
    address: "123 Trần Hưng Đạo, Ba Đình, Hà Nội",
    joinDate: "15/03/2023",
    membershipLevel: "Premium",
    totalSpent: "8,800,000 VNĐ",
    avatar: "/placeholder.svg"
  };

  const membershipBenefits = [
    "Giảm giá 15% tất cả dịch vụ",
    "Ưu tiên đặt lịch hẹn",
    "Miễn phí kiểm tra định kỳ",
    "Hỗ trợ 24/7",
    "Tích điểm thưởng"
  ];

  return (
    <DashboardLayout role="customer" activeTab="profile">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Hồ sơ cá nhân</h1>
            <p className="text-muted-foreground">Quản lý thông tin cá nhân và cài đặt tài khoản</p>
          </div>
          <Button 
            onClick={() => setIsEditing(!isEditing)}
            variant={isEditing ? "outline" : "default"}
          >
            {isEditing ? (
              <>
                <Settings className="h-4 w-4 mr-2" />
                Hủy
              </>
            ) : (
              <>
                <Edit className="h-4 w-4 mr-2" />
                Chỉnh sửa
              </>
            )}
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Profile Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Info */}
            <Card className="p-6 shadow-card gradient-card border-0">
              <div className="flex items-center space-x-6 mb-6">
                <div className="relative">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={customerInfo.avatar} />
                    <AvatarFallback className="text-lg font-semibold gradient-primary text-primary-foreground">
                      {customerInfo.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <Button 
                      size="sm" 
                      className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{customerInfo.name}</h2>
                  <p className="text-muted-foreground">{customerInfo.email}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <Badge className="gradient-primary text-primary-foreground">
                      {customerInfo.membershipLevel}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      Khách hàng từ {customerInfo.joinDate}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Họ và tên</Label>
                    <div className="relative">
                      <Input 
                        id="name" 
                        defaultValue={customerInfo.name}
                        disabled={!isEditing}
                        className="pl-10"
                      />
                      <User className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Input 
                        id="email" 
                        type="email"
                        defaultValue={customerInfo.email}
                        disabled={!isEditing}
                        className="pl-10"
                      />
                      <Mail className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Số điện thoại</Label>
                    <div className="relative">
                      <Input 
                        id="phone" 
                        defaultValue={customerInfo.phone}
                        disabled={!isEditing}
                        className="pl-10"
                      />
                      <Phone className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="membership">Hạng thành viên</Label>
                    <div className="relative">
                      <Input 
                        id="membership" 
                        value={customerInfo.membershipLevel}
                        disabled
                        className="pl-10"
                      />
                      <Shield className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Địa chỉ</Label>
                  <div className="relative">
                    <Textarea 
                      id="address" 
                      defaultValue={customerInfo.address}
                      disabled={!isEditing}
                      className="pl-10 min-h-[80px]"
                    />
                    <MapPin className="h-4 w-4 absolute left-3 top-3 text-muted-foreground" />
                  </div>
                </div>

                {isEditing && (
                  <div className="flex justify-end space-x-3">
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Hủy
                    </Button>
                    <Button className="gradient-primary text-primary-foreground shadow-glow">
                      <Save className="h-4 w-4 mr-2" />
                      Lưu thay đổi
                    </Button>
                  </div>
                )}
              </div>
            </Card>

            {/* Notification Settings */}
            <Card className="p-6 shadow-card gradient-card border-0">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                Cài đặt thông báo
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Nhắc nhở bảo dưỡng</p>
                    <p className="text-sm text-muted-foreground">Nhận thông báo khi đến hạn bảo dưỡng</p>
                  </div>
                  <Switch 
                    checked={notifications.serviceReminders}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, serviceReminders: checked }))
                    }
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Nhắc thanh toán</p>
                    <p className="text-sm text-muted-foreground">Thông báo khi có hóa đơn cần thanh toán</p>
                  </div>
                  <Switch 
                    checked={notifications.paymentDue}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, paymentDue: checked }))
                    }
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Khuyến mãi</p>
                    <p className="text-sm text-muted-foreground">Nhận thông báo về chương trình ưu đãi</p>
                  </div>
                  <Switch 
                    checked={notifications.promotions}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, promotions: checked }))
                    }
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Cập nhật hệ thống</p>
                    <p className="text-sm text-muted-foreground">Thông báo về các cập nhật mới</p>
                  </div>
                  <Switch 
                    checked={notifications.systemUpdates}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, systemUpdates: checked }))
                    }
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Membership Info */}
            <Card className="p-6 shadow-card gradient-card border-0">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Thành viên Premium
              </h3>
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">{customerInfo.totalSpent}</p>
                  <p className="text-sm text-muted-foreground">Tổng chi tiêu</p>
                </div>
                <Separator />
                <div>
                  <p className="font-medium text-foreground mb-2">Quyền lợi thành viên:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {membershipBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="p-6 shadow-card gradient-card border-0">
              <h3 className="text-lg font-semibold text-foreground mb-4">Thống kê nhanh</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Car className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Số xe</span>
                  </div>
                  <span className="font-semibold text-foreground">2</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Settings className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Lần bảo dưỡng</span>
                  </div>
                  <span className="font-semibold text-foreground">5</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Lần thanh toán</span>
                  </div>
                  <span className="font-semibold text-foreground">12</span>
                </div>
              </div>
            </Card>

            {/* Security */}
            <Card className="p-6 shadow-card gradient-card border-0">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Bảo mật
              </h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Shield className="h-4 w-4 mr-2" />
                  Đổi mật khẩu
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="h-4 w-4 mr-2" />
                  Xác thực 2 bước
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-2" />
                  Quản lý phiên đăng nhập
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProfilePage;