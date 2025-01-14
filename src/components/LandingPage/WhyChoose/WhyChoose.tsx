import React from "react";
import HeaderTitle from "../Shared/HeaderTitle";

const WhyChoose: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto text-center">
        <HeaderTitle
          heading={"Why Choose Us"}
          generalText={"---------------"}
        />
        <p className="text-lg text-gray-600 mb-12">
          Our consultancy provides a unique blend of personalized services aimed
          at helping you achieve your global goals. Here are the reasons why we
          are the trusted choice for individuals seeking professional assistance
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-12 h-12 text-blue-600 mb-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Knowledgeable Experts
            </h3>
            <p className="text-gray-600">
              Work with our skilled consultants who bring years of knowledge and
              experience to guide you through your global journey.
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-12 h-12 text-blue-600 mb-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Custom-Tailored Plans
            </h3>
            <p className="text-gray-600">
              Receive customized strategies and solutions designed specifically
              to meet your needs and objectives.
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-12 h-12 text-blue-600 mb-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 2l4 4-4 4M10 2l-4 4 4 4"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Global Opportunities
            </h3>
            <p className="text-gray-600">
              Our extensive global network connects you with opportunities
              across multiple industries and countries.
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-12 h-12 text-blue-600 mb-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 11l-4-4m0 0l-4 4m4-4v12"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Proven Track Record
            </h3>
            <p className="text-gray-600">
              Trust in our history of successful client outcomes, from seamless
              visa processing to career placements.
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-12 h-12 text-blue-600 mb-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12h18"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Transparent Approach
            </h3>
            <p className="text-gray-600">
              We pride ourselves on clear communication and keeping you updated
              at every stage of your journey.
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-12 h-12 text-blue-600 mb-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6h6v6M9 5V3h6v2M7 5h10M7 3h10M5 5v14"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Comprehensive Support
            </h3>
            <p className="text-gray-600">
              From your first consultation to final implementation, we provide
              guidance at every step of the process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
