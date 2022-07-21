import Image from "next/image";
import { FaRegClock } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

const data = [
  "/RatingDummyImage/rating1.jpg",
  "/RatingDummyImage/rating1.jpg",
  "/RatingDummyImage/rating1.jpg",
  "/RatingDummyImage/rating1.jpg",
];

export default function Card(params) {
  return (
    <div className="rounded-xl p-5 border border-[#e2e2ed] w-[23%]">
      <div className="img w-full shadow-2xl rounded-xl flex  aspect-w-10 aspect-h-13 ">
        <Image
          src="/NftImage/NFTmarket.jpg"
          className=" rounded-md"
          layout="fill"
          objectFit="cover"
          alt="pic"
        />
      </div>
      <div className="des  flex font-medium text-sm  py-3">
        <p>Lorem ipsum dolor sit amet elit.</p>
        <div className="bg-[#e5e4ff]     text-[#2a27c9] text-sm flex items-center space-x-1 px-2">
          <p>3.19</p>
          <p>ETH</p>
        </div>
      </div>
      <div className="flex items-center space-x-3 text-xs">
        <FaRegClock size={16} />
        <p>02:41 min left</p>
      </div>
      <div className="ratings text-xs text-[#7780a1] flex justify-between items-center border-t border-[] mt-7">
        <div className="img flex mt-3">
          {data.map((link, i) => (
            <img
              key={i}
              className=" w-[35px] first:-ml-2 h-[35px] object-cover border-[5px] -ml-4 p-[0.5px] border-white rounded-full"
              src={link}
              alt="rat"
            />
          ))}
        </div>
        <p>35 people are biding</p>
        <div className="flex space-x-1 items-center">
          <AiOutlineHeart size={18} /> <span>120</span>
        </div>
      </div>
    </div>
  );
}
