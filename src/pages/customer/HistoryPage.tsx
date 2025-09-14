import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Download, 
  Filter,
  CheckCircle,
  Car,
  CreditCard,
  Calendar,
  FileText,
  BarChart3
} from "lucide-react";
import { useState } from "react";

const HistoryPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterType, setFilterType] = useState("all");

  const serviceHistory = [
    {
      id: "SV001",
      date: "2024-01-05",
      type: "Thay lốp xe", 
      vehicle: "Tesla Model 3",
      center: "EV Center Hà Nội",
      cost: 2500000,
      status: "completed",
      paymentMethod: "Thẻ tín dụng",
      technician: "Nguyễn Văn A",
      duration: "2 giờ 30 phút",
      description: "Thay 4 lốp xe mùa đông, kiểm tra áp suất lốp"
    },
    {
      id: "SV002", 
      date: "2023-12-28",
      type: "Bảo dưỡng 10,000km",
      vehicle: "VinFast VF8",
      center: "EV Center HCM", 
      cost: 1800000,
      status: "completed",
      paymentMethod: "Chuyển khoản",
      technician: "Trần Văn B",
      duration: "3 giờ 15 phút",
      description: "Bảo dưỡng định kỳ: kiểm tra pin, hệ thống điều hòa, phanh"
    },
    {
      id: "SV003",
      date: "2023-12-15",
      type: "Kiểm tra pin",
      vehicle: "Tesla Model 3", 
      center: "EV Center Hà Nội",
      cost: 500000,
      status: "completed",
      paymentMethod: "Ví điện tử",
      technician: "Lê Văn C",
      duration: "1 giờ 45 phút",
      description: "Kiểm tra sức khỏe pin, cập nhật phần mềm BMS"
    },
    {
      id: "SV004",
      date: "2023-11-20",
      type: "Sửa chữa hệ thống sạc",
      vehicle: "VinFast VF8",
      center: "EV Center Đà Nẵng",
      cost: 3200000,
      status: "completed", 
      paymentMethod: "Thẻ tín dụng",
      technician: "Phạm Văn D",
      duration: "5 giờ 20 phút",
      description: "Sửa chữa cổng sạc AC, thay cáp sạc"
    },
    {
      id: "SV005",
      date: "2023-11-10",
      type: "Kiểm định an toàn",
      vehicle: "Tesla Model 3",
      center: "EV Center Hà Nội", 
      cost: 800000,
      status: "completed",
      paymentMethod: "Chuyển khoản",
      technician: "Hoàng Văn E",
      duration: "2 giờ 00 phút",
      description: "Kiểm định an toàn định kỳ, cấp giấy chứng nhận"
    }
  ];

  const filteredHistory = serviceHistory.filter(item => {
    const matchesSearch = item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.vehicle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || item.status === filterStatus;
    const matchesType = filterType === "all" || item.type.includes(filterType);
    
    return matchesSearch && matchesStatus && matchesType;
  });

  const totalCost = serviceHistory.reduce((sum, item) => sum + item.cost, 0);
  const avgCost = totalCost / serviceHistory.length;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + ' VNĐ';
  };

  return (
    <DashboardLayout role="customer" activeTab="history">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Lịch sử dịch vụ</h1>
            <p className="text-muted-foreground">Quản lý lịch sử bảo dưỡng và chi phí</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Xuất báo cáo
            </Button>
            <Button className="gradient-primary text-primary-foreground shadow-glow">
              <FileText className="h-4 w-4 mr-2" />
              Tạo báo cáo
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-6 shadow-card gradient-card border-0 text-center">
            <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="h-6 w-6 text-primary-foreground" />
            </div>
            <p className="text-2xl font-bold text-foreground">{serviceHistory.length}</p>
            <p className="text-sm text-muted-foreground">Tổng dịch vụ</p>
          </Card>

          <Card className="p-6 shadow-card gradient-card border-0 text-center">
            <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-3">
              <CreditCard className="h-6 w-6 text-success" />
            </div>
            <p className="text-2xl font-bold text-foreground">{formatCurrency(totalCost)}</p>
            <p className="text-sm text-muted-foreground">Tổng chi phí</p>
          </Card>

          <Card className="p-6 shadow-card gradient-card border-0 text-center">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
              <BarChart3 className="h-6 w-6 text-accent" />
            </div>
            <p className="text-2xl font-bold text-foreground">{formatCurrency(avgCost)}</p>
            <p className="text-sm text-muted-foreground">Chi phí trung bình</p>
          </Card>

          <Card className="p-6 shadow-card gradient-card border-0 text-center">
            <div className="w-12 h-12 rounded-full bg-warning/20 flex items-center justify-center mx-auto mb-3">
              <Car className="h-6 w-6 text-warning" />
            </div>
            <p className="text-2xl font-bold text-foreground">2</p>
            <p className="text-sm text-muted-foreground">Xe đã bảo dưỡng</p>
          </Card>
        </div>

        {/* Filters */}
        <Card className="p-6 shadow-card gradient-card border-0">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Tìm kiếm theo loại dịch vụ, xe, hoặc mã dịch vụ..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Loại dịch vụ" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả dịch vụ</SelectItem>
                <SelectItem value="Bảo dưỡng">Bảo dưỡng</SelectItem>
                <SelectItem value="Sửa chữa">Sửa chữa</SelectItem>
                <SelectItem value="Kiểm tra">Kiểm tra</SelectItem>
                <SelectItem value="Thay thế">Thay thế</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Trạng thái" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả</SelectItem>
                <SelectItem value="completed">Hoàn thành</SelectItem>
                <SelectItem value="pending">Đang xử lý</SelectItem>
                <SelectItem value="cancelled">Đã hủy</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        {/* Service History List */}
        <div className="space-y-4">
          {filteredHistory.map((item) => (
            <Card key={item.id} className="p-6 shadow-card gradient-card border-0">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{item.type}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                    <Badge className="bg-success text-success-foreground">
                      Hoàn thành
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Ngày:</span>
                      <span className="font-medium text-foreground">{item.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Car className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Xe:</span>
                      <span className="font-medium text-foreground">{item.vehicle}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CreditCard className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Thanh toán:</span>
                      <span className="font-medium text-foreground">{item.paymentMethod}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-muted-foreground">Thời gian:</span>
                      <span className="font-medium text-foreground">{item.duration}</span>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-border/50">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        <span>Mã dịch vụ: </span>
                        <span className="font-medium text-foreground">{item.id}</span>
                        <span className="mx-2">•</span>
                        <span>Kỹ thuật viên: </span>
                        <span className="font-medium text-foreground">{item.technician}</span>
                        <span className="mx-2">•</span>
                        <span>{item.center}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-bold text-foreground">{formatCurrency(item.cost)}</p>
                  <div className="flex space-x-2 mt-3">
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      Hóa đơn
                    </Button>
                    <Button variant="outline" size="sm">
                      Chi tiết
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredHistory.length === 0 && (
          <Card className="p-12 text-center shadow-card gradient-card border-0">
            <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">Không tìm thấy kết quả</h3>
            <p className="text-muted-foreground">Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
};

export default HistoryPage;