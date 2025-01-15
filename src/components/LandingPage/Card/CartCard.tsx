import Image from "next/image";
import image from "../../../UI/image/card1.jpeg";
import HeaderTitle from "../Shared/HeaderTitle";
const CartCard = () => {
  return (
    <div>
      <HeaderTitle
        heading={"Our Services"}
        generalText={"Welcome to the our Services page for get best service."}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-3">
        <div className="card bg-base-100 w-90 shadow-xl ml-2">
          <figure>
            <Image src={image} alt="name" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Student Visa Assistance</h2>
            <div>
              We guide students through every step of the visa application
              process to ensure a smooth and successful application
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-90 shadow-xl  ml-2">
          <figure>
            <Image src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Work Abroad Opportunities</h2>
            <div>
              Explore exciting job opportunities overseas with our expert
              guidance and connections to global employers.
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-90 shadow-xl  ml-2">
          <figure>
            <Image src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Consultancy for Living Abroad</h2>
            <div>
              Get professional advice on settling down abroad, including
              housing, legal requirements, and cultural adaptation.
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-90 shadow-xl mr-2 ml-2">
          <figure>
            <Image src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Language Proficiency Training</h2>
            <div>
              Enhance your language skills with our specialized training
              programs designed for international communication.
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-90 shadow-xl  ml-2">
          <figure>
            <Image src={image} alt="name" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">University Admission Guidance</h2>
            <div>
              Find the right universities and courses with our personalized
              admission consulting services.
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-90 shadow-xl ml-2">
          <figure>
            <Image src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Career Counseling</h2>
            <div>
              Discover the best career paths and educational opportunities
              tailored to your interests and skills.
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-90 shadow-xl  ml-2">
          <figure>
            <Image src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Pre-Departure Orientation</h2>
            <div>
              Get fully prepared for your journey abroad with tips on travel,
              culture, and essential resources.
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-90 shadow-xl mr-2 ml-2">
          <figure>
            <Image src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Scholarship Assistance</h2>
            <div>
              Increase your chances of securing scholarships with our expert
              guidance and application support.
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
