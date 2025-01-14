import AboutUs from "@/components/LandingPage/AboutUs/AboutUs";
import CartCard from "@/components/LandingPage/Card/CartCard";
import Hero from "@/components/LandingPage/Hero/Hero";

export default function Home() {
  return (
    <div className=" ">
      <Hero />
      <AboutUs />
      <CartCard />
    </div>
  );
}
