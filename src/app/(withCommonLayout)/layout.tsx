import Footer from "@/components/LandingPage/Shared/Footer";
import NavBar from "@/components/LandingPage/Shared/NavBar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default CommonLayout;
