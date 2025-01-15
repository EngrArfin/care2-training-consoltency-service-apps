import React from "react";
import HeaderTitle from "../Shared/HeaderTitle";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { SiFuturelearn, SiProcesswire } from "react-icons/si";
import { BiSolidOffer, BiSupport } from "react-icons/bi";
import { BsRecordBtn } from "react-icons/bs";

const WhyChoose: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto text-center">
        <HeaderTitle heading={"Why Choose Us"} generalText={""} />
        <p className="text-lg text-gray-600 mb-12">
          Our consultancy provides a unique blend of personalized services aimed
          at helping you achieve your global goals. Here are the reasons why we
          are the trusted choice for individuals seeking professional assistance
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6">
            <GiGiftOfKnowledge />

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Knowledgeable Experts
            </h3>
            <p className="text-gray-600">
              Work with our skilled consultants who bring years of knowledge and
              experience to guide you through your global journey.
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6">
            <SiFuturelearn />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Custom-Tailored Plans
            </h3>
            <p className="text-gray-600">
              Receive customized strategies and solutions designed specifically
              to meet your needs and objectives.
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6">
            <BiSolidOffer />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Global Opportunities
            </h3>
            <p className="text-gray-600">
              Our extensive global network connects you with opportunities
              across multiple industries and countries.
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6">
            <BsRecordBtn />

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Proven Track Record
            </h3>
            <p className="text-gray-600">
              Trust in our history of successful client outcomes, from seamless
              visa processing to career placements.
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6">
            <SiProcesswire />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Transparent Approach
            </h3>
            <p className="text-gray-600">
              We pride ourselves on clear communication and keeping you updated
              at every stage of your journey.
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6">
            <BiSupport />

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
