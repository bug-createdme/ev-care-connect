import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RolePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default RolePageLayout;
