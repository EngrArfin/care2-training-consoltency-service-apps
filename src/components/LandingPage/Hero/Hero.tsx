import Image from "next/image";
import image from "../../../UI/image/card1.jpeg"; // Adjust the path as needed

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="Background"
          width={1920}
          height={500}
          objectFit="cover"
          objectPosition="center"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Your Gateway to Global Opportunities
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Unlock your future with expert consultancy for visa applications,
          study abroad, and work placements.
        </p>
        <button className="px-6 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 transition-colors duration-300 rounded-lg shadow-lg">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
