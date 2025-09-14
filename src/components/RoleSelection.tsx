import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Wrench, Settings, UserCheck } from "lucide-react";

const RoleSelection = () => {
  const roles = [
    {
      id: "customer",
      title: "Khách hàng",
      description: "Đặt lịch bảo dưỡng, theo dõi xe, thanh toán online",
      icon: User,
      features: [
        "Đặt lịch bảo dưỡng/sửa chữa",
        "Theo dõi trạng thái xe điện",
        "Lịch sử bảo dưỡng chi tiết",
        "Thanh toán online an toàn"
      ],
      color: "gradient-primary"
    },
    {
      id: "staff",
      title: "Nhân viên",
      description: "Tiếp nhận khách hàng, quản lý lịch hẹn, chat support",
      icon: UserCheck,
      features: [
        "Quản lý hồ sơ khách hàng",
        "Tiếp nhận yêu cầu đặt lịch",
        "Chat trực tuyến với khách",
        "Lập phiếu tiếp nhận dịch vụ"
      ],
      color: "gradient-secondary"
    },
    {
      id: "technician",
      title: "Kỹ thuật viên",
      description: "Thực hiện bảo dưỡng, ghi nhận tình trạng xe",
      icon: Wrench,
      features: [
        "Nhận phân công công việc",
        "Checklist bảo dưỡng EV",
        "Ghi nhận tình trạng xe",
        "Cập nhật tiến độ công việc"
      ],
      color: "bg-warning text-warning-foreground"
    },
    {
      id: "admin",
      title: "Quản trị viên",
      description: "Quản lý toàn bộ hệ thống, báo cáo, phân tích",
      icon: Settings,
      features: [
        "Quản lý nhân sự & phân ca",
        "Báo cáo doanh thu & chi phí",
        "Quản lý kho phụ tùng",
        "Phân tích xu hướng & AI insights"
      ],
      color: "bg-destructive text-destructive-foreground"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Chọn <span className="gradient-primary bg-clip-text text-transparent">vai trò</span> của bạn
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hệ thống được thiết kế cho 4 nhóm người dùng với các tính năng chuyên biệt
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => (
            <Card 
              key={role.id} 
              className="p-6 shadow-card hover:shadow-glow transition-smooth cursor-pointer group border-0 gradient-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                {/* Icon & Title */}
                <div className="space-y-3">
                  <div className={`w-16 h-16 rounded-xl ${role.color} flex items-center justify-center group-hover:scale-110 transition-bounce`}>
                    <role.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{role.title}</h3>
                    <p className="text-sm text-muted-foreground">{role.description}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {role.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className="w-full group-hover:shadow-glow transition-smooth"
                  variant={role.id === 'customer' ? 'default' : 'outline'}
                  onClick={() => {
                    if (role.id === 'customer') {
                      window.location.href = '/customer';
                    } else {
                      // For demo purposes, show alert for other roles
                      alert(`${role.title} dashboard sẽ được phát triển trong phiên bản tiếp theo!`);
                    }
                  }}
                >
                  Truy cập {role.title}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Demo Section */}
        <div className="text-center mt-16">
          <Card className="inline-block p-8 shadow-card gradient-card border-0">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                Dùng thử miễn phí
              </h3>
              <p className="text-muted-foreground max-w-md">
                Khám phá toàn bộ tính năng của hệ thống quản lý bảo dưỡng xe điện
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  className="gradient-primary text-primary-foreground shadow-glow"
                  onClick={() => window.location.href = '/customer'}
                >
                  Bắt đầu dùng thử
                </Button>
                <Button variant="outline" className="border-primary text-primary">
                  Xem video demo
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RoleSelection;