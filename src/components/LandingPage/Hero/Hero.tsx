import Image from "next/image";
import image from "../../../UI/image/card1.jpeg";

const Hero: React.FC = () => {
  return (
    <section className="relative h-[90vh] lg:h-screen">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="Background"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px"
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Your Gateway to Global Opportunities
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl">
          Unlock your future with expert consultancy for visa applications,
          study abroad, and work placements.
        </p>
        <button className="px-6 py-3 text-sm sm:text-base font-semibold bg-blue-900 hover:bg-blue-700 transition-colors duration-300 rounded-lg shadow-lg">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
