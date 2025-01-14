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
      <div className="flex justyfy-around- mt-4 m-2">
        <div className="card bg-base-100 w-96 shadow-xl mr-3">
          <figure>
            <Image src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <div>If a dog chews shoes whose shoes does he choose?</div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl mr-3">
          <figure>
            <Image src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <div>If a dog chews shoes whose shoes does he choose?</div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl mr-3">
          <figure>
            <Image src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <div>If a dog chews shoes whose shoes does he choose?</div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl mr-3">
          <figure>
            <Image src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <div>If a dog chews shoes whose shoes does he choose?</div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justyfy-around- mt-4 m-2">
        <div className="card bg-base-100 w-96 shadow-xl mr-3">
          <figure>
            <Image src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <div>If a dog chews shoes whose shoes does he choose?</div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl mr-3">
          <figure>
            <Image src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <div>If a dog chews shoes whose shoes does he choose?</div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl mr-3">
          <figure>
            <Image src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <div>If a dog chews shoes whose shoes does he choose?</div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl mr-3">
          <figure>
            <Image src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <div>If a dog chews shoes whose shoes does he choose?</div>
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
