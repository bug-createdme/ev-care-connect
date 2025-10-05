
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RoleDetail6ChienLuoc from "./pages/RoleDetail6_ChienLuoc";
import ContactMeaning from "./pages/ContactMeaning";
import RoleDetail1VaiTro from "./pages/RoleDetail1_VaiTro";
import RoleDetail2LucLuong from "./pages/RoleDetail2_LucLuong";
import RoleDetail3DieuKien from "./pages/RoleDetail3_DieuKien";
import RoleDetail4ToChuc from "./pages/RoleDetail4_ToChuc";
import RoleDetail5PhuongThuc from "./pages/RoleDetail5_PhuongThuc";




const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="vai-tro-dai-doan-ket" element={<RoleDetail1VaiTro />} />
      <Route path="luc-luong-cau-thanh" element={<RoleDetail2LucLuong />} />
      <Route path="dieu-kien-xay-dung" element={<RoleDetail3DieuKien />} />
      <Route path="to-chuc-khoi-dai-doan-ket" element={<RoleDetail4ToChuc />} />
      <Route path="phuong-thuc-xay-dung" element={<RoleDetail5PhuongThuc />} />
  <Route path="chien-luoc-lau-dai" element={<RoleDetail6ChienLuoc />} />
  <Route path="lien-he" element={<ContactMeaning />} />
  <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
