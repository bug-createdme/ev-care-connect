import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  CreditCard, 
  Calendar, 
  Receipt, 
  Plus,
  Trash2,
  CheckCircle,
  Clock,
  AlertCircle,
  Download,
  Wallet,
  Building2
} from "lucide-react";
import { useState } from "react";

const PaymentPage = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("card1");

  const paymentMethods = [
    {
      id: "card1",
      type: "card",
      name: "Visa **** 4532",
      expiry: "12/26",
      isDefault: true
    },
    {
      id: "card2", 
      type: "card",
      name: "MasterCard **** 8901",
      expiry: "08/25",
      isDefault: false
    },
    {
      id: "wallet1",
      type: "wallet",
      name: "MoMo Wallet",
      balance: "2,450,000 VNĐ",
      isDefault: false
    }
  ];

  const invoices = [
    {
      id: "INV-001",
      date: "2024-01-15",
      service: "Bảo dưỡng định kỳ - Honda City",
      amount: "1,200,000 VNĐ",
      status: "paid",
      dueDate: "2024-01-20"
    },
    {
      id: "INV-002", 
      date: "2024-01-10",
      service: "Thay lốp xe - VinFast VF8",
      amount: "800,000 VNĐ", 
      status: "pending",
      dueDate: "2024-01-25"
    },
    {
      id: "INV-003",
      date: "2024-01-05", 
      service: "Kiểm tra pin - Tesla Model 3",
      amount: "500,000 VNĐ",
      status: "overdue",
      dueDate: "2024-01-15"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "paid":
        return <Badge className="bg-green-500/20 text-green-700 border-green-200"><CheckCircle className="h-3 w-3 mr-1" />Đã thanh toán</Badge>;
      case "pending":
        return <Badge className="bg-yellow-500/20 text-yellow-700 border-yellow-200"><Clock className="h-3 w-3 mr-1" />Chờ thanh toán</Badge>;
      case "overdue":
        return <Badge className="bg-red-500/20 text-red-700 border-red-200"><AlertCircle className="h-3 w-3 mr-1" />Quá hạn</Badge>;
      default:
        return null;
    }
  };

  const getPaymentIcon = (type: string) => {
    switch (type) {
      case "card":
        return <CreditCard className="h-4 w-4" />;
      case "wallet":
        return <Wallet className="h-4 w-4" />;
      default:
        return <Building2 className="h-4 w-4" />;
    }
  };

  return (
    <DashboardLayout role="customer" activeTab="payment">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Thanh toán & Hóa đơn</h1>
            <p className="text-muted-foreground">Quản lý phương thức thanh toán và theo dõi hóa đơn</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Payment Methods */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6 shadow-card gradient-card border-0">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Phương thức thanh toán
                </h3>
                <Button size="sm" className="gradient-primary text-primary-foreground shadow-glow">
                  <Plus className="h-4 w-4 mr-1" />
                  Thêm
                </Button>
              </div>
              
              <div className="space-y-3">
                {paymentMethods.map((method) => (
                  <div 
                    key={method.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedPaymentMethod === method.id 
                        ? 'border-primary bg-primary/5' 
                        : 'border-border bg-card'
                    }`}
                    onClick={() => setSelectedPaymentMethod(method.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {getPaymentIcon(method.type)}
                        <div>
                          <p className="font-medium text-foreground">{method.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {method.type === 'card' ? `Hết hạn: ${method.expiry}` : method.balance}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {method.isDefault && (
                          <Badge variant="secondary" className="text-xs">Mặc định</Badge>
                        )}
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Payment */}
            <Card className="p-6 shadow-card gradient-card border-0">
              <h3 className="text-lg font-semibold text-foreground mb-4">Thanh toán nhanh</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="amount">Số tiền</Label>
                  <Input 
                    id="amount" 
                    placeholder="Nhập số tiền cần thanh toán"
                    className="text-right"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="invoice">Mã hóa đơn (tùy chọn)</Label>
                  <Input 
                    id="invoice" 
                    placeholder="INV-001"
                  />
                </div>
                <Button className="w-full gradient-primary text-primary-foreground shadow-glow">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Thanh toán ngay
                </Button>
              </div>
            </Card>
          </div>

          {/* Invoices & History */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Invoices */}
            <Card className="p-6 shadow-card gradient-card border-0">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground flex items-center">
                  <Receipt className="h-5 w-5 mr-2" />
                  Hóa đơn hiện tại
                </h3>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    Lọc theo tháng
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                {invoices.map((invoice) => (
                  <div key={invoice.id} className="border border-border rounded-lg p-4 bg-background/50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div>
                          <p className="font-medium text-foreground">{invoice.id}</p>
                          <p className="text-sm text-muted-foreground">{invoice.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-foreground">{invoice.amount}</p>
                        {getStatusBadge(invoice.status)}
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-2">{invoice.service}</p>
                    
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-muted-foreground">
                        Hạn thanh toán: {invoice.dueDate}
                      </p>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Tải về
                        </Button>
                        {invoice.status !== 'paid' && (
                          <Button size="sm" className="gradient-primary text-primary-foreground shadow-glow">
                            Thanh toán
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Payment Summary */}
            <Card className="p-6 shadow-card gradient-card border-0">
              <h3 className="text-lg font-semibold text-foreground mb-4">Tổng quan thanh toán</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 border border-border rounded-lg bg-background/50">
                  <p className="text-2xl font-bold text-foreground">8,800,000 VNĐ</p>
                  <p className="text-sm text-muted-foreground">Tổng đã thanh toán</p>
                </div>
                <div className="text-center p-4 border border-border rounded-lg bg-background/50">
                  <p className="text-2xl font-bold text-yellow-600">1,300,000 VNĐ</p>
                  <p className="text-sm text-muted-foreground">Chờ thanh toán</p>
                </div>
                <div className="text-center p-4 border border-border rounded-lg bg-background/50">
                  <p className="text-2xl font-bold text-green-600">500,000 VNĐ</p>
                  <p className="text-sm text-muted-foreground">Tiết kiệm tháng này</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PaymentPage;