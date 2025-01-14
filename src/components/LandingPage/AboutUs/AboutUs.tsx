import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            About Us
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Career Elevate Consultancy, we empower individuals to achieve
            their professional dreams through tailored career training, expert
            guidance, and strategic support. With a team of seasoned
            professionals and a history of delivering exceptional results, we
            specialize in streamlining the process of upskilling, career
            transitions, and visa applications for study and work abroad.
            Dedicated to excellence, we provide innovative solutions to help you
            navigate the complexities of global career opportunities and succeed
            in your journey toward success.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Expertise Section */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 11.5a3.5 3.5 0 00.263 6.996m4.987-2.496a3.5 3.5 0 10-2.754-4.753m2.744-2.744a3.5 3.5 0 11-4.76-4.757M5 13v1m5-4V7m0 4v3m0 1h-2.5M9 3.5h1.5m-3.5 5H5"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Career Training
            </h3>
            <p className="text-gray-600">
              Build the skills you need to excel in a competitive job market
              through our specialized training programs.
            </p>
          </div>
          {/* Global Opportunities Section */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 8a6.5 6.5 0 01-13 0v-3.5a6.5 6.5 0 0113 0V8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Global Opportunities
            </h3>
            <p className="text-gray-600">
              Unlock international pathways for studying and working abroad
              through our expert consultancy services.
            </p>
          </div>
          {/* Visa Assistance Section */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 11.5a3.5 3.5 0 00.263 6.996m4.987-2.496a3.5 3.5 0 10-2.754-4.753m2.744-2.744a3.5 3.5 0 11-4.76-4.757M5 13v1m5-4V7m0 4v3m0 1h-2.5M9 3.5h1.5m-3.5 5H5"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Visa Assistance
            </h3>
            <p className="text-gray-600">
              Simplify the complexities of visa applications with our dedicated
              support and personalized solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
