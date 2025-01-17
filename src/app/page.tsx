import AboutUs from "@/components/LandingPage/AboutUs/AboutUs";
import CartCard from "@/components/LandingPage/Card/CartCard";
import Contract from "@/components/LandingPage/Contract/Contract";
import Hero from "@/components/LandingPage/Hero/Hero";
import WhyChoose from "@/components/LandingPage/WhyChoose/WhyChoose";

export default function Home() {
  return (
    <div className=" ">
      <Hero />
      <AboutUs />
      <CartCard />
      <WhyChoose />
      <Contract />
    </div>
  );
}
