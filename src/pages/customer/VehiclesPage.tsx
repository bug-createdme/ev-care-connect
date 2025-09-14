import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Car, 
  Battery, 
  Calendar, 
  AlertTriangle, 
  CheckCircle,
  Plus,
  Settings,
  BarChart3
} from "lucide-react";

const VehiclesPage = () => {
  const vehicles = [
    {
      id: 1,
      name: "Tesla Model 3",
      model: "Model 3 Long Range",
      year: 2022,
      vin: "5YJ3E1EA***",
      batteryLevel: 85,
      mileage: 24500,
      nextService: "15/01/2024",
      serviceType: "Bảo dưỡng định kỳ",
      status: "good",
      image: "/placeholder.svg",
      maintenanceHistory: [
        { date: "05/01/2024", type: "Thay lốp xe", cost: "2,500,000 VNĐ" },
        { date: "15/12/2023", type: "Bảo dưỡng 20,000km", cost: "1,800,000 VNĐ" },
        { date: "20/11/2023", type: "Kiểm tra pin", cost: "500,000 VNĐ" },
      ],
      alerts: []
    },
    {
      id: 2,
      name: "VinFast VF8", 
      model: "VF8 Plus",
      year: 2023,
      vin: "LJNCGBBB***",
      batteryLevel: 45,
      mileage: 12800,
      nextService: "20/01/2024",
      serviceType: "Kiểm tra pin",
      status: "warning",
      image: "/placeholder.svg",
      maintenanceHistory: [
        { date: "28/12/2023", type: "Bảo dưỡng 10,000km", cost: "1,800,000 VNĐ" },
        { date: "15/11/2023", type: "Kiểm định an toàn", cost: "800,000 VNĐ" },
      ],
      alerts: [
        { type: "battery", message: "Pin cần sạc" },
        { type: "maintenance", message: "Sắp đến hạn bảo dưỡng" }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'bg-success text-success-foreground';
      case 'warning': return 'bg-warning text-warning-foreground';
      case 'danger': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getBatteryColor = (level: number) => {
    if (level >= 70) return 'bg-battery-green';
    if (level >= 30) return 'bg-warning';
    return 'bg-destructive';
  };

  return (
    <DashboardLayout role="customer" activeTab="vehicles">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Xe của tôi</h1>
            <p className="text-muted-foreground">Quản lý và theo dõi trạng thái xe điện</p>
          </div>
          <Button className="gradient-primary text-primary-foreground shadow-glow">
            <Plus className="h-4 w-4 mr-2" />
            Thêm xe mới
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.id} className="p-6 shadow-card gradient-card border-0">
              {/* Vehicle Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-lg gradient-primary flex items-center justify-center">
                    <Car className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{vehicle.name}</h3>
                    <p className="text-muted-foreground">{vehicle.model} ({vehicle.year})</p>
                    <p className="text-sm text-muted-foreground">VIN: {vehicle.vin}</p>
                  </div>
                </div>
                <Badge className={getStatusColor(vehicle.status)}>
                  {vehicle.status === 'good' ? 'Tốt' : 
                   vehicle.status === 'warning' ? 'Cảnh báo' : 'Cần kiểm tra'}
                </Badge>
              </div>

              {/* Alerts */}
              {vehicle.alerts.length > 0 && (
                <div className="mb-4 space-y-2">
                  {vehicle.alerts.map((alert, index) => (
                    <div key={index} className="flex items-center space-x-2 p-2 bg-warning/10 rounded-lg">
                      <AlertTriangle className="h-4 w-4 text-warning" />
                      <span className="text-sm text-warning">{alert.message}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Vehicle Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Mức pin</span>
                    <span className="font-medium text-foreground">{vehicle.batteryLevel}%</span>
                  </div>
                  <Progress value={vehicle.batteryLevel} className="h-2" />
                  <div className={`h-2 rounded-full ${getBatteryColor(vehicle.batteryLevel)}`} 
                       style={{ width: `${vehicle.batteryLevel}%` }} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Quãng đường</span>
                  </div>
                  <p className="text-lg font-semibold text-foreground">
                    {vehicle.mileage.toLocaleString()} km
                  </p>
                </div>
              </div>

              {/* Next Service */}
              <div className="mb-6 p-4 bg-background/50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="font-medium text-foreground">Lịch bảo dưỡng tiếp theo</span>
                </div>
                <p className="text-muted-foreground">{vehicle.serviceType}</p>
                <p className="text-sm text-muted-foreground">{vehicle.nextService}</p>
              </div>

              {/* Maintenance History */}
              <div className="mb-6">
                <h4 className="font-medium text-foreground mb-3">Lịch sử bảo dưỡng</h4>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {vehicle.maintenanceHistory.slice(0, 3).map((record, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-background/30 rounded">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-success" />
                        <div>
                          <p className="text-sm font-medium text-foreground">{record.type}</p>
                          <p className="text-xs text-muted-foreground">{record.date}</p>
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">{record.cost}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <Button variant="outline" size="sm" className="flex-1">
                  <Calendar className="h-4 w-4 mr-2" />
                  Đặt lịch
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Settings className="h-4 w-4 mr-2" />
                  Chi tiết
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Vehicle Statistics */}
        <Card className="p-6 shadow-card gradient-card border-0">
          <h2 className="text-xl font-semibold text-foreground mb-6">Thống kê tổng quan</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mx-auto mb-2">
                <Car className="h-6 w-6 text-primary-foreground" />
              </div>
              <p className="text-2xl font-bold text-foreground">2</p>
              <p className="text-sm text-muted-foreground">Tổng số xe</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-battery-green/20 flex items-center justify-center mx-auto mb-2">
                <Battery className="h-6 w-6 text-battery-green" />
              </div>
              <p className="text-2xl font-bold text-foreground">65%</p>
              <p className="text-sm text-muted-foreground">Pin trung bình</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-2">
                <BarChart3 className="h-6 w-6 text-accent" />
              </div>
              <p className="text-2xl font-bold text-foreground">37,300</p>
              <p className="text-sm text-muted-foreground">Tổng km</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-2">
                <CheckCircle className="h-6 w-6 text-success" />
              </div>
              <p className="text-2xl font-bold text-foreground">5</p>
              <p className="text-sm text-muted-foreground">Lần bảo dưỡng</p>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default VehiclesPage;