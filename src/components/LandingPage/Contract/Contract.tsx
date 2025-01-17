import Image from "next/image";
import footerphoto from "../../../UI/image/logo.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import HeaderTitle from "../Shared/HeaderTitle";
/* import { IoMdLogIn } from "react-icons/io"; */

const Contract: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white py-16 px-6">
      <HeaderTitle heading={"Contract"} generalText={""} />
      <div className="max-w-screen-lg mx-auto text-center">
        <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg mx-auto mb-8">
          <Image
            src={footerphoto || "/photo.png"}
            alt="Md Samsel Arfin"
            width={192}
            height={192}
            className="rounded-full"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-3xl font-bold text-white mb-4">CARE2 TRAINING</h3>
          <p className="text-white mb-8">
            Care2 Training specializes in study abroad, work abroad, and
            recruitment solutions. We provide personalized guidance, trusted
            partnerships, and seamless processes to help.
          </p>
          <div className="flex items-center mb-4">
            <div className="bg-blue-700 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-black"
              >
                <path d="M20 4h-16c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2h16c1.105 0 2-.895 2-2v-12c0-1.105-.895-2-2-2zm-10 9h-5v-2h5v2zm8 5h-16v-1h16v1zm-10-5h-5v-2h5v2zm5 0h-2v-2h2v2zm5 0h-2v-2h2v2zm-2-5h-10v-2h10v2z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-white">MAIL ME</p>
              <p className="text-white">info@care2training.com</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-blue-700 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-black"
              >
                <path d="M20 15.5c0 1.597-1.156 3.059-2.75 3.467v.533c0 .828-.672 1.5-1.5 1.5h-8c-.828 0-1.5-.672-1.5-1.5v-.533c-1.594-.408-2.75-1.87-2.75-3.467v-7c0-1.597 1.156-3.059 2.75-3.467v-.533c0-.828.672-1.5 1.5-1.5h8c.828 0 1.5.672 1.5 1.5v.533c1.594.408 2.75 1.87 2.75 3.467v7z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-white">CALL ME</p>
              <p className="text-white">+880 184249 7766</p>
            </div>
          </div>
          <div className="flex mt-6 space-x-6">
            <a
              href="https://www.facebook.com/profile.php?id=100093069712084"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-gray-300 transition-colors duration-300 text-3xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-gray-300 transition-colors duration-300 text-3xl"
            >
              <AiFillTwitterCircle />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-gray-300 transition-colors duration-300 text-3xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-gray-300 transition-colors duration-300 text-3xl"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div>
          <form className="grid gap-4">
            <input
              type="text"
              placeholder="YOUR NAME"
              className="w-full p-3 bg-gray-800 rounded-md text-white placeholder-gray-100"
            />
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="w-full p-3 bg-gray-800 rounded-md text-white placeholder-gray-100"
            />
            <input
              type="text"
              placeholder="YOUR SUBJECT"
              className="w-full p-3 bg-gray-800 rounded-md text-white placeholder-gray-100"
            />
            <textarea
              placeholder="YOUR MESSAGE"
              className="w-full p-3 bg-gray-800 rounded-md text-white placeholder-gray-100"
              rows={5}
            ></textarea>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition duration-300 flex items-center justify-center">
              GET IN TOUCH
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="ml-2"
              >
                <path d="M3.44 18.719l7.86-6.482-7.861-6.482c-.876-.72-1.261-1.766-1.118-2.764.145-1.027.792-1.921 1.729-2.442 1.004-.555 2.303-.681 3.539-.27 2.498.85 15.11 6.541 15.11 6.541s-12.612 5.692-15.11 6.541c-1.236.411-2.535.285-3.539-.27-.937-.521-1.584-1.415-1.729-2.442-.144-.998.241-2.044 1.118-2.764z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Contract;
