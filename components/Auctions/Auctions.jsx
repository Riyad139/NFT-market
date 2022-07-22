import ProductBar from "../productBar/ProductBar";
import Card from "../utils/Card/Card";
import Curoasle from "../Curoasle/Curoasle";
export default function Auctions(params) {
  return (
    <div className="bg-white">
      <ProductBar />
      <h4 className="flex mt-36 mb-16 text-3xl font-bold justify-center">
        Latest live auctions
      </h4>
      <div
        className="md:w-[120%] w-[80%] mx-auto
       lg:-translate-x-36"
      >
        <Curoasle />
      </div>
    </div>
  );
}
