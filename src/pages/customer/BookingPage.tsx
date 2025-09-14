import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar as CalendarIcon, Clock, MapPin, Car, Zap } from "lucide-react";
import { useState } from "react";

const BookingPage = () => {
  const [selectedService, setSelectedService] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [selectedCenter, setSelectedCenter] = useState("");

  const serviceTypes = [
    { id: "maintenance", name: "Bảo dưỡng định kỳ", price: "1,500,000 VNĐ" },
    { id: "battery-check", name: "Kiểm tra pin", price: "500,000 VNĐ" },
    { id: "repair", name: "Sửa chữa", price: "Tùy theo tình trạng" },
    { id: "inspection", name: "Kiểm định an toàn", price: "800,000 VNĐ" },
  ];

  const vehicles = [
    { id: "tesla-model3", name: "Tesla Model 3", vin: "5YJ3E1EA***", year: "2022" },
    { id: "vinfast-vf8", name: "VinFast VF8", vin: "LJNCGBBB***", year: "2023" },
  ];

  const serviceCenters = [
    { id: "hanoi", name: "EV Center Hà Nội", address: "123 Trần Hưng Đạo, Ba Đình" },
    { id: "hcm", name: "EV Center TP.HCM", address: "456 Nguyễn Huệ, Quận 1" },
    { id: "danang", name: "EV Center Đà Nẵng", address: "789 Lê Duẩn, Hải Châu" },
  ];

  return (
    <DashboardLayout role="customer" activeTab="booking">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Đặt lịch dịch vụ</h1>
            <p className="text-muted-foreground">Đặt lịch bảo dưỡng và sửa chữa xe điện</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="p-6 shadow-card gradient-card border-0">
              <h2 className="text-xl font-semibold text-foreground mb-6">Thông tin đặt lịch</h2>
              
              <div className="space-y-6">
                {/* Vehicle Selection */}
                <div className="space-y-2">
                  <Label htmlFor="vehicle">Chọn xe</Label>
                  <Select value={selectedVehicle} onValueChange={setSelectedVehicle}>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn xe của bạn" />
                    </SelectTrigger>
                    <SelectContent>
                      {vehicles.map((vehicle) => (
                        <SelectItem key={vehicle.id} value={vehicle.id}>
                          <div className="flex items-center space-x-2">
                            <Car className="h-4 w-4" />
                            <span>{vehicle.name} ({vehicle.year})</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Service Type */}
                <div className="space-y-2">
                  <Label htmlFor="service">Loại dịch vụ</Label>
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn loại dịch vụ" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceTypes.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          <div className="flex justify-between w-full">
                            <span>{service.name}</span>
                            <span className="text-muted-foreground ml-4">{service.price}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Service Center */}
                <div className="space-y-2">
                  <Label htmlFor="center">Trung tâm dịch vụ</Label>
                  <Select value={selectedCenter} onValueChange={setSelectedCenter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn trung tâm dịch vụ" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceCenters.map((center) => (
                        <SelectItem key={center.id} value={center.id}>
                          <div className="flex items-start space-x-2">
                            <MapPin className="h-4 w-4 mt-0.5" />
                            <div>
                              <div className="font-medium">{center.name}</div>
                              <div className="text-xs text-muted-foreground">{center.address}</div>
                            </div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Ngày</Label>
                    <div className="relative">
                      <Input 
                        type="date" 
                        className="pl-10" 
                        min={new Date().toISOString().split('T')[0]}
                      />
                      <CalendarIcon className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Giờ</Label>
                    <div className="relative">
                      <Select>
                        <SelectTrigger className="pl-10">
                          <SelectValue placeholder="Chọn giờ" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="08:00">08:00</SelectItem>
                          <SelectItem value="09:00">09:00</SelectItem>
                          <SelectItem value="10:00">10:00</SelectItem>
                          <SelectItem value="11:00">11:00</SelectItem>
                          <SelectItem value="14:00">14:00</SelectItem>
                          <SelectItem value="15:00">15:00</SelectItem>
                          <SelectItem value="16:00">16:00</SelectItem>
                        </SelectContent>
                      </Select>
                      <Clock className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <Label htmlFor="notes">Ghi chú (tùy chọn)</Label>
                  <Textarea 
                    id="notes" 
                    placeholder="Mô tả chi tiết tình trạng xe hoặc yêu cầu đặc biệt..."
                    className="min-h-[100px]"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end space-x-4">
                  <Button variant="outline">
                    Hủy
                  </Button>
                  <Button className="gradient-primary text-primary-foreground shadow-glow">
                    <Zap className="h-4 w-4 mr-2" />
                    Xác nhận đặt lịch
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Booking Summary */}
          <div className="space-y-6">
            <Card className="p-6 shadow-card gradient-card border-0">
              <h3 className="text-lg font-semibold text-foreground mb-4">Tóm tắt đặt lịch</h3>
              <div className="space-y-4">
                {selectedVehicle && (
                  <div className="flex items-center space-x-3 p-3 bg-background/30 rounded-lg">
                    <Car className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">
                        {vehicles.find(v => v.id === selectedVehicle)?.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {vehicles.find(v => v.id === selectedVehicle)?.vin}
                      </p>
                    </div>
                  </div>
                )}

                {selectedService && (
                  <div className="flex items-center space-x-3 p-3 bg-background/30 rounded-lg">
                    <Zap className="h-5 w-5 text-secondary" />
                    <div>
                      <p className="font-medium text-foreground">
                        {serviceTypes.find(s => s.id === selectedService)?.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {serviceTypes.find(s => s.id === selectedService)?.price}
                      </p>
                    </div>
                  </div>
                )}

                {selectedCenter && (
                  <div className="flex items-start space-x-3 p-3 bg-background/30 rounded-lg">
                    <MapPin className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">
                        {serviceCenters.find(c => c.id === selectedCenter)?.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {serviceCenters.find(c => c.id === selectedCenter)?.address}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {/* Recent Bookings */}
            <Card className="p-6 shadow-card gradient-card border-0">
              <h3 className="text-lg font-semibold text-foreground mb-4">Lịch hẹn gần đây</h3>
              <div className="space-y-3">
                <div className="p-3 bg-background/30 rounded-lg">
                  <p className="font-medium text-foreground">Bảo dưỡng định kỳ</p>
                  <p className="text-sm text-muted-foreground">Tesla Model 3 • 15/01/2024</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs bg-success/20 text-success px-2 py-1 rounded">
                      Đã xác nhận
                    </span>
                  </div>
                </div>
                <div className="p-3 bg-background/30 rounded-lg">
                  <p className="font-medium text-foreground">Kiểm tra pin</p>
                  <p className="text-sm text-muted-foreground">VinFast VF8 • 20/01/2024</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs bg-warning/20 text-warning px-2 py-1 rounded">
                      Chờ xác nhận
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BookingPage;