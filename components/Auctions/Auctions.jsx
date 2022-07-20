import ProductBar from "../productBar/ProductBar";
import Card from "../utils/Card/Card";

export default function Auctions(params) {
  return (
    <div className="bg-white">
      <ProductBar />
      <h4 className="flex mt-36 mb-10 text-3xl font-bold justify-center">
        Latest live auctions
      </h4>
      <div className="w-full flex justify-evenly">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
